import React from "react"
import { normalizeExerciseId } from "../../util/strings"
import styled from "styled-components"

const Heading = styled.div`
  & h3 {
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    font-size: clamp(20px, 3vw, 30px);
    color: #202020;
  }
`

const H3 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}
  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <Heading>
      <h3 class="material-header" id={id}>
        {" "}
        {children}{" "}
      </h3>{" "}
    </Heading>
  )
}

export default H3
