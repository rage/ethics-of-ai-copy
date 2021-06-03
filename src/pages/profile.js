import React, { Fragment } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"

import Layout from "../templates/Layout"
import CourseOptionsEditor from "../components/user/CourseOptionsEditor"
import { navigate } from "gatsby"
import LoginStateContext, {
  withLoginStateContext,
} from "../contexes/LoginStateContext"
import Container from "../components/Container"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { getCachedUserDetails } from "../services/moocfi"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle as icon } from "@fortawesome/free-solid-svg-icons"

import Snackbar from "@material-ui/core/Snackbar"
import SnackbarContent from "@material-ui/core/SnackbarContent"
import { withTranslation } from "react-i18next"

const StyledSnackbarContent = styled(SnackbarContent)`
  background-color: #43a047 !important;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.5rem;
`

class MissingInfo extends React.Component {
  static contextType = LoginStateContext

  state = {
    successMessage: null,
  }

  onStepComplete = () => {
    this.setState({ successMessage: "Saved!" })
  }

  handleClose = () => {
    this.setState({ successMessage: null })
  }

  async componentDidMount() {
    if (!this.context.loggedIn) {
      return
    }

    let userInfo = await getCachedUserDetails()
    const research = userInfo?.extra_fields?.research
    if (research === undefined) {
      navigate("/missing-info")
    }
  }

  render() {
    if (!this.context.loggedIn) {
      if (typeof window !== "undefined") {
        navigate("/sign-in")
      }
      return <div>{this.props.t("redirecting")}</div>
    }

    return (
      <Layout>
        <Container>
          <Helmet title={this.props.t("profilePageHeader")} />
          <h1>{this.props.t("profilePageHeader")}</h1>
          <CourseOptionsEditor onComplete={this.onStepComplete} />
        </Container>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          open={this.state.successMessage}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
          <StyledSnackbarContent
            variant="success"
            message={
              <Fragment>
                <StyledIcon icon={icon} />{" "}
                <span>{this.state.successMessage}</span>
              </Fragment>
            }
          />
        </Snackbar>
      </Layout>
    )
  }
}

export default withTranslation("common")(withLoginStateContext(MissingInfo))
