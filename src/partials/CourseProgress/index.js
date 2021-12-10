import React from "react"
import { CourseStatusProvider } from "moocfi-quizzes"
import { accessToken } from "../../services/moocfi"
import CourseProgressVisualization from "./CourseProgressVisualization"
import PleaseLogin from "../PleaseLogin"
import LoginStateContext, {
  withLoginStateContext,
} from "../../contexes/LoginStateContext"
import getCourseSettings from "../../util/courseSettingsWithLanguage"

const CourseProgress = () => {
  const { loggedIn } = React.useContext(LoginStateContext)

  const CourseSettings = getCourseSettings()

  let languageId
  if (CourseSettings.language === 'sv') {
    languageId = 'sv_SE'
  } else if (CourseSettings.language === 'fi') {
    languageId = 'fi_FI'
  } else {
    languageId = 'en_US'
  }

  if (!loggedIn) {
    return null
  }
  return (
    <CourseStatusProvider
      accessToken={accessToken()}
      courseId={CourseSettings.courseId}
      languageId={languageId}
    >
      <CourseProgressVisualization />
    </CourseStatusProvider>
  )
}

export default withLoginStateContext(CourseProgress)
