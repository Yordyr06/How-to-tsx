import React from "react"
import { useState } from "react"
import { Image } from "./components/Image"
import { generateNumber, generateId } from "./utils/utilitiesFn"

interface ImageItems {
  id: string,
  url: string,
}

function App() {
  const [srcs, setSrcs] = useState<Array<ImageItems>>([
    {id:generateId(), url:`https://randomfox.ca/images/${generateNumber()}.jpg`},
    {id:generateId(), url:`https://randomfox.ca/images/${generateNumber()}.jpg`},
    {id:generateId(), url:`https://randomfox.ca/images/${generateNumber()}.jpg`},
    {id:generateId(), url:`https://randomfox.ca/images/${generateNumber()}.jpg`},
  ])

  return (
    <>
      <div className="flex justify-center">
        <h1 className="mb-4">
          <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-300 to-blue-600">
            Hello World
          </span>
        </h1>
      </div>
      {
        srcs.map(({id, url}) => (
          <span key={id} className="p-2">
            <Image url={url} />
          </span>
        ))
      }
    </>
  )
}

export default App
