import type { MouseEventHandler } from "react"

type Props = {
  onClick: MouseEventHandler
}

export const Button = ({ onClick }: Props): JSX.Element => {
  return (
    <div className="">
      <button
        className="w-40 h-10 mb-4 align-middle font-medium  text-slate-300 text-center border-2 border-slate-300 bg-gradient-to-r from-purple-300 to-blue-600 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-900"
        onClick={onClick}
      >
        Get more images
      </button>
    </div>
  )
}