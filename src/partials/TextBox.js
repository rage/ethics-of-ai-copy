import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import techIcon from "../images/tech-icon.svg"
import philIcon from "../images/phil-icon.svg"
import bgIcon from "../images/bg-icon.svg"
import ethicsIcon from "../images/ethics-icon.svg"

const Wrapper = styled.aside`
  @media (min-width: 711px) {
    width: 100vw;
  }
  @media (min-width: 425px) {
    width: 100vw;
  }
  @media (min-width: 1px) {
    width: 100vw;
    position:relative;
    left: calc(-50vw + 50%);
    padding: 1rem;
    margin-bottom: 2rem;
    background: ${(props) => props.color || "rgba(246, 235, 232, 0.5)"};
    padding-left: 4rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    position: relative;
    ul {
      padding-inline-start: 40px;
    }
`
const Body = styled.div`
  @media (min-width: 1px) {
    padding-bottom: 0.5rem;
    max-width: 80%;
    margin-left: 2em;
  }
  @media (min-width: 425px) {
    padding-bottom: 0.5rem;
    max-width: 80%;
    margin-left: 8em;
  }
  @media (min-width: 900px) {
    padding-bottom: 0.5rem;
    max-width: 50%;
    margin-left: 20em;
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
const TechIcon = (
  <img src={techIcon} alt="icon" style={{ width: "100%", height: "auto" }}>
    {" "}
  </img>
)
const PhilIcon = (
  <img src={philIcon} alt="icon" style={{ width: "80%", height: "auto" }}>
    {" "}
  </img>
)
const BgIcon = (
  <img src={bgIcon} alt="icon" style={{ width: "100%", height: "auto" }}>
    {" "}
  </img>
)
const EthicsIcon = (
  <img src={philIcon} alt="icon" style={{ width: "100%", height: "auto" }}>
    {" "}
  </img>
)

const chooseIcon = {
  techIcon: techIcon,
  philIcon: philIcon,
  bgIcon: bgIcon,
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
