import React, { useContext } from "react"
import { CourseStatusProvider, injectCourseProgress } from "moocfi-quizzes"
import { accessToken } from "../../services/moocfi"
import CourseSettings from "../../../course-settings"
import { CourseProgressProviderContext } from "moocfi-quizzes/dist/contexes/courseProgressProviderContext"
import { LinearProgress } from "@material-ui/core"
import styled from "styled-components"
import ProgressBar from "./ProgressBar"
import { respond } from "../../_respond"
import Completed from "./Completed"
import { useTranslation } from "gatsby-plugin-react-i18next"

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
    color: #757575;
  }
`

const CourseProgressVisualization = (props) => {
  const { t } = useTranslation(["common", "points"])

  if (props.loading) {
    return <div>{t("common:loading2")}</div>
  }

  if (props.error) {
    return <div>{t("common:progressError")}</div>
  }
  const {
    exercise_completions,
    total_exercises,
    max_points,
    n_points,
    completed,
  } = props.courseProgressData
  return (
    <ProgressContainer>
      {completed && <Completed />}
      <ProgressBar label={t("points:totalPoints")} point={n_points} max={max_points} />
      <ProgressBar
        label={t("points:totalExercises")}
        point={exercise_completions ? exercise_completions : 0}
        max={total_exercises}
      />
      <small>{t("common:progressNote")}</small>
    </ProgressContainer>
  )
}

export default injectCourseProgress(CourseProgressVisualization)
