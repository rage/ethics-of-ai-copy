import React, { Fragment } from "react"
import styled from "styled-components"
import PagesContext from "../contexes/PagesContext"
import { nthIndex } from "../util/strings"
import { Link } from "gatsby"
import { withTranslation } from "react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight as icon } from "@fortawesome/free-solid-svg-icons"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { green } from "@material-ui/core/colors"

const SectionWrapper = styled.div`
  margin-top: 3rem;
  background: #f0f0f0;
  padding: 2rem;

  p {
    font-size: 1.4rem;
    color: #333;
    margin: 0;
    padding: 0;
    dislay: flex;
  }

  p:nth-child(1) {
    font-size: 2rem;
    font-weight: 500;
  }
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 1rem 1.4rem;
  margin: 1rem 0;
  display: inline-block;
  min-width: 24%;
  border-radius: 50px;
  background-color: #333;
  transition: background-color 0.2s;

  &:hover {
    text-decoration: none;
    color: white;
    background-color: #333;
  }

  span {
    color: white !important;
  }
`

const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  margin-right: 1rem;
  margin-left: 0.5rem;
  color: var(--color);
  font-size: 1.6em;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
`

const ChapterSubsectionChooser = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
}

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

          const nextSectionPath = `/chapter-${currentChapter + 1}`
          const nextSectionPages = value.all
            .filter((o) => o.path.startsWith(`${nextSectionPath}/`))
            .sort((a, b) => {
              a = a.path.toLowerCase()
              b = b.path.toLowerCase()

              return a > b ? 1 : b > a ? -1 : 0
            })

          return (
            <SectionWrapper>
              <p>{this.props.t("endReached")} </p>
              {nextPart && (
                <Fragment>
                  <p>{this.props.t("continueToNext")} </p>
                  <ButtonWrapper>
                    <StyledLink to={nextPart.path}>
                      <StyledIcon icon={icon} />
                      <span>Next section</span>
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
                      <span>Next chapter</span>
                    </StyledLink>
                  </ButtonWrapper>
                </Fragment>
              )}
            </SectionWrapper>
          )
        }}
      </PagesContext.Consumer>
    )
  }
}

export default withTranslation("common")(
  withSimpleErrorBoundary(EndOfSubSection),
)
