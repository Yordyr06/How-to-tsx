import React from "react"
import { useState } from "react"
import type { MouseEventHandler } from "react"
import { LazyImage } from "./components/LazyImage"
import { generateNumber, generateId } from "./utils/utilitiesFn"
import { Button } from "./components/Button"

type ImageItems = {
  id: string,
  url: string,
}

function App() {
  const [images, setImages] = useState<Array<ImageItems>>([])

  const getImage: MouseEventHandler<HTMLButtonElement> = (event): void => {
    event.preventDefault();
    const newImages: ImageItems = {
      id:generateId(), url:`https://randomfox.ca/images/${generateNumber()}.jpg`
    }

    setImages([...images, newImages]);
  }

  return (
    <>
      <div className="flex flex-col justify-center content-center">
        <h1 className="mb-4">
          <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-300 to-blue-600">
            Hello World
          </span>
        </h1>

        <Button onClick={getImage} />
      </div>
      {
        images.map(({ id, url }) => (
          <span key={id} className="p-2">
            <LazyImage 
              src={url}
              onClick={() => console.log("Hello")}
              className="w-80 h-auto rounded-md bg-gray-200"
            />
          </span>
        ))
      }
    </>
  )
}

export default App
