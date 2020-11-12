import React from "react"
import { LinearProgress } from "@material-ui/core"
import styled from "styled-components"

const StyledLinearProgress = styled(LinearProgress)`
  margin-bottom: 1rem;
  height: 15px;
`

const ProgresssBar = ({n, max}) => {
  const pointsScaled = (n / max) * 100
  return <StyledLinearProgress variant="determinate" value={pointsScaled} />
}

export default ProgresssBar
