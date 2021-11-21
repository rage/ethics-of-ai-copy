import React, { Fragment, useContext, useEffect, useState } from "react"
import Button from "./Button"
import { signOut, getCachedUserDetails } from "../services/moocfi"
import LoginStateContext, {
  withLoginStateContext,
} from "../contexes/LoginStateContext"
import { withTranslation } from "gatsby-plugin-react-i18next"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser as profileIcon } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

const LoginControls = ({ t }) => {
  const [name, setName] = useState("")
  const loginStateContext = useContext(LoginStateContext)

  const doSignOut = (e) => {
    e.preventDefault()
    signOut()
  }

  useEffect(() => {
    if (!name) {
      getName()
    }
  }, [])

  const getName = async () => {
    if (!loginStateContext.loggedIn) {
      return
    }
    const details = await getCachedUserDetails()
    let name = `${details?.user_field?.first_name || ""} ${
      details?.user_field?.last_name || ""
    }`.trim()
    if (name === "") {
      name = details.email
    }
    setName(name)
  }

  return loginStateContext.loggedIn ? (
    <Fragment>
      <Button to="/profile">
        <StyledIcon icon={profileIcon} />
        {name}
      </Button>
      <Button onClick={doSignOut}>{t("logout")}</Button>
    </Fragment>
  ) : (
    <Fragment>
      <Button to="/sign-up">{t("newAccount")}</Button>
      <Button to="/sign-in">{t("login")}</Button>
    </Fragment>
  )
}

export default withTranslation("common")(
  withSimpleErrorBoundary(withLoginStateContext(LoginControls)),
)
