import React, { Fragment, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { Helmet } from "react-helmet"
import { animated, useSpring, config } from "react-spring"

import getNamedPartials from "../partials"

import "./remark.css"
import { LoginStateContextProvider } from "../contexes/LoginStateContext"
import Button from "../components/Button"
import { respond } from "../_respond"
import PagesContext from "../contexes/PagesContext"
import H2 from "../partials/Headers/H2"

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`

const ContentWrapper = styled.article`
  text-align: center;
  background: #fff;
  padding: 2rem 4rem;

  ${respond.xs`
  padding: 0;
`}

  ${respond.sm`
  padding: 0;
`}
`
const Heading = styled.div`
  padding-top: 2rem;
  margin: 0 auto;
`

const StyleLink = styled.div`
  margin-top: 2rem;
  display: grid;
  justify-content: center;

  & ul {
    list-style: none;
    margin: 0 auto;
    padding: 0 !important;
    width: 400px;
  }

  & li {
    display: inline-block;
  }

  & li:not(:last-child)::after {
    content: " || ";
  }

  & a {
    padding: 0.75rem;
    color: #333;
  }
`

export default function GridNavigationTemplate(props) {
  /*   const [showModal, setShowModal] = useState(true) */

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

  /*   const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0)` : `translateY(-200%)`,
    config: { duration: 250 },
    // duration is in milliseconds
  })

  const handleClick = (e) => {
    e.preventDefault()
    setShowModal(!showModal)
  } */
  return (
    <>
      {/*       <ButtonWrapper>
        <Button onClick={handleClick}> Course Overview </Button>
      </ButtonWrapper> */}
      {/*       <animated.div style={animation}> */}
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
          {/* <LoginStateContextProviderider> */}
          <Fragment>
            <ContentWrapper>
              <Heading>
                <H2> {frontmatter.title} </H2>
              </Heading>
              <StyleLink>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      Judging & tests
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      FAQ
                    </a>
                  </li>
                </ul>
              </StyleLink>
              {renderAst(htmlAst)}
            </ContentWrapper>
          </Fragment>
          {/* </LoginStateContextProviderider>{" "} */}
        </PagesContext.Provider>
      </Fragment>
      {/*       </animated.div> */}
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
