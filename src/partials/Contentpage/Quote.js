import React from "react"
import styled from "styled-components"

const Justify = styled.div`
  display: grid;
  justify-content: center;
`

const ContentWrapper = styled.div`
  padding: 0.5rem 2rem;
  margin: 4rem 0;
  max-width: 650px;
  border-left: 7px solid #bfbfbf;
`

const Text = styled.div`
  font-size: 1rem;
  font-weight: 500;
  text-align: left;
  font-size: 1.225rem;
  line-height: 1.89;
  font-style: italic;
`

export default (props) => {
  return (
    <Justify>
      <ContentWrapper>
        <Text> {props.children} </Text>
      </ContentWrapper>{" "}
    </Justify>
  )
}
