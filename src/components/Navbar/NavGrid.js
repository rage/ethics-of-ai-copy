import React, { Fragment, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import rehypeReact from "rehype-react"
import { Helmet } from "react-helmet"
import { animated, useSpring, config } from "react-spring"
import GridNavigation from "../../partials/Grid/index"

import Button from "../Button"
import { respond } from "../../_respond"
import H3 from "../../partials/Headers/H3"
import { withTranslation } from "react-i18next"

const ButtonWrapper = styled.div`
  display: flex;
  max-width: 10px;
  justify-content: center;
  align-items: center;
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

export default withTranslation("navbar")(function GridNavigationTemplate(props) {
  const [showModal, setShowModal] = useState(false)

  const animation = useSpring({
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(-4%)` : `translateY(-200%)`,
    config: { duration: 250 },
    // duration is in milliseconds
  })

  const handleClick = (e) => {
    e.preventDefault()
    setShowModal(!showModal)
  }
  return (
    <>
      <ButtonWrapper>
        <Button onClick={handleClick}> {props.t("gridButton")} </Button>
      </ButtonWrapper>
      <animated.div style={animation}>
        <Fragment>
          <Helmet title={props.t("gridTitle")} />{" "}
          {/* <LoginStateContextProviderider> */}
          <Fragment>
            <ContentWrapper>
              <Heading>
                <H3> {props.t("gridHeader")}</H3>
              </Heading>
              <StyleLink>
                <ul>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {props.t("gridItem1")}
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      {props.t("gridItem2")}
                    </a>
                  </li>
                </ul>
              </StyleLink>
              <GridNavigation />
            </ContentWrapper>
          </Fragment>
          {/* </LoginStateContextProviderider>{" "} */}
        </Fragment>
      </animated.div>
    </>
  )
})
