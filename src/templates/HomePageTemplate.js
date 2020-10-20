import React, { Fragment } from "react"
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

const ContentWrapper = styled.article`
  text-align: center;
  background: white;
  padding: 2rem 4rem;
  margin: 0;
  font-family: "Montserrat", sans-serif;

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

export default function GridNavigationTemplate(props) {
  const { data } = props
  const { frontmatter, htmlAst } = data.page
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
            <ContentWrapper> {renderAst(htmlAst)} </ContentWrapper>{" "}
          </Fragment>{" "}
        </PagesContext.Provider>{" "}
      </Fragment>{" "}
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
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
  }
`
