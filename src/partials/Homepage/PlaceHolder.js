import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H3 from "../Headers/H3"

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
  color: #6f7678;
  font-weight: 400;

  ${respond.xs`
    font-size: 1.4rem;
    width: 100%;
  `}

  ${respond.lg`
    width: 60%;
  `}
`

export default (props) => {
  return (
    <PlaceHolderContainer>
      <H3> {props.title} </H3>{" "}
      <PlaceHolderText> {props.children} </PlaceHolderText>{" "}
    </PlaceHolderContainer>
  )
}
