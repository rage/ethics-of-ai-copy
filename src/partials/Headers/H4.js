import React from "react"
import { normalizeExerciseId } from "../../util/strings"
import styled from "styled-components"

const Heading = styled.div`
  & h4 {
    font-family: "Work Sans", sans-serif;
    font-size: clamp(18px, 2vw, 26px);
    font-weight: 500;
    color: #202020;
  }
`

const H4 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}
  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <Heading>
      <h4 class="material-header" id={id}>
        {" "}
        {children}{" "}
      </h4>{" "}
    </Heading>
  )
}

export default H4
