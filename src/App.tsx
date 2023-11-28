import React from "react"
import { useState } from "react"
import { Image } from "./components/Image"
import { random } from "./utils/randomFn"

function App() {
  const [srcs, setSrcs] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`
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
        srcs.map((src, key) => (
          <span key={key} className="p-2">
            <Image src={src} />
          </span>
        ))
      }
    </>
  )
}

export default App
