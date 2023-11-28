import React from "react"
import { Image } from "./components/Image"
import { random } from "./utils/randomFn"

function App() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="mb-4">
          <span className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-300 to-blue-600">
            Hello World
          </span>
        </h1>
      </div>

      <Image src={`https://randomfox.ca/images/${random()}.jpg`} />
    </>
  )
}

export default App
