import React from "react"
import { normalizeExerciseId } from "../../util/strings"
import styled from "styled-components"

const Heading = styled.div`
  & h2 {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: clamp(28px, 4vw, 40px);
    color: #202020;
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
