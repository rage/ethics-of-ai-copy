import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const TitleStyle = styled.h1`
  color: #3b4754;
`

const Title = (props) => {
  return (
    <div>
      <TitleStyle>I) {props.name}</TitleStyle>
    </div>
  )
}

export default withSimpleErrorBoundary(Title)
