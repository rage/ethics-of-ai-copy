import React from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const ContentAreaContainer = styled.main`
  padding: 0 0.5rem;
  color: ${(props) => props.theme.textColor};
  margin-bottom: 5rem;
  min-height: 80vh;
  font-size: 1rem;
  ${(props) =>
    props.mobileMenuOpen &&
    `
  display: none;
  `}
`

class ContentArea extends React.Component {
  render() {
    return (
      <ContentAreaContainer
        mobileMenuOpen={this.props.mobileMenuOpen}
        className="content-area"
      >
        {" "}
        {this.props.children}{" "}
      </ContentAreaContainer>
    )
  }
}

export default withSimpleErrorBoundary(ContentArea)
