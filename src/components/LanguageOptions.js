import React, { useContext } from "react"
import { nthIndex } from "../util/strings"
import { useI18next, withTranslation } from "gatsby-plugin-react-i18next"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { Button } from "@material-ui/core"
import PagesContext from "../contexes/PagesContext"
import DropdownMenu from "./user/DropdownMenu"

const LanguageOptions = ({
  t,
  selectedVariant,
  setSelectedVariant,
  navBar,
}) => {
  const { language, languages, originalPath, changeLanguage } = useI18next()
  const pagesContext = useContext(PagesContext)

  let currentPath
  let currentChapter
  let currentPart
  let partPath

  if (pagesContext !== undefined) {
    currentPath = pagesContext.current.frontmatter.path

    if (language === "en") {
      currentChapter = currentPath.substr(1, 10)
    } else {
      currentChapter = currentPath.substr(4, 10)
    }

    if (language === "en") {
      currentPart = nthIndex(currentPath, "/", 2) + 1
    } else {
      currentPart = nthIndex(currentPath, "/", 3) + 1
    }
    if (currentPart !== -1) {
      partPath = currentPath.substr(currentPart, 1)
    }
  }
  const onClick = (e) => {
    if (e === language) {
      return
    }
    if (pagesContext === undefined) {
      changeLanguage(e, originalPath)
      return
    }
    if (language === "en" && currentPath.length < 8) {
      changeLanguage(e, originalPath)
      return
    } else if (language !== "en" && currentPath.length < 11) {
      changeLanguage(e, originalPath)
      return
    }
    const pathRegexFI = new RegExp(`^\/chapter-[1-9]$`, "gm")
    const pathRegexOtherLanguage = new RegExp(`^/[a-z]{2}/chapter-[1-9]$`, "gm")
    if (e === "en" && currentPath.match(pathRegexOtherLanguage)) {
      changeLanguage(e, `/chapter-${currentPath.substr(9, 1)}`)
      return
    } else if (currentPath.match(pathRegexFI)) {
      changeLanguage(e, `/chapter-${currentPath.substr(6, 1)}`)
      return
    }

    const regex = new RegExp(`${currentChapter}${partPath}`, "gm")
    let chapters = pagesContext.all.filter((o) => o.path.match(regex))
    let newLanguagePath
    if (e === "en") {
      const newPathRegex = new RegExp(`^\/chapter-[1-9]`, "gm")
      newLanguagePath = chapters.find((part) => part.path.match(newPathRegex))
        .path
    } else {
      newLanguagePath = chapters.find((part) => part.path.substr(1, 2) === e)
      newLanguagePath = newLanguagePath.path.substr(3)
    }
    changeLanguage(e, newLanguagePath)
  }

  return (
    <DropdownMenu
      selectedVariant={language || "en"}
      setSelectedVariant={onClick}
      navBar={true}
    />
  )
}

export default withTranslation("common")(
  withSimpleErrorBoundary(LanguageOptions),
)
