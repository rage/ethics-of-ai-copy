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

const ProgressContainer = styled.div`
  margin: 5rem 0;
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
      <ProgressBar label="Points" n={n_points} max={max_points} />
      <ProgressBar
        label="Exercises"
        n={exercise_completions}
        max={total_exercises}
      />
    </ProgressContainer>
  )
}

export default CourseProgressVisualization
