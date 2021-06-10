import i18n from "i18next"
import { initReactI18next } from "gatsby-plugin-react-i18next"
import CourseSettings from "../course-settings"
import commonEN from "./locales/en/common"
import pointsEN from "./locales/en/points"
import userEN from "./locales/en/user"
import navbarEN from "./locales/en/navbar"
import commonFI from "./locales/fi/common"
import pointsFI from "./locales/fi/points"
import userFI from "./locales/fi/user"
import navbarFI from "./locales/fi/navbar"

const resources = {
  en: {
    common: commonEN,
    points: pointsEN,
    user: userEN,
    navbar: navbarEN,
  },
  fi: {
    common: commonFI,
    points: pointsFI,
    user: userFI,
    navbar: navbarFI,
  },
}

i18n.use(initReactI18next).init({
  resources,
  ns: ["common", "user", "points", "navbar"],
  defaultNS: "common",
  react: {
    useSuspense: false,
  },
  lng: CourseSettings.language,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
