import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const Container = styled.div`
  max-width: 880px;
  margin-left: auto;
  margin-right: auto;
`

export default withSimpleErrorBoundary(Container)
