import React from "react"
import styled from "styled-components"

import { respond } from "../../_respond"
import HeroIllustration from "../../assets/hero-svg.svg"
import chapIcon from "../../images/chap-1-bigmap.svg"
import heroSvg from "../../images/hero-svg.svg"

const HeroSection = styled.div`
  padding: 4rem 2rem 0rem 10rem;
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-text: left;
  z-index: 99;
  @media (max-width: 1000px) {
    padding: 4rem 2rem 0rem 3rem;
  }
`
const Background = styled.div`
  background-image: url(${heroSvg});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  z-index: -1;
`
const TextWrapper = styled.div`
  padding: 15rem 0rem 4rem 0rem;
  flex-direction: column;
  justify-content: center;
  align-text: center;
  flex: 1;
  @media (max-width: 1000px) {
    width: 90%;
    padding-top: 8rem;
  }
`

const ImageWrapper = styled.img`
  z-index: 200;
  width: 20em;
  height: auto;
  padding-bottom: 7rem;
  padding-right: 6rem;
  flex: 0.5;
  @media (min-width: 1px) {
    padding-right: 0rem;
  }
  @media (min-width: 1000px) {
    padding-right: 3rem;
  }
  @media (min-width: 1500px) {
    padding-right: 20rem;
  }
  @media (min-width: 1700px) {
    padding-right: 20rem;
  }
`

const H1 = styled.h1``

const HeroText = styled.div`
  color: rgba(28, 59, 64, 1);
  font-size: 22px;
  font-weight: 450;
  width: 60%;
  display: grid;
`

const StyledSVG = styled(HeroIllustration)`
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  position: absolute;
`

export default (props) => {
  // <StyledSVG />
  return (
    <div>
      <Background />
      <HeroSection style={{}}>
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
    </div>
  )
}
