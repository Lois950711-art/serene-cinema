import { useEffect, useState } from "react";

interface MoviePosterProps {
  src: string;
  title: string;
  className?: string;
  imgClassName?: string;
}

const MoviePoster = ({ src, title, className = "", imgClassName = "" }: MoviePosterProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
  }, [src, title]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-muted/60 animate-pulse">
          <div className="h-4 w-24 rounded bg-muted-foreground/20" />
          <p className="text-[11px] text-muted-foreground/80">正在为您绘制海报...</p>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-card px-4 text-center">
          <p className="text-sm font-medium tracking-wide text-card-foreground">{title}</p>
          <p className="mt-1 text-[11px] text-muted-foreground">海报暂时不可用</p>
        </div>
      )}

      <img
        src={src}
        alt={title}
        loading="lazy"
        className={`h-full w-full object-cover transition-opacity duration-300 ${imgClassName} ${isLoaded && !hasError ? "opacity-100" : "opacity-0"}`}
        draggable={false}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
          setIsLoaded(false);
        }}
      />
    </div>
  );
};

export default MoviePoster;
