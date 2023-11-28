import { useState } from "react";
import { generateNumber } from "./utilitiesFn";

export const Global = (): object => {
  const [src, setSrc] = useState<string[]>([
    `https://randomfox.ca/images/${generateNumber()}.jpg`,
    `https://randomfox.ca/images/${generateNumber()}.jpg`,
    `https://randomfox.ca/images/${generateNumber()}.jpg`,
    `https://randomfox.ca/images/${generateNumber()}.jpg`
  ])

  return {
    src,
    setSrc
  }
}