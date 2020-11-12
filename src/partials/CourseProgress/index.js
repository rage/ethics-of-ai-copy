import React from "react"
import { CourseStatusProvider } from "moocfi-quizzes"
import { accessToken, loggedIn } from "../../services/moocfi"
import CourseSettings from "../../../course-settings"
import CourseProgressVisualization from "./CourseProgressVisualization"
import PleaseLogin from "../PleaseLogin"

const CourseProgress = () => {
  if (!loggedIn()) {
    return <PleaseLogin />
  }
  return <CourseStatusProvider
    accessToken={accessToken()}
    courseId={CourseSettings.courseId}
    languageId={CourseSettings.languageId}
  >
    <CourseProgressVisualization />
  </CourseStatusProvider>
}

export default CourseProgress
