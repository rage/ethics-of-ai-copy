import React, { Fragment, useContext, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import H2 from "../partials/Headers/H2"
import Layout from "./Layout"
import HeroSection from "../partials/Contentpage/HeroSection"
import PagesInThisSection from "../partials/PagesInThisSection"
import NextChapter from "../partials/Contentpage/NextChapter"
import getNamedPartials from "../partials"
import CoursePageFooter from "../components/CoursePageFooter"
import { getCachedUserDetails } from "../services/moocfi"
import "./remark.css"
import PagesContext from "../contexes/PagesContext"
import LoginStateContext, {
  LoginStateContextProvider,
  withLoginStateContext,
} from "../contexes/LoginStateContext"
import Container from "../components/Container"
import ChapterBox from "../partials/ChapterBox"

import { loggedIn } from "../services/moocfi"
import { capitalizeFirstLetter } from "../util/strings"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleUp as icon } from "@fortawesome/free-solid-svg-icons"
import EndOfSubSection from "../components/EndOfSubSection"
import { tryToScrollToSelector } from "../util/dom"
import { nthIndex } from "../util/strings"
import { respond } from "../_respond"
import { useI18next, withTranslation } from "gatsby-plugin-react-i18next"
import courseSettings from "../../course-settings"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25rem;
  font-size: 1em;
`

const ContentWrapper = styled.article`
  ${respond.mobile`
width: 100%;
padding: 0.8rem;
`}
`

const UpLink = styled(Link)`
  color: #332c2cb3 !important;
  font-weight: bold;
  margin-bottom: 1rem !important;
  display: block;

  :hover {
    text-decoration: none;
    color: #805050b3 !important;
  }
`

const CourseContentTemplate = ({ data }) => {
  const loginStateContext = useContext(LoginStateContext)
  const { navigate, t } = useI18next()

  const missingInfo = async () => {
    if (loginStateContext.loggedIn) {
      let userInfo = await getCachedUserDetails()
      const research = userInfo?.extra_fields?.research
      if (research === undefined) {
        navigate("/missing-info")
      }
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const selector = window.location.hash
      setTimeout(() => {
        tryToScrollToSelector(selector)
      }, 100)
      setTimeout(() => {
        tryToScrollToSelector(selector)
      }, 500)
      setTimeout(() => {
        tryToScrollToSelector(selector)
      }, 1000)
      setTimeout(() => {
        tryToScrollToSelector(selector)
      }, 2000)
    }

    missingInfo()
  }, [])

  const { frontmatter, htmlAst } = data.page
  const allPages = data.allPages.edges.map((o) => o.node?.frontmatter)
  const partials = getNamedPartials()
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: partials,
  }).Compiler

  const language = data.locales.edges[0].node.language
  let pathWithoutLng = `${frontmatter.path.replace(`/${language}`, "")}`
  let parentSectionName = capitalizeFirstLetter(
    `${pathWithoutLng.split(/\//g)[1].replace(/-/g, " ")}`,
  )
  if (language === "sv") {
    parentSectionName = parentSectionName.replace("Chapter", "Kapitel")
  } else if (language === "fi") {
    parentSectionName = parentSectionName.replace("Chapter", "Luku")
  }

  const chooseChapterHeader = {
    1: [t("chapterTitle1"), t("chapterInfo1")],
    2: [t("chapterTitle2"), t("chapterInfo2")],
    3: [t("chapterTitle3"), t("chapterInfo3")],
    4: [t("chapterTitle4"), t("chapterInfo4")],
    5: [t("chapterTitle5"), t("chapterInfo5")],
    6: [t("chapterTitle6"), t("chapterInfo6")],
    7: [t("chapterTitle7"), t("chapterInfo7")],
  }

  const filePath = data.page.fileAbsolutePath.substring(
    data.page.fileAbsolutePath.lastIndexOf("/data/"),
    data.page.fileAbsolutePath.length,
  )
  const chooseChapterValue = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
  }
  const heroIconPath = data.page.htmlAst.children[0]
  const heroIcon =
    heroIconPath === undefined ? undefined : heroIconPath.properties.heroicon
  return (
    <Fragment>
      <Helmet title={frontmatter.title} />
      <PagesContext.Provider
        value={{
          all: allPages,
          current: { frontmatter: frontmatter, filePath: filePath },
          language: language,
        }}
      >
        <LoginStateContextProvider>
          <Layout>
            <HeroSection
              title={parentSectionName}
              subtitle={chooseChapterHeader[pathWithoutLng.substr(9, 1)][0]}
              intro={chooseChapterHeader[pathWithoutLng.substr(9, 1)][1]}
              heroIcon={heroIcon}
            ></HeroSection>
            <Container>
              <ContentWrapper>
                <ChapterBox />
                <H2>
                  {" "}
                  {chooseChapterValue[pathWithoutLng.substr(11, 1)]}.{" "}
                  {frontmatter.title}
                </H2>
                {renderAst(htmlAst)}
                <EndOfSubSection />
              </ContentWrapper>
            </Container>
            {/*  <CoursePageFooter />*/}
          </Layout>
        </LoginStateContextProvider>
      </PagesContext.Provider>
    </Fragment>
  )
}

export default withTranslation("common")(
  withLoginStateContext(CourseContentTemplate),
)

export const pageQuery = graphql`
  query($path: String!, $language: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      html
      frontmatter {
        path
        title
      }
      fileAbsolutePath
    }
    allPages: allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
