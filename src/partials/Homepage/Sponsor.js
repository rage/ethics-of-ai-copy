import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H3 from "../Headers/H3"

const Container = styled.div`
  margin: 6rem 0;
  padding: 2rem 6rem;
  height: 60%;
  background: #f9f9f9;
`
const SponsorBox = styled.div`
  background: white;
  padding: 2rem;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin: 1rem auto;

  span {
    height: 130px;
    width: 100%;
    background: #333;
  }
`

export default (props) => {
  return (
    <Container>
      <H3> Sponsor... </H3> <span> Official sponsor of this course</span>{" "}
      <SponsorBox>
        <span> </span> <span> </span> <span> </span> <span> </span>{" "}
      </SponsorBox>{" "}
    </Container>
  )
}
