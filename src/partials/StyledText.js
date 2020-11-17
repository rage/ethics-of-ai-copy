import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const TextWrapper = styled.div`
<<<<<<< HEAD
p {
  font-size: 1.125rem;
  line-height: 1.89;
}

=======
  font-size: 1.125rem;
  line-height: 1.89;
>>>>>>> fec96ae9ade6f5150e94959e8d429894aa3fb16e
`

const TextBox = (props) => {
  return <TextWrapper>{props.children}</TextWrapper>
}

export default withSimpleErrorBoundary(TextBox)
