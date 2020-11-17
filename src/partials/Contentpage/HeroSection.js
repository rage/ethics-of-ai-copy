import React from "react"
import styled from "styled-components"

import heroSvg from "../../images/hero-svg.svg"
import ImageImporter from "./ImageImporter"
import {respond} from "../../_respond"
import H2 from "../Headers/H2"

/* ${respond.xs`

padding: 2rem 4rem;
grid-template-columns: minmax(20rem,100%);
`} ${respond.sm`

width: 100%;
padding: 0;
 grid-template-columns: repeat(2, minmax(15rem, 20rem));
`} ${respond.md`

padding: 2rem 2rem;
grid-template-columns: repeat(2, 20rem);
`} ${respond.lg`

grid-template-columns: repeat(3, 23rem);
`}; */

const HeroSection = styled.div`
background-image: url(${heroSvg});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
height: 60vh;
  padding: 4rem 2rem 0rem 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-text: left;
  z-index: 99;
  @media (max-width: 1000px) {
    padding: 4rem 2rem 2rem 3rem;
  }
  margin-bottom: 4rem;
`
/* const Background = styled.div`
  background-color: green;
  background-image: url(${heroSvg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.3;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
` */
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

const Border = styled.div`
  border-bottom: 2px solid rgba(112, 112, 112, 1);
  margin-bottom: 4em;
  margin-left: 2em;
  width: 95%;
`

/* const H1 = styled.h1`` */

export default (props) => {
  return (
    <div>
 {/*      <Background /> */}
      <HeroSection>
        <TextWrapper>
          <H2>
            <a style={{ color: "rgba(28, 59, 64)", fontFamily: "Work Sans"}}>{props.title}: </a>
            <a style={{ color: "rgba(28, 59, 64)", fontFamily: "Work Sans"}}>{props.subtitle}</a>
          </H2>
          <HeroText>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </HeroText>
        </TextWrapper>
        <ImageImporter icon={props.heroIcon} />
      </HeroSection>
    </div>
  )
}
