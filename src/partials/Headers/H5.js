import React from "react"
import styled from "styled-components"
import { normalizeExerciseId } from "../../util/strings"

const Heading = styled.div`
  & h5 {
    font-family: 'Work Sans', sans-serif;
    font-size: clamp(20px, 2vw, 20px);
    color: #26252a;
  }
`

const H5 = ({ children }) => {
  let text = "unknown heading"
  try {
    text = children.find((o) => typeof o === "string") || "unknown heading"
  } catch (e) {}
  const id = `heading-${normalizeExerciseId(text)}`
  return (
    <Heading>
      <h5 class="material-header" id={id}>
        {" "}
        {children}{" "}
      </h5>{" "}
    </Heading>
  )
}

export default H5
