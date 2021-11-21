import React, { Fragment, useContext, useEffect, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { Helmet } from "react-helmet"

import getNamedPartials from "../partials"

import "./remark.css"
import { respond } from "../_respond"
import PagesContext from "../contexes/PagesContext"
import Navbar from "../components/Navbar/Navbar"
import ScrollIndicator from "../components/ScrollIndicator"
import Notice from "../partials/Notice"
import { useI18next } from "gatsby-plugin-react-i18next"
import { getCachedUserDetails } from "../services/moocfi"
import LoginStateContext, {
  withLoginStateContext,
} from "../contexes/LoginStateContext"

const ContentWrapper = styled.article`
  text-align: center;
  background: white;
  padding: 2rem 4rem;
  margin: 0;
  font-family: "Montserrat", sans-serif;

  ${respond.mobile`
  margin: 0;
  padding: 0;
`}

  ${respond.xs`

    margin: 0
  `}

  ${respond.sm`

    margin: 0
  `}

  ${respond.md`

  margin: 0
  `}

  ${respond.lg`

  margin: 0;
  `}



  ${respond.xs`
  padding: 0;
`}

  ${respond.sm`
  padding: 0;
`}
`

const NoticeContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  margin: auto;
  background: #ffffff;

  a {
    color: #003d9a;
  }
`

const HomePageTemplate = (props) => {
  const { data } = props
  const { frontmatter, htmlAst } = data.page
  const { language } = useI18next()
  const [userLanguage, setUserLanguage] = useState(undefined)
  const loginStateContext = useContext(LoginStateContext)

  useEffect(() => {
    if (loginStateContext.loggedIn) {
      const fetchUserLanguage = async () => {
        let userDetails = await getCachedUserDetails()
        setUserLanguage(userDetails?.extra_fields?.language)
      }
      fetchUserLanguage()
    }
  }, [])

  const partials = getNamedPartials()
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: partials,
  }).Compiler

  const filePath = data.page.fileAbsolutePath.substring(
    data.page.fileAbsolutePath.lastIndexOf("/data/"),
    data.page.fileAbsolutePath.length,
  )

  const langPrefix = userLanguage === "en" ? "" : `/${userLanguage}`

  return (
    <>
      <Fragment>
        <Helmet title={frontmatter.title} />{" "}
        <PagesContext.Provider
          value={{
            current: {
              frontmatter: frontmatter,
              filePath: filePath,
            },
          }}
        >
          <Fragment>
            <Navbar> </Navbar> <ScrollIndicator />
            {loginStateContext.loggedIn &&
              language &&
              userLanguage &&
              language !== userLanguage && (
                <NoticeContainer>
                  <Notice>
                    You are viewing a different language version of the course
                    than what you selected in your profile settings. Assignment
                    answers are tied to the language version, so to continue
                    with the assignments switch back to the{" "}
                    {userLanguage === "en"
                      ? "English"
                      : userLanguage === "sv"
                      ? "Swedish"
                      : "Finnish"}{" "}
                    version of the course, or change the language in your{" "}
                    <a href={`${langPrefix}/profile`}>profile</a>.
                  </Notice>
                </NoticeContainer>
              )}
            <ContentWrapper> {renderAst(htmlAst)} </ContentWrapper>{" "}
          </Fragment>{" "}
        </PagesContext.Provider>{" "}
      </Fragment>{" "}
    </>
  )
}

export default withLoginStateContext(HomePageTemplate)

export const pageQuery = graphql`
  query($path: String!, $language: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      htmlAst
      html
      frontmatter {
        path
        title
        banner
      }
      fileAbsolutePath
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
