interface Props {
  src: string;
}

export const Image = ({ src }: Props): JSX.Element => {
  return (
    <figure className="flex justify-center">
      <img 
        src={src} 
        alt=""
        className="w-80 h-auto rounded-md"
      />
    </figure>
  )
}