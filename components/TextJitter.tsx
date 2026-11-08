import {m} from "framer-motion"

export const makeTextJitter = (word: string, by: number, color?: string) => {
  return (
    word.split("").map((char, i) =>
      <m.span key={`char:${char}${i}`} className='inline-block' whileHover={{
        y: by,
        ...(color ? {color: color} : "")
      }}>
        {char}
      </m.span>)
  )

}
