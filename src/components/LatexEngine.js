import React from "react"
import { MathComponent } from "mathjax-react"

const Latex = (props) => {
  console.log(props)
  return (
    <div>
      <MathComponent tex={String.raw`${props.math}`} />
    </div>
  )
}
export default Latex
