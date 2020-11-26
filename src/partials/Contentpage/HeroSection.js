import React from "react"
import styled from "styled-components"

import heroSvg from "../../images/hero-svg.svg"
import ImageImporter from "./ImageImporter"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"

const HeroSection = styled.div`
  background-image: url(${heroSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 50vh;
  padding: 4rem 2rem 4rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-text: left;
  z-index: 99;
  @media (max-width: 1000px) {
    padding: 4rem 2rem 4rem 3rem;
  }
  margin-bottom: 4rem;

  ${respond.mobile`
  width: 100%;
  padding: 0;
  margin: 0;
`}
`
const TextWrapper = styled.div`
  padding: 0rem 0rem 4rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  flex: 1;
  @media (max-width: 1000px) {
    width: 90%;
    padding-top: 5rem;
  }

  ${respond.sm`
  width: 100%;
  padding: 0;
`}
`

const HeroText = styled.div`
  color: rgba(28, 59, 64, 0.8);
  font-size: 1.4rem;
  font-weight: 450;
  width: 90%;
  display: grid;
`

export default (props) => {
  console.log(props)
  return (
    <div>
      <HeroSection>
        <TextWrapper>
          <H2>
            <a style={{ color: "rgba(28, 59, 64)", fontFamily: "Work Sans" }}>
              {props.title}:{" "}
            </a>
            <a style={{ color: "rgba(28, 59, 64)", fontFamily: "Work Sans" }}>
              {props.headerText}
            </a>
          </H2>
          <HeroText>{props.intro}</HeroText>
        </TextWrapper>
        <ImageImporter icon={props.heroIcon} />
      </HeroSection>
    </div>
  )
}
