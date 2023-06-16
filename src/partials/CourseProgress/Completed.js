import { Button } from "@material-ui/core"
import React from "react"
import { useTranslation } from "gatsby-plugin-react-i18next"
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
      <a href="https://www.mooc.fi/en/profile/completions">
        <Primary>{t("completedRegister")}</Primary>
      </a>
    </CompletionContainer>
  )
}

export default Completed
