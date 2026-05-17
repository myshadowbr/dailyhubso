import { useEffect, useState } from "react";

interface ImagePlaceholderProps {
  src: string;
  alt: string;
  aspectRatio: string; // usado apenas no placeholder — não força proporção na imagem real
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

  // Imagem real: sem aspect-ratio forçado — ocupa 100% da largura
  // e define sua própria altura naturalmente, sem distorção nem corte.
  if (exists) {
    return (
      <div className={`w-full overflow-hidden rounded-[12px] ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-auto block"
        />
      </div>
    );
  }

  // Placeholder: mantém aspect-ratio para reservar espaço visual
  return (
    <div
      className={`w-full overflow-hidden rounded-[12px] ${className}`}
      style={{ aspectRatio }}
    >
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
    </div>
  );
}
