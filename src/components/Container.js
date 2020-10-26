import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`

export default withSimpleErrorBoundary(Container)
