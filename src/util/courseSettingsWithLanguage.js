import CourseSettingsEN from "../../course-settings"
import CourseSettingsSV from "../../course-settings-sv"
import CourseSettingsFI from "../../course-settings-fi"

export default function getCourseSettings() {
  let language = "en"
  if (typeof window === "undefined") {
    language = "en"
  } else if (/\/sv\/|\/sv$/.test(window.location.href)) {
    language = "sv"
  } else if (/\/fi\/|\/fi$/.test(window.location.href)) {
    language = "fi"
  }

  let courseSettings
  if (language === "en") {
    courseSettings = CourseSettingsEN
  } else if (language === "sv") {
    courseSettings = CourseSettingsSV
  } else {
    courseSettings = CourseSettingsFI
  }

  return courseSettings
}
