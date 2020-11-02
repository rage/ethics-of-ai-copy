import React from "react"
import styled from "styled-components"

import heroSvg from "../../images/hero-svg.svg"
import ImageImporter from "./ImageImporter"

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
  opacity: 0.1;
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

const HeroText = styled.div`
  color: rgba(28, 59, 64, 1);
  font-size: 22px;
  font-weight: 450;
  width: 60%;
  display: grid;
`

const Border = styled.div`
  border-bottom: 2px solid rgba(112, 112, 112, 1);
  margin-bottom: 4em;
  margin-left: 2em;
  width: 95%;
`

const H1 = styled.h1``

export default (props) => {
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
        <ImageImporter icon={props.heroIcon} />
      </HeroSection>
      <Border />
    </div>
  )
}
