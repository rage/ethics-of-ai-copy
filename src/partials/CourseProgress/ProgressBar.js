import React from "react"
import { LinearProgress } from "@material-ui/core"
import styled from "styled-components"

const StyledLinearProgress = styled(LinearProgress)`
  height: 30px;
  flex: 1;
  position: relative;
  bottom: -4px;
  border-radius: 100px;
`

const LinearProgressContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
const Label = styled.div`
  min-width: 125px;
  font-weight: 500;
  margin-right: 1rem;
  display: flex;
  align-self: center;
`

const ProgresssBar = ({ n, max, label }) => {
  const pointsScaled = (n / max) * 100
  return (
    <LinearProgressContainer>
      <Label>
        {label} {n}/{max}:
      </Label>
      <StyledLinearProgress variant="determinate" value={pointsScaled} />
    </LinearProgressContainer>
  )
}

export default ProgresssBar
