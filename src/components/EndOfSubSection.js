import React, { Fragment } from "react"
import styled from "styled-components"
import PagesContext from "../contexes/PagesContext"
import { nthIndex } from "../util/strings"
import { Link } from "gatsby"
import { withTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight as icon } from "@fortawesome/free-solid-svg-icons"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 1rem;
  border-radius: 0.25rem;
  margin: 1rem 0;
  display: inline-block;
  width: 100%;
  border-radius: 10px;
  transition: background-color 0.2s;

  &:hover {
    text-decoration: none;
    color: black;
    background-color: #eeeeee;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  margin-right: 1rem;
  margin-left: 0.5rem;
  color: var(--color);
  font-size: 1.5em;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
`

class EndOfSubSection extends React.Component {
  render() {
    return (
      <PagesContext.Consumer>
        {(value) => {
          const currentPath = value.current.frontmatter.path
          let sectionPath = currentPath
          const sectionSeparator = nthIndex(currentPath, "/", 2)
          if (sectionSeparator !== -1) {
            sectionPath = currentPath.substr(0, sectionSeparator)
          }
          const sectionPages = value.all
            .filter((o) => o.path.startsWith(`${sectionPath}/`))
            .sort((a, b) => {
              a = a.path.toLowerCase()
              b = b.path.toLowerCase()

              return a > b ? 1 : b > a ? -1 : 0
            })

          let currentPageIndex = null

          sectionPages.forEach((page, i) => {
            if (page.path !== currentPath) {
              return
            }
            currentPageIndex = i
          })

          let nextPart = null

          if (
            currentPageIndex !== null &&
            currentPageIndex !== sectionPages.length - 1
          ) {
            nextPart = sectionPages[currentPageIndex + 1]
          }

          const currentChapter = parseInt(sectionPath.split("-")[1])

          const regex = new RegExp("/chapter-[1-9]$", "gm")
          const chapters = value.all
            .filter((o) => o.path.match(regex))
            .sort((a, b) => {
              return a.path > b.path ? 1 : -1
            })
          console.log(chapters)

          const nextSectionPath = `/chapter-${currentChapter + 1}`
          console.log(nextSectionPath)

          const nextSectionPages = value.all
            .filter((o) => o.path.startsWith(`${nextSectionPath}/`))
            .sort((a, b) => {
              a = a.path.toLowerCase()
              b = b.path.toLowerCase()

              return a > b ? 1 : b > a ? -1 : 0
            })
          return (
            <div>
              {this.props.t("endReached")}{" "}
              {nextPart && (
                <Fragment>
                  {this.props.t("continueToNext")}{" "}
                  <ButtonWrapper>
                    <StyledLink to={nextPart.path}>
                      <StyledIcon icon={icon} />
                      {currentPageIndex + 2}. {nextPart.title}
                    </StyledLink>
                  </ButtonWrapper>
                </Fragment>
              )}
              {nextPart === null && currentChapter + 1 <= chapters.length && (
                <Fragment>
                  {this.props.t("continueToNext")}{" "}
                  <ButtonWrapper>
                    <StyledLink to={nextSectionPages[0].path}>
                      <StyledIcon icon={icon} />
                      Chapter {currentChapter + 1}. {nextSectionPages[0].title}
                    </StyledLink>
                  </ButtonWrapper>
                </Fragment>
              )}
            </div>
          )
        }}
      </PagesContext.Consumer>
    )
  }
}

export default withTranslation("common")(
  withSimpleErrorBoundary(EndOfSubSection),
)
