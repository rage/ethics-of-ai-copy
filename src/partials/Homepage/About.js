import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"

const Container = styled.div`
  margin: 6rem 0;
  padding: 2rem 6rem;
  height: 70vh;
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 1fr 0.5fr;
`
const AboutTextBox = styled.div`
  text-align: left;
  padding: 2rem;
  margin-right: 4rem;

  H2 {
    text-align: left !important;
  }

  span {
    font-size: 20px;
    font-weight: 500;
  }
  p {
    padding: 1rem 0;
    font-size: 22px;
    opacity: 0.8;
  }
`

const ImageWrapper = styled.div`
  height: 500px;
  width: auto;
  display: flex;
  div {
    background: #333;
    width: 360px;
    height: 340px;
    border-radius: 4px;
  }
`

export default (props) => {
  return (
    <Container>
      <AboutTextBox>
        <H2> About... </H2>
        <span> Brief Descrription of the Authors. </span>{" "}
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero. tempor invidunt ut labore et dolore magna
          aliquyam erat, sed diam voluptua. At vero.
        </p>{" "}
      </AboutTextBox>{" "}
      <ImageWrapper>
        <div></div>
      </ImageWrapper>{" "}
    </Container>
  )
}
