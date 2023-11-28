import { useState } from "react";
import { random } from "./randomFn";

export const Global = (): object => {
  const [src, setSrc] = useState<string[]>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`
  ])

  return {
    src,
    setSrc
  }
}