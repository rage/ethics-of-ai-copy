import React from "react"
import { CourseStatusProvider } from "moocfi-quizzes"
import { accessToken } from "../../services/moocfi"
import CourseSettings from "../../../course-settings"
import CourseProgressVisualization from "./CourseProgressVisualization"
import PleaseLogin from "../PleaseLogin"
import LoginStateContext, {
  withLoginStateContext,
} from "../../contexes/LoginStateContext"

const CourseProgress = () => {
  const { loggedIn } = React.useContext(LoginStateContext)
  if (!loggedIn) {
    return null
  }
  return (
    <CourseStatusProvider
      accessToken={accessToken()}
      courseId={CourseSettings.courseId}
      languageId={CourseSettings.languageId}
    >
      <CourseProgressVisualization />
    </CourseStatusProvider>
  )
}

export default withLoginStateContext(CourseProgress)
