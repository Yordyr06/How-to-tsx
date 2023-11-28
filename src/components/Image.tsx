interface Props {
  url: string;
}

export const Image = ({ url }: Props): JSX.Element => {
  return (
    <figure className="flex justify-center">
      <img 
        src={url} 
        alt=""
        className="w-80 h-auto rounded-md"
      />
    </figure>
  )
}