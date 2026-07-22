export default async function handler(req, res) {
  const base = process.env.SHOPWARE_STORE_API_URL;
  const key = process.env.SHOPWARE_ACCESS_KEY;

  if (!base || !key) {
    res.status(200).json({});
    return;
  }

  const raw = typeof req.query.numbers === "string" ? req.query.numbers : "";
  const numbers = raw
    .split(",")
    .map((value) => value.trim())
    .filter((value) => /^SW\d+$/i.test(value))
    .slice(0, 50);

  if (numbers.length === 0) {
    res.status(200).json({});
    return;
  }

  try {
    const upstream = await fetch(`${base.replace(/\/+$/, "")}/store-api/product`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "sw-access-key": key,
      },
      body: JSON.stringify({
        limit: numbers.length,
        filter: [{ type: "equalsAny", field: "productNumber", value: numbers }],
        includes: { product: ["productNumber", "available", "availableStock", "stock"] },
      }),
    });

    if (!upstream.ok) {
      res.status(200).json({});
      return;
    }

    const data = await upstream.json();
    const elements = Array.isArray(data.elements) ? data.elements : [];
    const map = {};

    for (const element of elements) {
      if (!element || typeof element.productNumber !== "string") {
        continue;
      }
      let soldOut = false;
      if (typeof element.available === "boolean") {
        soldOut = element.available === false;
      } else if (typeof element.availableStock === "number") {
        soldOut = element.availableStock <= 0;
      }
      map[element.productNumber] = soldOut;
    }

    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    res.status(200).json(map);
  } catch {
    res.status(200).json({});
  }
}