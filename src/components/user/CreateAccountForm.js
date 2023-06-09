import React from "react"
import { TextField, Button } from "@material-ui/core"
import { createAccount, authenticate } from "../../services/moocfi"
import { capitalizeFirstLetter } from "../../util/strings"
import { navigate } from "gatsby"
import { Link, withTranslation } from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"

const Row = styled.div`
  margin-bottom: 1.5rem;
`

const Form = styled.form``

const InfoBox = styled.div`
  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
`

class CreateAccountForm extends React.Component {
  onClick = async (e) => {
    e.preventDefault()
    this.setState({ submitting: true, triedSubmitting: true })
    if (!this.validate()) {
      this.setState({ canSubmit: false, submitting: false })
      return
    }
    try {
      const res = await createAccount({
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      })
      await authenticate({
        username: this.state.email,
        password: this.state.password,
      })
      this.props.onComplete()
    } catch (error) {
      try {
        let message = ""
        Object.entries(error).forEach((o) => {
          const key = o[0]
          const value = o[1]
          value.forEach((msg) => {
            let newMessage = capitalizeFirstLetter(
              `${key.replace(/_/g, " ")} ${msg}.`,
            )
            if (newMessage === "Email has already been taken.") {
              newMessage = this.props.t("user:emailInUse")
            }
            message = `${message} ${newMessage}`
          })
        })

        if (message === "") {
          message =
            this.props.t("user:problemCreatingAccount") + JSON.stringify(error)
        }
        this.setState({ error: message, submitting: false, errorObj: error })
      } catch (_error2) {
        this.setState({ error: JSON.stringify(error), submitting: false })
      }

      this.setState({ submitting: false })
    }
  }

  handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name]: value }, () => {
      this.validate()
    })
  }

  validate = () => {
    let newState = {
      error: "",
      errorObj: {},
    }
    const {
      email,
      password,
      password_confirmation,
      validatePassword,
      validateEmail,
      triedSubmitting,
    } = this.state
    if (email && validateEmail) {
      if (email.indexOf("@") === -1) {
        newState.error += this.props.t("user:noAt")
        newState.errorObj.email = this.props.t("user:noAt")
      }
      if (email && email.indexOf(".") === -1) {
        newState.error += this.props.t("user:noAt")
        newState.errorObj.email = this.props.t("user:noAt")
      }
    }

    if (password && password_confirmation && validatePassword) {
      if (password !== password_confirmation) {
        newState.error += this.props.t("user:passwordsNoMatch")
        newState.errorObj.password = this.props.t("user:passwordsNoMatch")
        newState.errorObj.password_confirmation = this.props.t(
          "passwordsNoMatch",
        )
      }
    }

    if (newState.error === "") {
      newState.error = false
      newState.canSubmit = true
    }

    if (!email || !password || !password_confirmation) {
      if (triedSubmitting) {
        newState.canSubmit = false
      }
      return false
    }
    this.setState(newState)
    return !newState.error
  }

  state = {
    email: undefined,
    password: undefined,
    password_confirmation: undefined,
    submitting: false,
    error: false,
    errorObj: {},
    validatePassword: false,
    validateEmail: false,
    canSubmit: true,
    triedSubmitting: true,
  }

  render() {
    if (this.context.loggedIn) {
      navigate("/")
      return <div>{this.props.t("common:redirecting")}</div>
    }
    return (
      <FormContainer>
        <h1>{this.props.t("user:createAccount")}</h1>
        <Form onChange={this.validate}>
          <InfoBox>
            {this.props.t("user:courseUses")}{" "}
            <a
              href="https://mooc.fi"
              target="_blank"
              rel="noopener noreferrer"
            >
              mooc.fi
            </a>{" "}
            {this.props.t("user:courseUses2")}
          </InfoBox>

          <Row>
            <TextField
              variant="outlined"
              type="email"
              name="email"
              autoComplete="email"
              label={this.props.t("user:email")}
              error={this.state.errorObj.email}
              fullWidth
              value={this.state.email}
              onChange={this.handleInput}
              onBlur={() => {
                this.setState({ validateEmail: true }, () => {
                  this.validate()
                })
              }}
            />
          </Row>
          <Row>
            <TextField
              variant="outlined"
              type={this.state.showPassword ? "text" : "password"}
              label={this.props.t("user:password")}
              name="password"
              error={this.state.errorObj.password}
              fullWidth
              value={this.state.password}
              onChange={this.handleInput}
            />
          </Row>
          <Row>
            <TextField
              variant="outlined"
              type={this.state.showPassword ? "text" : "password"}
              label={this.props.t("user:passwordAgain")}
              name="password_confirmation"
              error={this.state.errorObj.password_confirmation}
              fullWidth
              value={this.state.password_confirmation}
              onChange={this.handleInput}
              onBlur={() => {
                this.setState({ validatePassword: true }, () => {
                  this.validate()
                })
              }}
            />
          </Row>

          <Row>
            <Button
              onClick={this.onClick}
              disabled={this.state.submitting || !this.state.canSubmit}
              variant="contained"
              color="primary"
              fullWidth
              type="submit"
            >
              {this.props.t("user:create")}
            </Button>
          </Row>
        </Form>

        <Row>
          <Link to="/sign-in">{this.props.t("user:alreadyHaveAccount")}</Link>
        </Row>
        {this.state.error && (
          <InfoBox>
            <b>
              {this.props.t("user:error")} {this.state.error}
            </b>
          </InfoBox>
        )}
      </FormContainer>
    )
  }
}

export default withTranslation(["user", "common"])(
  withSimpleErrorBoundary(CreateAccountForm),
)
