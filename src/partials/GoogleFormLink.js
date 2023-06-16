import React, { useContext } from "react"
import LoginStateContext from "../contexes/LoginStateContext"
import styled from "styled-components"
import { Card } from "@material-ui/core"
import { useTranslation } from "gatsby-plugin-react-i18next"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { useAsync } from "react-use"
import { getCachedUserDetails } from "../services/moocfi"

const Wrapper = styled(Card)`
  margin-bottom: 2rem;
  padding: 1rem;
`

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
`

const P = styled.p`
  margin-bottom: 1rem !important;
`

const GoogleFormLink = ({ children, href, emailfieldname }) => {
  const { loggedIn } = useContext(LoginStateContext)
  const userDetails = useAsync(getCachedUserDetails)
  const { t } = useTranslation("common")

  if (!loggedIn) {
    return (
      <Wrapper>
        <MessageWrapper>
          <div>
            <P>{t("loginToSee")}</P>
          </div>
        </MessageWrapper>
      </Wrapper>
    )
  }

  if (userDetails.loading) {
    return <div>{t("loading2")}</div>
  }

  if (userDetails.error) {
    return <div>{t("userInfoError")}</div>
  }

  const email = userDetails.value.email

  let link = href
  if (emailfieldname) {
    link = `${link}&${encodeURIComponent(emailfieldname)}=${encodeURIComponent(
      email,
    )}`
  }
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

export default withSimpleErrorBoundary(GoogleFormLink)
