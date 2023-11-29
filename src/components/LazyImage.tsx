import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
}

export const LazyImage = ({ src, ...props }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [url, setUrl] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setUrl(src);
        }
      });
    });

    if (node.current) {
      observer.observe(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src]);

  return (
    <figure className="flex justify-center">
      <img
        ref={node} 
        src={url} 
        {...props}
      />
    </figure>
  )
}