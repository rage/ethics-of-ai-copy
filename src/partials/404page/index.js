import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import Reading from "../../assets/ReadingDoodle.svg"
import H1 from "../Headers/H1"

const HeroSection = styled.div`
  padding: 4rem 8rem 4rem 8rem;
  width: 100%;
  height: 90vh;
  background: /* #f9f9f9 */ #fff;
  display: grid;
  align-content: center;
  grid-template-columns: 1fr auto;
  h2 {
    text-align: left !important; /* TO-DO: Find a work arround this */
    margin-bottom: 1rem;
  }
`

const HeroText = styled.div`
  color: #6f7678;
  font-size: 16px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-self: center;
  text-align: left;
  width: 100%;
  padding: 6rem 4rem 6rem 7rem;

  span {
    font-family: Montserrat;
    font-size: 1.2rem;
    line-height: 1.8rem;
    padding: 0.5rem 0;
    margin-bottom: 2rem;
  }

  ${respond.xs`
  width: 100%;;
`}

  ${respond.lg`
  width: 100%;
`}
`

const Button = styled.button`
  display: inline-block;
  width: auto;
  border-radius: 4px;
  padding: 20px 24px;
  color: #fff;
  border: none;
  text-transform: none;
  outline: 0;
  background: #202020;
  font-size: 18px;
  font-weight: 500;
  backface-visibility: hidden;
  letter-spacing: normal;
  margin-top:
  transform: translate3d(0, 0, 0);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  :hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: 0 6px 7px 0 rgba(0, 0, 0, 0.15), 0 0 5px 0 rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: #fff;
  }
`

const StyledSVG = styled(Reading)`
  width: 50rem;
  height: 40rem;
  padding: 2rem;
`

export default (props) => {
  return (
    <>
      <HeroSection>
        <HeroText>
          <H1> {props.title} </H1> <span> {props.subtitle} </span>
          <div>
            <Button as="a" href="/homepage">
              Take me Home{" "}
            </Button>{" "}
          </div>{" "}
        </HeroText>{" "}
        <StyledSVG />{" "}
      </HeroSection>{" "}
    </>
  )
}
