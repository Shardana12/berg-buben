import type { Block } from "../content/products";

interface BlockTextProps {
  blocks: Block[];
}

export default function BlockText({ blocks }: BlockTextProps) {
  return (
    <div className="prose">
      {blocks.map((block, i) => {
        if (block.type === "h") {
          return <h2 key={i}>{block.text}</h2>;
        }
        if (block.type === "ul") {
          return (
            <ul key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block.text}</p>;
      })}
    </div>
  );
}
