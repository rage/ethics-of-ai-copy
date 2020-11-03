import React from "react"
import { normalizeExerciseId } from "../../util/strings"
import styled from "styled-components"

const Heading = styled.div`
  & h2 {
    text-align: center;
    font-family: Montserrat;
    font-weight: 600;
    font-size: clamp(20px, 4vw, 40px);
    line-height: 1.8rem;
    color: #202020;
    margin-top: 2em;
    margin-bottom: 1em;
  }
`

const H2 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}
  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <Heading>
      <h2 className="material-header" id={id}>
        {" "}
        {children}{" "}
      </h2>{" "}
    </Heading>
  )
}

export default H2
