import React from "react"
import styled, { css } from "styled-components"
import H4 from "../Headers/H3"
import PaddingMedium from "../../util/helper"

const sm = "780px"
const md = "1100px"

const Container = styled.div`
  background: #f1f1f1;
  padding-top: 1rem;
  padding-bottom: 1rem;
  width: 100%;
`
const ContentWrapper = styled.div`
  padding-left: 2rem;
  padding-right: 2rem;
  margin: 5rem auto;
  max-width: 780px;
  text-align: left;
`

const Text = styled.div`
  font-size: 1rem;
  text-align: left;
  font-size: 1.125rem;
  line-height: 1.89;
`

export default (props) => {
  return (
    <>
      <Container>
        <ContentWrapper>
          <H4> {props.title} </H4> <Text> {props.children} </Text>{" "}
        </ContentWrapper>{" "}
      </Container>{" "}
    </>
  )
}
