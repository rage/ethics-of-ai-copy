import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from "i18next-http-backend"
import CourseSettings from "../course-settings"
import commonEN from "./locales/common/en"
import pointsBalloonEN from "./locales/pointsBalloon/en"
import userEN from "./locales/user/en"
import navbarEN from "./locales/navbar/en"
import commonFI from "./locales/common/fi"
import pointsBalloonFI from "./locales/pointsBalloon/fi"
import userFI from "./locales/user/fi"
import navbarFI from "./locales/navbar/fi"

const resources = {
  en: {
    common: commonEN,
    "points-balloon": pointsBalloonEN,
    user: userEN,
    navbar: navbarEN,
  },
  fi: {
    common: commonFI,
    "points-balloon": pointsBalloonFI,
    user: userFI,
    navbar: navbarFI,
  },
}

i18n.use(Backend).use(initReactI18next).init({
  resources,
  ns: ["common", "user", "points-balloon", "navbar"],
  defaultNS: "common",
  react: {
    useSuspense: false,
  },
  lng: CourseSettings.language,
  backend: {
    loadPath: '/src/locales/{{ns}}/{{lng}}.json'
  },
})

export default i18n
