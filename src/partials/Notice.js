import React from "react"
import Typography from "@material-ui/core/Typography"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import styled from "styled-components"

const StyledTypography = styled(Typography)`
  color: #cc4336;
  font-weight: bold;
`

const Notice = (props) => {
  return <StyledTypography variant="title">{props.children}</StyledTypography>
}

export default withSimpleErrorBoundary(Notice)
