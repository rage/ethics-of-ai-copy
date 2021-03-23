import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"

const TeaserWrapper = styled.div`
  margin-top: 5rem;

/*   ${respond.mobile`
  margin-top: 10rem;
  `} */
`

const TeaserCardContainer = styled.div`
  padding: 2rem 0.5rem;
  margin-top: 2rem;
  margin-bottom: 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  justify-content: center;

  ${respond.mobile`
  margin-top: 1.2rem;
  padding: 0 0.5rem;
    grid-template-columns: minmax(20rem,100%);
  `}

  ${respond.xs`
  grid-gap: 2rem;
  padding: 0 0.5rem;
    grid-template-columns: minmax(20rem,100%);
  `}

  ${respond.sm`

    width: 100%;
    padding: 0;
     grid-template-columns: repeat(3, minmax(15rem, 20rem));
  `}

  ${respond.md`

  padding: 2rem 2rem;
  grid-template-columns: repeat(3, 20rem);
  `}

  ${respond.lg`
  padding: 2rem 0;
  grid-template-columns: repeat(3, 26rem);
  grid-gap: 6rem;
  `}
`

const TeaserQuestion = (props) => {
  return (
    <TeaserWrapper>
      <H2> {props.title} </H2>
      <TeaserCardContainer> {props.children} </TeaserCardContainer>{" "}
    </TeaserWrapper>
  )
}

export default TeaserQuestion
