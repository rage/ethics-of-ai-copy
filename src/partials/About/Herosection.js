import React from "react"
import styled from "styled-components"

import heroSvg from "../../images/hero-svg.svg"
import ImageImporter from "../Contentpage/ImageImporter"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"

const HeroSection = styled.div`
  background-image: url(${heroSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: black;
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
  margin: 0;
  padding: 0;
`}

  ${respond.lg`
  width: 100%;
  padding: 4rem 2rem 4rem 10rem;
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

  ${respond.mobile`
  padding: 1rem;
  `}

  ${respond.sm`
  width: 100%;
  padding: 0 1rem;
`}
`

const HeroText = styled.div`
  color: #f1f1f1;
  font-size: 1.2rem;
  font-weight: 400;
  width: 90%;
  display: grid;

  ${respond.mobile`
  font-size: 1rem;
  width: 100%;
`}

  ${respond.xs`
  font-size: 1rem;
  font-weight: 400;
  width: 90%;
  `}

  ${respond.lg`
  width: 90%;
  font-size: 1.2rem;
`}
`

export default (props) => {
  console.log(props)
  return (
    <div>
      <HeroSection>
        <TextWrapper>
          <H2>
            <a style={{ color: "white", fontFamily: "Work Sans" }}>
              About the Contributors
            </a>
          </H2>
          <HeroText>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </HeroText>
        </TextWrapper>
      </HeroSection>
    </div>
  )
}
