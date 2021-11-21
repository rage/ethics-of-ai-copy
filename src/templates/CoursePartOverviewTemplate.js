import React, { Fragment, useContext, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { Helmet } from "react-helmet"

import Layout from "./Layout"

import getNamedPartials from "../partials"
import { getCachedUserDetails } from "../services/moocfi"
import "./remark.css"
import PagesContext from "../contexes/PagesContext"
import LoginStateContext, {
  LoginStateContextProvider,
  withLoginStateContext,
} from "../contexes/LoginStateContext"
import Container from "../components/Container"

import { useI18next } from "gatsby-plugin-react-i18next"

const ContentWrapper = styled.div`
  margin-top: 1rem;
  padding-bottom: 2rem;

  p {
    margin-bottom: 2rem;
  }
`

const Title = styled.h1``

const CoursePartOverviewTemplate = ({ data }) => {
  const loginStateContext = useContext(LoginStateContext)
  const { navigate } = useI18next()

  const missingInfo = async () => {
    let userInfo = await getCachedUserDetails()
    const research = userInfo?.extra_fields?.research
    if (research === undefined) {
      navigate("/missing-info")
    }
  }

  useEffect(() => {
    if (loginStateContext.loggedIn) {
      missingInfo()
    }
  }, [])

  const { frontmatter, htmlAst } = data.page
  const allPages = data.allPages.edges.map((o) => {
    const res = o.node?.frontmatter
    res.exercises = o.node?.moocfiExercises
    return res
  })
  const partials = getNamedPartials()
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: partials,
  }).Compiler

  const filePath = data.page.fileAbsolutePath.substring(
    data.page.fileAbsolutePath.lastIndexOf("/data/"),
    data.page.fileAbsolutePath.length,
  )
  return (
    <PagesContext.Provider
      value={{
        all: allPages,
        current: { frontmatter: frontmatter, filePath: filePath },
      }}
    >
      <Helmet title={frontmatter.title} />
      <LoginStateContextProvider>
        <Layout>
          <Fragment>
            <Container>
              <ContentWrapper>
                <Title>{frontmatter.title}</Title>
                {renderAst(htmlAst)}
              </ContentWrapper>
            </Container>
          </Fragment>
        </Layout>
      </LoginStateContextProvider>
    </PagesContext.Provider>
  )
}

export default withLoginStateContext(CoursePartOverviewTemplate)

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
          moocfiExercises {
            id
            type
            parentPagePath
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
