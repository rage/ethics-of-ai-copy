import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const TextWrapper = styled.div`
  font-size: 1.125rem;
  line-height: 1.89;
`

const TextBox = (props) => {
  return <TextWrapper>{props.children}</TextWrapper>
}

export default withSimpleErrorBoundary(TextBox)
