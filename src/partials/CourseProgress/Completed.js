import { Button } from "@material-ui/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import React from "react"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation("common")

  return (
    <CompletionContainer>
      <Title>{t("completedTitle")}</Title>
      <Subtitle>{t("completedSubtitle")}</Subtitle>
      <OutboundLink href="https://www.mooc.fi/en/profile/completions">
        <Primary>{t("completedRegister")}</Primary>
      </OutboundLink>
    </CompletionContainer>
  )
}

export default Completed
