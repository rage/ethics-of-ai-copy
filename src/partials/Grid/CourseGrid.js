import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"

//TO-DO: Make Grid responsive without Media queries
//TO-DO: + More Breakpoints

const GridContainer = styled.div`
  padding: 2rem 0.5rem;
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  justify-content: center;
  ${respond.xs`

    padding: 2rem 4rem;
    grid-template-columns: minmax(20rem,100%);
  `} ${respond.sm`

    width: 100%;
    padding: 0;
     grid-template-columns: repeat(2, minmax(15rem, 20rem));
  `} ${respond.md`

  padding: 2rem 2rem;
  grid-template-columns: repeat(2, 20rem);
  `} ${respond.lg`

  grid-template-columns: repeat(3, 23rem);
  `};
`

export default ({ children }) => {
  return (
    <>
      <GridContainer> {children} </GridContainer>{" "}
    </>
  )
}
