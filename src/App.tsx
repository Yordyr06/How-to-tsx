import { Image } from "./components/Image"

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

      <Image />
    </>
  )
}

export default App
