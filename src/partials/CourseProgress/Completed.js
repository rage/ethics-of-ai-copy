import { Button } from "@material-ui/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import React from "react"
import styled from "styled-components"
import { Primary } from "../../components/Buttons"

const Title = styled.h2`
  margin-bottom: 1.5rem;
`

const CompletionContainer = styled.div`
  margin-bottom: 4rem;
`

const Subtitle = styled.p`
  margin: 0 auto;
  margin-bottom: 2rem;
  max-width: 700px;
`

const Completed = () => {
  return (
    <CompletionContainer>
      <Title>Congratulations for passing the course!</Title>
      <Subtitle>
        If you have a a Finnish social security number, we recommend you to get
        free ECTS credits from Open University of University of Helsinki:
      </Subtitle>
      <OutboundLink href="https://www.mooc.fi/en/profile/completions">
        <Primary>Register completion</Primary>
      </OutboundLink>
    </CompletionContainer>
  )
}

export default Completed
