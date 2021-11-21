import React, { Fragment, useContext, useEffect, useState } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../../templates/Layout"
import CourseOptionsEditor from "../../components/user/CourseOptionsEditor"
import LoginStateContext, {
  withLoginStateContext,
} from "../../contexes/LoginStateContext"
import Container from "../../components/Container"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { getCachedUserDetails } from "../../services/moocfi"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle as icon } from "@fortawesome/free-solid-svg-icons"

import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import { useI18next, withTranslation } from "gatsby-plugin-react-i18next"

const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: #43a047 !important;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

const Profile = () => {
  const { navigate, t } = useI18next()
  const loginStateContext = useContext(LoginStateContext)

  const [successMessage, setSuccessMessage] = useState(null)

  const onStepComplete = () => {
    setSuccessMessage("Saved!")
  }

  const handleClose = () => {
    setSuccessMessage(null)
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (!loginStateContext.loggedIn) {
        return
      }

      let userInfo = await getCachedUserDetails()
      const research = userInfo?.extra_fields?.research
      if (research === undefined) {
        navigate("/missing-info", { replace: true })
      }
    }
    fetchUserDetails()
  }, [])

  if (!loginStateContext.loggedIn) {
    if (typeof window !== "undefined") {
      navigate("/sign-in", { replace: true })
    }
    return <div>{t("redirecting")}</div>
  }

  return (
    <Layout>
      <Container>
        <Helmet title={t("profilePageHeader")} />
        <h1>{t("profilePageHeader")}</h1>
        <CourseOptionsEditor onComplete={onStepComplete} />
      </Container>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={successMessage}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <StyledSnackbarContent
          variant="success"
          message={
            <Fragment>
              <StyledIcon icon={icon} />{" "}
              <span>{successMessage}</span>
            </Fragment>
          }
        />
      </Snackbar>
    </Layout>
  )
}

export default withTranslation("common")(withLoginStateContext(Profile))

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
