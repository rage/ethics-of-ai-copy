import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"

const Container = styled.div`
  margin: 6rem 0 0 0;
  padding: 2rem 6rem;
  height: 40vh;
  text-align: center;
`
const AboutTextBox = styled.div`
  text-align: center;
  padding: 2rem;
  margin-right: 4rem;


  span {
    font-size: 1rem;
    font-weight: 500;
    text-decoration: underline;
  }
  p {
    padding: 1rem 0;
    font-size: 22px;
    opacity: 0.8;
  }
`

export default (props) => {
  return (
    <a href="/about" style={{ textDecoration: "none" }}>
    <Container>
      <AboutTextBox>
        <H2> Contributors </H2>
        <span> Read about authors </span>
      </AboutTextBox>
    </Container>
    </a>
  )
}
