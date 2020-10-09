import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import { PrimaryButton } from "../../components/Buttons"
import H1 from "../Headers/H1"

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  padding-bottom: 1rem;
`

const HeroSection = styled.div`
  background-color: #08aeea;
  background-image: linear-gradient(311deg, #08aeea 0%, #2af598 100%);
  padding: 11rem 8rem 9rem 8rem;
  width: 100%;
  display: grid;
  justify-content: center;
  align-text: center;
`

const HeroText = styled.div`
  color: #333;
  font-size: 1.4rem;
  font-weight: 400;
  width: 60%;
  display: grid;
  margin: 0 auto;

  ${respond.xs`
  width: 100%;;
`}

  ${respond.lg`
  width: 60%;
`}
`
const MiniUnderline = styled.div`
  margin-top: 10px;
  margin-bottom: 25px;
  position: relative;
  height: 6px;
  overflow: hidden;
  width: 88%;

  ${respond.xs`
  width: 70%;;
`}

  ${respond.lg`
  width: 88%;
`}

  &::after {
    display: block;
    content: "";
    background-color: #c3c6c8;
    position: absolute;
    top: 0;
    left: 50%;
    width: 84px;
    height: 100%;
  }
`

export default (props) => {
  return (
    <HeroSection>
      <H1> {props.title} </H1> <MiniUnderline> </MiniUnderline>
      <HeroText> {props.subtitle} </HeroText>
      <ButtonWrapper>
        <PrimaryButton to="/start">Start </PrimaryButton>
      </ButtonWrapper>
    </HeroSection>
  )
}
