import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"

//TO-DO: Make Grid responsive without Media queries
//TO-DO: + More Breakpoints

const PlaceHolderContainer = styled.div`
  margin: 10em 0;
  padding: 2rem 6rem;
  height: 70vh;
  align-item: center;
  display: grid;
  align-content: center;

  ${respond.mobile`
  padding: 0;
`}
`
const PlaceHolderText = styled.div`
  font-size: 1rem;
  line-height: 1.7;
  width: 50%;
  margin: 0 auto;
  color: #202020;
  opacity: 0.9;
  font-weight: 400;

  ${respond.mobile`
    width: 100%;
    padding: 0 30px;
    font-size: 1rem;
  `}

  ${respond.xs`
    font-size: 1.4rem;
    width: 100%;
  `}

  ${respond.lg`
    width: 50%;
  `}
`

export default (props) => {
  return (
    <PlaceHolderContainer>
      <H2> {props.title} </H2>{" "}
      <PlaceHolderText> {props.bodycopy} </PlaceHolderText>{" "}
    </PlaceHolderContainer>
  )
}
