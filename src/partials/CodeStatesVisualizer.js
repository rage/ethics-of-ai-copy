import React, { lazy, Suspense } from "react"

import "code-states-visualizer/dist/app.css"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { withTranslation } from "gatsby-plugin-react-i18next"
const CodeStatesVisualizer = lazy(() => import("code-states-visualizer"))

class CodeStatesVisualizerWrapper extends React.Component {
  state = {
    render: false,
  }

  componentDidMount() {
    this.setState({ render: true })
  }

  render() {
    if (!this.state.render) {
      return <div>{this.props.t("loading2")}</div>
    }
    const { input } = this.props
    return (
      <Suspense fallback={<div>{this.props.t("loading2")}</div>}>
        <CodeStatesVisualizer input={input} />
      </Suspense>
    )
  }
}

export default withTranslation("common")(
  withSimpleErrorBoundary(CodeStatesVisualizerWrapper),
)
