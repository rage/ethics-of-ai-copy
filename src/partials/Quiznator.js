import React from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { normalizeExerciseId } from "../util/strings"
import { withTranslation } from "gatsby-plugin-react-i18next"

const quizWrapper = styled.div`
  code {
    color: black !important;
  }
`

class Quiznator extends React.Component {
  componentDidMount() {
    const { id } = this.props
    if (!id || typeof window === "undefined") {
      return
    }
    if (!window.loadQuiz) {
      return
    }
    window.loadQuiz(document.getElementById(`unloaded-quiz-${id}`))
  }

  render() {
    const { id } = this.props
    if (!id) {
      return <div>{this.props.t("quizIdMissing")}</div>
    }
    return (
      <quizWrapper id={normalizeExerciseId(`quiz-${id}`)}>
        <div
          id={`unloaded-quiz-${id}`}
          className="quiz-plugin"
          data-quiz-id={id}
        />
      </quizWrapper>
    )
  }
}

export default withTranslation("common")(withSimpleErrorBoundary(Quiznator))
