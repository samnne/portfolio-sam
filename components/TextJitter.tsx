import {m} from "framer-motion"

export const makeTextJitter = (word: string, by: number, color?: string) => {
  return (
    word.split("").map(char =>
      <m.span className='inline-block' whileHover={{
        y: by,
        ...(color ? {color: color} : "")
      }}>
        {char}
      </m.span>)
  )

}
