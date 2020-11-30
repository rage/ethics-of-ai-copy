import React from "react"
import { makeStyles, withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
/* import { LinearProgress } from "@material-ui/core"; */
import styled from "styled-components"

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#C59C5C',
  },
}))(LinearProgress);
/* const StyledLinearProgress = styled(LinearProgress)`
  height: 30px;
  flex: 1;
  position: relative;
  bottom: -4px;
  border-radius: 100px;
  background: #E9F0F1;
`

const LinearProgressContainer = styled.div`
  display: flex;
  margin-bottom: 1rem;
`
 */

const Label = styled.div`
  min-width: 125px;
  font-weight: 500;
  margin-right: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  span:first-of-type {
    justify-self: start;
  }

  span:last-child{
    justify-self: end;
  }
`

const ProgresssBar = ({ n, max, label }) => {
  const pointsScaled = (n / max) * 100
  return (
    <div>
      <Label>
        <span>{label}</span> <span>{Math.round(pointsScaled)+"%  Completed"}</span>
      </Label>
    <BorderLinearProgress variant="determinate" value={pointsScaled} />
    </div>
  )
}

export default ProgresssBar
