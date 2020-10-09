import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H1 from "../Headers/H1"

const HeaderWrapper = styled.div`
  padding: 8rem;
  width: 100%;
  display: grid;
  justify-content: center;
  align-text: center;
  background: #f1f1f1;
`

const Subtitle = styled.div`
  color: #3b4754;
  font-size: 1.2rem;
  font-weight: 400;
  width: 60%;
  display: grid;
  margin: 0.6rem auto;

  ${respond.xs`
  width: 100%;;
`}

  ${respond.lg`
  width: 60%;
`}
`

export default (props) => {
  return (
    <>
      <HeaderWrapper>
        <H1> {props.title} </H1>
        <Subtitle> {props.subtitle} </Subtitle>
      </HeaderWrapper>
    </>
  )
}
