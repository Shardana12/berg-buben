export default async function handler(req, res) {
  const debug = req.query.debug === "1";
  const base = process.env.SHOPWARE_STORE_API_URL;
  const key = process.env.SHOPWARE_ACCESS_KEY;
  const proxySecret = process.env.SHOPWARE_PROXY_SECRET;

  const diag = {
    hasUrl: Boolean(base),
    url: base || null,
    hasKey: Boolean(key),
    keyLength: key ? key.length : 0,
    hasProxySecret: Boolean(proxySecret),
  };

  if (!base || !key) {
    if (debug) {
      res.status(200).json({ note: "missing env vars", diag });
      return;
    }
    res.status(200).json({});
    return;
  }

  const raw = typeof req.query.numbers === "string" ? req.query.numbers : "";
  const numbers = raw
    .split(",")
    .map((value) => value.trim())
    .filter((value) => /^SW\d+$/i.test(value))
    .slice(0, 50);
  diag.numbers = numbers;

  if (numbers.length === 0) {
    if (debug) {
      res.status(200).json({ note: "no valid numbers", diag });
      return;
    }
    res.status(200).json({});
    return;
  }

  const endpoint = `${base.replace(/\/+$/, "")}/store-api/product`;
  diag.endpoint = endpoint;

  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "de-DE,de;q=0.9",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "sw-access-key": key,
  };
  if (proxySecret) {
    headers["x-bb-proxy"] = proxySecret;
  }

  try {
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify({
        limit: numbers.length,
        filter: [{ type: "equalsAny", field: "productNumber", value: numbers }],
        includes: { product: ["productNumber", "available", "availableStock", "stock"] },
      }),
    });

    diag.upstreamStatus = upstream.status;
    diag.upstreamOk = upstream.ok;

    const text = await upstream.text();
    diag.bodySnippet = text.slice(0, 1500);

    let data = {};
    try {
      data = JSON.parse(text);
    } catch {
      data = {};
    }

    const elements = Array.isArray(data.elements) ? data.elements : [];
    diag.elementsCount = elements.length;

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

    if (debug) {
      res.status(200).json({ map, diag });
      return;
    }

    res.setHeader("Cache-Control", "public, s-maxage=60, stale-while-revalidate=300");
    res.status(200).json(map);
  } catch (error) {
    diag.error = String(error);
    if (debug) {
      res.status(200).json({ note: "fetch failed", diag });
      return;
    }
    res.status(200).json({});
  }
}