import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`

export default withSimpleErrorBoundary(Container)
