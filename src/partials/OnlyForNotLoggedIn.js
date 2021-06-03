import React, { Component } from "react"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import LoginStateContext from "../contexes/LoginStateContext"
import { withTranslation } from "react-i18next"

class OnlyForNotLoggedIn extends Component {
  static contextType = LoginStateContext

  state = {
    render: false,
  }

  componentDidMount() {
    this.setState({
      render: true,
    })
  }

  render() {
    if (!this.state.render) {
      return <div>{this.props.t("loading2")}</div>
    }
    if (!this.context.loggedIn) {
      return <div>{this.props.children}</div>
    }
    return <div />
  }
}

export default withTranslation("common")(
  withSimpleErrorBoundary(OnlyForNotLoggedIn),
)
