import React from "react"
import styled from "styled-components"
import scrollTo from "gatsby-plugin-smoothscroll"

import { respond } from "../../_respond"
import { PrimaryButton, SecondaryButton } from "../../components/Buttons"
import Box from "../../assets/SprintingDoodle.svg"
import H1 from "../Headers/H1"

const HeroSection = styled.div`
  padding: 4rem 8rem;
  width: 100%;
  background: #f9f9f9;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(2, 1fr);
  h2 {
    text-align: left !important; /* TO-DO: Find a work arround this */
    margin-bottom: 2rem;
  }
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: left;
  width: 100%;
  padding: 6rem 4rem 6rem 7rem;

  p {
    font-family: Merriweather;
    font-size: 22px;
    line-height: 1.6;
    opacity: 0.8;
    color: #202020;
    padding: 0.5rem 0;
  }

  ${respond.xs`
  width: 100%;;
`}

  ${respond.lg`
  width: 100%;
`}
`

const StyledSVG = styled(Box)`
  width: 40rem;
  height: 35rem;
  padding: 2rem;
`

export default (props) => {
  return (
    <>
      <HeroSection>
        <HeroText>
          <div>
            <H1> {props.title} </H1> <p> {props.subtitle} </p>{" "}
            <div>
              <PrimaryButton>Start </PrimaryButton>{" "}
              <SecondaryButton onClick={() => scrollTo("#grid")}>
                Table of Content{" "}
              </SecondaryButton>{" "}
            </div>{" "}
          </div>{" "}
        </HeroText>{" "}
        <div>
          <StyledSVG />
        </div>{" "}
      </HeroSection>{" "}
      <div id="grid"> {props.children} </div>{" "}
    </>
  )
}
