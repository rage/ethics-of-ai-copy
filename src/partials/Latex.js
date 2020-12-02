import React from "react"
import { MathComponent } from "mathjax-react"

const Latex = (props) => {
  return (
    <div>
      <MathComponent tex={String.raw`${props.children}`} />
    </div>
  )
}
export default Latex
