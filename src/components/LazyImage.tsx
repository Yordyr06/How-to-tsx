import { useRef, useEffect, useState } from "react";
import type { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  onLazyLoad?: (node:HTMLImageElement) => void
}

export const LazyImage = ({ src, onLazyLoad, ...props }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [isLazyLoad, setIsLazyLoad] = useState(false)
  const [url, setUrl] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(()=> {
    if (isLazyLoad) {
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || !node.current) {
          return
        }
      });
    });

    setUrl(src);
    observer.disconnect()
    setIsLazyLoad(true)

    if (node.current && onLazyLoad) {
      onLazyLoad(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [src, onLazyLoad, isLazyLoad]);

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