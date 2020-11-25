import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"

//TO-DO: Make Grid responsive without Media queries
//TO-DO: + More Breakpoints

const PlaceHolderContainer = styled.div`
  margin: 6rem 0;
  padding: 2rem 6rem;
  height: 70vh;
  align-item: center;
  display: grid;
  align-content: center;
`
const PlaceHolderText = styled.div`
  font-size: 1rem;
  line-height: 2.8rem;
  width: 60%;
  margin: 0 auto;
  color: #333;
  font-weight: 400;
  opacity: 0.9;

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
      <PlaceHolderText> {props.children} </PlaceHolderText>{" "}
    </PlaceHolderContainer>
  )
}
