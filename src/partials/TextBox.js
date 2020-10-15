import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import techIcon from "../images/tech-icon.svg"
import philIcon from "../images/phil-icon.svg"
import bgIcon from "../images/bg-icon.svg"
import ethicsIcon from "../images/ethics-icon.svg"

const Wrapper = styled.aside`
  @media (min-width: 711px) {
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 30px;
    background: #e0dedc;
    padding-left: 4rem;
    padding-top: 2rem;
    position: relative;
    ul {
      padding-inline-start: 40px;
    }
  }
  @media (max-width: 710px) {
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 30px;
    background: #e0dedc;
    padding-left: 4rem;
    padding-top: 2rem;
    position: relative;
    ul {
      padding-inline-start: 40px;
    }
  }
  @media (max-width: 425px) {
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 30px;
    background: #e0dedc;
    padding-left: 4rem;
    padding-top: 2rem;
    position: relative;
    ul {
      padding-inline-start: 40px;
    }
  }
`
const Body = styled.div`
  padding-bottom: 0.5rem;
`
const ImageBox = styled.img`
  @media (min-width: 1px) {
    top: 3.3em;
    left: -1em;
    width: 60px;
    heigth: auto;
    position: absolute;
    -webkit-transform: translate(10%, 0);
  }
  @media (min-width: 425px) {
    top: 3.3em;
    left: -2.5em;
    width: 70px;
    heigth: auto;
    position: absolute;
    -webkit-transform: translate(15%, 0);
  }
  @media (min-width: 900px) {
    top: 3.3em;
    left: -4em;
    width: 90px;
    heigth: auto;
    position: absolute;
    -webkit-transform: translate(18%, 0);
  }
`
const chooseIcon = {
  techIcon: techIcon,
  philIcon: philIcon,
  bgIcon: bgIcon,
  undefined: ethicsIcon,
}

const TextBox = (props) => {
  console.log(props)
  console.log(props.icon)
  console.log(chooseIcon[props.icon])

  return (
    <Wrapper>
      <h3> {props.name}</h3>
      <Body>{props.children}</Body>
      <ImageBox src={chooseIcon[props.icon]} alt="icon"></ImageBox>
    </Wrapper>
  )
}

export default withSimpleErrorBoundary(TextBox)
