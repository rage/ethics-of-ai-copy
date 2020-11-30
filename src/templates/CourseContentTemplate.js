import React, { Fragment } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { navigate, Link } from "gatsby"
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

export default class CourseContentTemplate extends React.Component {
  static contextType = LoginStateContext

  async componentDidMount() {
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

    if (!loggedIn()) {
      return
    }

    let userInfo = await getCachedUserDetails()
    const research = userInfo?.extra_fields?.research
    if (research === undefined) {
      navigate("/missing-info")
    }
  }

  render() {
    const { data } = this.props
    const { frontmatter, htmlAst } = data.page
    const allPages = data.allPages.edges.map((o) => o.node?.frontmatter)
    const partials = getNamedPartials()
    const renderAst = new rehypeReact({
      createElement: React.createElement,
      components: partials,
    }).Compiler

    const parentSectionName = capitalizeFirstLetter(
      `${frontmatter.path.split(/\//g)[1].replace(/-/g, " ")}`,
    )
    const parentSectionPath = `/${frontmatter.path.split(/\//g)[1]}`

    const chooseChapterHeader = {
      1: [
        "What is AI ethics?",
        "What does AI ethics mean and what role do values and norms play? We’ll also look at the principles of AI ethics that we will follow in this course. ",
      ],
      2: [
        "What should we do?",
        "What do the principles of beneficence (do good) and non-maleficence (do no harm) mean for AI, and how do they relate to the concept of the “common good?",
      ],
      3: [
        "Who should be blamed?",
        "What does accountability actually mean, and how does it apply to AI ethics? We’ll also discuss what moral agency and responsibility mean and the difficulty of assigning blame.",
      ],
      4: [
        "Should we know how AI works",
        "Why is transparency in AI important and what major issues are affected by transparency –  and what are some of the risks associated with transparency in AI systems?",
      ],
      5: [
        "Should AI respect and promote rights?",
        "What are human rights, and how do they tie into the current ethical guidelines and principles of AI? We’ll also look more closely at three rights of particular importance to AI: the right to privacy, security, and inclusion.",
      ],
      6: [
        "Should AI be fair and non-discriminative",
        "What does fairness mean in relation to AI, how does discrimination manifest through AI – and what can we do to make these systems less biased?",
      ],
      7: [
        "AI ethics in practice",
        "What are some of the current challenges for AI ethics, what role do AI guidelines play in shaping the discussion, and how might things develop in the future?",
      ],
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
          }}
        >
          <LoginStateContextProvider>
            <Layout>
              <HeroSection
                title={parentSectionName}
                subtitle={chooseChapterHeader[frontmatter.path.substr(9, 1)][0]}
                intro={chooseChapterHeader[frontmatter.path.substr(9, 1)][1]}
                heroIcon={heroIcon}
              ></HeroSection>
              <Container>
                <ContentWrapper>
                  <ChapterBox />
                  <H2>
                    {" "}
                    {chooseChapterValue[frontmatter.path.substr(11, 1)]}.{" "}
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
}

export const pageQuery = graphql`
  query($path: String!) {
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
  }
`
