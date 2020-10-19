import React from "react"
import styled from "styled-components"
import {
  respond
} from "../../_respond"
import H3 from "../Headers/H3"

const Container = styled.div `
  margin: 6rem 0;
  padding: 2rem 6rem;
  height: 40vh;
  background: blue;
`
const SponsorBox = styled.div `
  background: white;
  padding: 2rem;
  width: 50%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 1rem auto;

  span {
    height: 120px;
    width: 100%;
    background: black;
  }
`

export default (props) => {
  return ( <
    Container >
    <
    H3 > Sponsor... < /H3> <span> Something, something something</span > {
      " "
    } <
    SponsorBox >
    <
    span > < /span> <
    span > < /span> <
    span > < /span> <
    span > < /span> <
    /SponsorBox> <
    /Container>
  )
}
