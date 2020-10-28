import React from "react"
import styled from "styled-components"

import chapIcon from "../../images/chap-1-bigmap.svg"
import heroSvg from "../../images/hero-svg.svg"
import techIcon from "../../images/tech-icon.svg"
import philIcon from "../../images/phil-icon.svg"
import bgIcon from "../../images/bg-icon.svg"
import ethicsIcon from "../../images/ethics-icon.svg"

const HeroSection = styled.div`
  padding: 4rem 2rem 0rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-text: left;
  z-index: 99;
  @media (max-width: 1000px) {
    padding: 4rem 2rem 2rem 3rem;
  }
`
const Background = styled.div`
  background-image: url(${heroSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  width: 100%;
  height: 90%;
  position: absolute;
  z-index: -1;
`
const TextWrapper = styled.div`
  padding: 10rem 0rem 4rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-text: center;
  flex: 1;
  @media (max-width: 1000px) {
    width: 90%;
    padding-top: 5rem;
  }
`

const ImageWrapper = styled.img`
  height: auto;
  padding-bottom: 7rem;
  padding-right: 6rem;
  flex: 0.4;
  @media (min-width: 1px) {
    padding-right: 0rem;
    max-width: 30px;
  }
  @media (min-width: 250px) {
    padding-right: 0rem;
    max-width: 100px;
  }
  @media (min-width: 530px) {
    padding-right: 0rem;
    max-width: 200px;
  }
  @media (min-width: 700px) {
    padding-right: 1rem;
    max-width: 350px;
  }
  @media (min-width: 1000px) {
    max-width: 500px;
    padding-right: 3rem;
  }
  @media (min-width: 1500px) {
    max-width: 800px;
    padding-right: 20rem;
  }
`

const HeroText = styled.div`
  color: rgba(28, 59, 64, 1);
  font-size: 22px;
  font-weight: 450;
  width: 60%;
  display: grid;
`

const Border = styled.div`
border-bottom: 2px solid grey;
margin-bottom: 4em;
margin-left: 2em;
width: 95%;
`

const H1 = styled.h1`
`

const chooseIcon = {
  techIcon: techIcon,
  philIcon: philIcon,
  bgIcon: bgIcon,
  undefined: ethicsIcon,
}

export default (props) => {
  // <StyledSVG />
  return (
    <div>
      <Background />
      <HeroSection>
        <TextWrapper>
          <H1>
            <a style={{ color: "rgba(28, 59, 64, 0.5)" }}>{props.title}: </a>
            <a style={{ color: "rgba(28, 59, 64, 1)" }}>{props.subtitle}</a>
          </H1>
          <HeroText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </HeroText>
        </TextWrapper>
        <ImageWrapper src={chapIcon} alt="icon" />
      </HeroSection>
      <Border/>
          </div>
  )
}
