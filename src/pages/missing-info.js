import React from "react"

import Layout from "../templates/Layout"
import CourseOptionsEditor from "../components/user/CourseOptionsEditor"
import { navigate } from "gatsby"
import LoginStateContext, {
  withLoginStateContext,
} from "../contexes/LoginStateContext"
import Container from "../components/Container"
import { withTranslation } from "react-i18next"

class MissingInfo extends React.Component {
  static contextType = LoginStateContext

  onStepComplete = () => {
    if (typeof window !== "undefined") {
      window.history.back()
      return
    }
    navigate("/")
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
          <CourseOptionsEditor
            courseVariant="nodl"
            onComplete={this.onStepComplete}
          />
        </Container>
      </Layout>
    )
  }
}

export default withTranslation("common")(withLoginStateContext(MissingInfo))
