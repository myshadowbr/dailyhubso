import { useEffect, useState } from "react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  aspectRatio: string;
  label: string;
  className?: string;
}

export function ImagePlaceholder({
  src,
  alt,
  aspectRatio,
  label,
  className = "",
}: ImagePlaceholderProps) {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const img = new Image();
    img.onload = () => !cancelled && setExists(true);
    img.onerror = () => !cancelled && setExists(false);
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <div
      className={`w-full overflow-hidden rounded-[12px] ${className}`}
      style={{ aspectRatio }}
    >
      {exists ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div
          className="w-full h-full flex items-center justify-center"
          style={{
            background: "#111111",
            border: "1px dashed #4ADE8040",
            borderRadius: "12px",
          }}
        >
          <span
            className="font-mono text-[11px] tracking-wider"
            style={{ color: "#4ADE8060" }}
          >
            {label}
          </span>
        </div>
      )}
    </div>
  );
}
