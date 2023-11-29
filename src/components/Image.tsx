import { useRef, useEffect, useState } from "react";

type Props = {
  url: string;
}

export const Image = ({ url }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  const [src, setSrc] = useState("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(()=> {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSrc(url);
        }
      });
    });

    if (node.current) {
      observer.observe(node.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [url]);

  return (
    <figure className="flex justify-center">
      <img
        ref={node} 
        src={src} 
        alt=""
        className="w-80 h-auto rounded-md bg-gray-200"
      />
    </figure>
  )
}