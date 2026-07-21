interface SealProps {
  caption: string;
}

export default function Seal({ caption }: SealProps) {
  return (
    <div className="crest" role="img" aria-label={caption}>
      <div className="crest__stage">
        <div className="crest__rays" />
        <div className="crest__glow" />
        <div className="crest__layer crest__layer--back" />
        <div className="crest__layer crest__layer--front" />
      </div>
      <span className="crest__caption">{caption}</span>
    </div>
  );
}