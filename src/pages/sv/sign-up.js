import React from "react"
import Helmet from "react-helmet"

import Layout from "../../templates/Layout"
import CreateAccountForm from "../../components/user/CreateAccountForm"
import CourseOptionsEditor from "../../components/user/CourseOptionsEditor"
import ConfirmEmail from "../../components/user/ConfirmEmail"
import LoginStateContext, {
  withLoginStateContext,
} from "../../contexes/LoginStateContext"
import Container from "../../components/Container"
import { withTranslation } from "gatsby-plugin-react-i18next"

class SignInPage extends React.Component {
  static contextType = LoginStateContext

  state = {
    step: 1,
  }

  onStepComplete = () => {
    this.setState((prevState) => ({
      step: prevState.step + 1,
    }))
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0)
    }
  }

  render() {
    let stepComponent
    if (this.state.step === 1) {
      stepComponent = <CreateAccountForm onComplete={this.onStepComplete} />
    } else if (this.state.step === 2) {
      stepComponent = (
        <CourseOptionsEditor
          courseVariant="nodl"
          onComplete={this.onStepComplete}
        />
      )
    } else {
      stepComponent = <ConfirmEmail onComplete={this.onStepComplete} />
    }

    return (
      <Layout>
        <Helmet title={this.props.t("create")} />
        <Container>{stepComponent}</Container>
      </Layout>
    )
  }
}

export default withTranslation("user")(withLoginStateContext(SignInPage))

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
