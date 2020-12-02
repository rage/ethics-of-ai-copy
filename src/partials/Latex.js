import React from "react"
import LatexEngine from "../components/LatexEngine"

const Latex = (props) => {
  return (
    <div>
      <LatexEngine math={props.children}> </LatexEngine>
    </div>
  )
}
export default Latex
