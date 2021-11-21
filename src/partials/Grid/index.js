import React, { Fragment } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { Helmet } from "react-helmet"

import { I18nextContext } from "gatsby-plugin-react-i18next"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"

import getNamedPartials from "../../partials"

import { LoginStateContextProvider } from "../../contexes/LoginStateContext"

import { respond } from "../../_respond"
import H3 from "../Headers/H3"

const ContentWrapper = styled.article`
  text-align: center;
  padding: 4rem 4rem;
  margin: 6rem 0;

  ${respond.xs`
  padding: 0;
`}

  ${respond.sm`
  padding: 0;
`}
`

const GridNavigation = ({ data }) => {
  const context = React.useContext(I18nextContext)
  let filteredData
  if (context.language === "en") {
    filteredData = data.allMarkdownRemark.edges.filter((e) => (
      e.node.frontmatter.path === "/grid"
    ))
  } else {
    filteredData = data.allMarkdownRemark.edges.filter((e) => (
      e.node.frontmatter.path.includes(`/${context.language}/`)
    ))
  }
  if (filteredData.length > 1) {
    console.log("something went wrong with filtering in src/partials/Grid.js")
  }
  filteredData = filteredData[0].node
  const { frontmatter, htmlAst } = filteredData
  const partials = getNamedPartials()
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: partials,
  }).Compiler
  return (
    <Fragment>
      <Helmet title={frontmatter.title} />{" "}
      <ContentWrapper>
        <H3> {frontmatter.title} </H3> {renderAst(htmlAst)}{" "}
      </ContentWrapper>{" "}
    </Fragment>
  )
}

export default function GridQuery(props) {
  return (
    <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark(filter: { frontmatter: { path: { regex: "/^(/[a-z][a-z])?/grid$/" } } }) {
          edges {
            node {
              htmlAst
              frontmatter {
                path
                title
              }
            }
          }
        }
      }
      `}
      render={(data) => <GridNavigation data={data} {...props} />}
    />
  )
}

/* export default withTranslation("common")(
    withSimpleErrorBoundary(GridNavigation),
  ) */
