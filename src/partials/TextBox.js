import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import techIcon from "../images/tech-icon.svg"
import philIcon from "../images/phil-icon.svg"
import bgIcon from "../images/bg-icon.svg"
import ethicsIcon from "../images/ethics-icon.svg"
import chap1 from "../images/chap-1.svg"
import chap2 from "../images/chap-2.svg"
import chap3 from "../images/chap-3.svg"
import chap4 from "../images/chap-4.svg"
import chap5 from "../images/chap-5.svg"
import chap6 from "../images/chap-6.svg"
import exerIcon from "../images/exer-icon.svg"

const Wrapper = styled.aside`
  @media (min-width: 711px) {
    width: 100vw;
    padding-right: 23rem !important;
  }
  @media (min-width: 425px) {
    width: 100vw;
  }
  @media (min-width: 1px) {
    width: 100vw;
    position:relative;
    left: calc(-50vw + 50%);
    padding: 1rem;
    margin-bottom: 5rem;
    margin-top: 4rem;
    background: ${(props) => props.color || "rgba(246, 235, 232, 0.5)"};
    padding-left: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    min-height: 17em;
    position: relative;
    ul {
      padding-inline-start: 40px;
    }
`
const Body = styled.div`
  @media (min-width: 1px) {
    padding-bottom: 0.5rem;
    width: 70%;
    margin-left: 2em;
  }
  @media (min-width: 425px) {
    padding-bottom: 0.5rem;
    width: 70%;
    margin-left: 8em;
  }
  @media (min-width: 900px) {
    padding-bottom: 0.5rem;
    width: 70%;
    margin-left: 20em;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.89;
  }
`

const ImageBox = styled.img`
  @media (min-width: 1px) {
    top: 6em;
    left: 0em;
    width: 60px;
    heigth: auto;
    position: absolute;
    -webkit-transform: translate(18%, 0);
  }
  @media (min-width: 425px) {
    top: 4.2em;
    left: 1em;
    width: 110px;
    heigth: auto;
    position: absolute;
    -webkit-transform: translate(18%, 0);
  }
  @media (min-width: 900px) {
    top: 4em;
    left: 6em;
    width: 180px;
    heigth: auto;
    position: absolute;
    -webkit-transform: translate(18%, 0);
  }
`

const chooseIcon = {
  techIcon: techIcon,
  philIcon: philIcon,
  bgIcon: bgIcon,
  chap1: chap1,
  chap2: chap2,
  chap3: chap3,
  chap4: chap4,
  chap5: chap5,
  chap6: chap6,
  exerIcon: exerIcon,
  undefined: ethicsIcon,
}

const TextBox = (props) => {
  return (
    <Wrapper color={props.background}>
      <Body>
        <h3> {props.name}</h3>
        {props.children}
      </Body>
      <ImageBox src={chooseIcon[props.icon]} alt="icon"></ImageBox>
    </Wrapper>
  )
}

export default withSimpleErrorBoundary(TextBox)
