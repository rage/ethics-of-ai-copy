import React, { useContext } from "react"
import { CourseStatusProvider } from "moocfi-quizzes"
import { accessToken } from "../../services/moocfi"
import CourseSettings from "../../../course-settings"
import {
  CourseProgressProviderContext,
  CourseStatusProviderContext,
} from "moocfi-quizzes/dist/contexes/courseStatusProviderContext"
import { LinearProgress } from "@material-ui/core"
import styled from "styled-components"
import ProgressBar from "./ProgressBar"
import { respond } from "../../_respond"
import Completed from "./Completed"

const ProgressContainer = styled.div`
  margin: 5rem 10rem;

  ${respond.mobile`
  margin: 5rem 2rem;
`}
  ${respond.xs`
  margin: 5rem 3rem;
`} ${respond.sm`
  margin: 5rem 5rem;
`} ${respond.md`
  margin: 5rem 10rem;
`} ${respond.lg`
  margin: 5rem auto;
  max-width: 1140px;
`};

  small {
    color: #333;
  }
`

const CourseProgressVisualization = () => {
  const data = useContext(CourseProgressProviderContext)
  if (data.loading) {
    return <div>Loading...</div>
  }

  if (data.error) {
    return <div>Error while fetching progress data.</div>
  }
  const {
    exercise_completions,
    total_exercises,
    max_points,
    n_points,
    completed,
  } = data.courseProgressData
  return (
    <ProgressContainer>
      { completed && <Completed /> }
      <ProgressBar label="Totals Points" point={n_points} max={max_points} />
      <ProgressBar
        label="Total Exercises"
        n={exercise_completions}
        max={total_exercises}
      />
      <small>Please not that you'll get points from peer reviewed exercises only after others have reviewed your answer.</small>
    </ProgressContainer>
  )
}

export default CourseProgressVisualization
