import React from "react"
import { normalizeExerciseId } from "../../util/strings"
import styled from "styled-components"

const Heading = styled.div`
  & h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: clamp(40px, 4vw, 60px);
    color: #26252a;
  }
`

const H1 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}

  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <Heading>
      <h1 class="material-header" id={id}>
        {" "}
        {children}{" "}
      </h1>{" "}
    </Heading>
  )
}

export default H1
