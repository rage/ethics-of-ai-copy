import axios from "axios"
import { accessToken, getCourseVariant, loggedIn } from "./moocfi"
import getCourseSettings from "../util/courseSettingsWithLanguage"

export async function fetchQuizzesProgress() {
  const courseSettings = getCourseSettings()
  let id = courseSettings.quizzesId
  const courseVariant = await getCourseVariant()

  if (courseVariant === "ohja-dl" || courseVariant === "ohja-nodl") {
    id = "5c89b9b6-b8a6-4079-8c4f-a4bbc80b66a4"
  }
  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v1/courses/${id}/users/current/progress`,
    { headers: { Authorization: `Bearer ${accessToken()}` } },
  )
  return response.data?.points_by_group
}

export async function fetchQuizNames() {
  const courseSettings = getCourseSettings()
  let id = courseSettings.quizzesId
  let courseVariant = "dl"
  const language = courseSettings.language
  let quizzesLanguage = "en_US"

  if (language === "sv") {
    quizzesLanguage = "sv_SE"
  } else if (language === "fi") {
    quizzesLanguage = "fi_FI"
  }

  if (loggedIn()) {
    courseVariant = await getCourseVariant()
  }

  if (courseVariant === "ohja-dl" || courseVariant === "ohja-nodl") {
    id = "5c89b9b6-b8a6-4079-8c4f-a4bbc80b66a4"
  }

  const response = await axios.get(
    `https://quizzes.mooc.fi/api/v1/quizzes/${id}/titles/${quizzesLanguage}`,
  )
  return response.data
}
