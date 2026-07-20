interface SealProps {
  caption: string;
}

export default function Seal({ caption }: SealProps) {
  return (
    <div className="seal" role="img" aria-label={caption}>
      <div className="seal__frame">
        <svg viewBox="0 0 48 48" className="seal__mark" aria-hidden="true">
          <path d="M4 40 L18 14 L26 28 L32 18 L44 40 Z" />
        </svg>
        <span className="seal__monogram">BB</span>
      </div>
      <span className="seal__caption">{caption}</span>
    </div>
  );
}
