import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"

const Container = styled.div`
  margin: 6rem 0;
  padding: 2rem 6rem;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
const AboutTextBox = styled.div`
  text-align: left;
`

const ImageWrapper = styled.div`
height: 500px
width: 500px;
background: pink;
`

export default (props) => {
  return (
    <Container>
      <AboutTextBox>
        <h1> About... </h1> <span> Something, something </span>{" "}
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.At vero.{" "}
        </p>{" "}
      </AboutTextBox>{" "}
      <ImageWrapper> </ImageWrapper>{" "}
    </Container>
  )
}
