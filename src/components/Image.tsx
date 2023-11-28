import { random } from "../utils/randomFn"

export const Image = (): JSX.Element => {
  const image: string = `https://randomfox.ca/images/${random()}.jpg` 
  
  return (
    <figure className="flex justify-center">
      <img 
        src={image} 
        alt=""
        className="w-80 h-auto rounded-md"
      />
    </figure>
  )
}