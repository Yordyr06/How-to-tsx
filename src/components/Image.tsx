import { useRef } from "react";

type Props = {
  url: string;
}

export const Image = ({ url }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null)
  
  return (
    <figure className="flex justify-center">
      <img
        ref={node} 
        src={url} 
        alt=""
        className="w-80 h-auto rounded-md"
      />
    </figure>
  )
}