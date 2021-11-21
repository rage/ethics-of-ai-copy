import React from "react"
import styled from "styled-components"
import { Button as MaterialButton } from "@material-ui/core"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { Link } from "gatsby-plugin-react-i18next"

const StyledLink = styled(Link)`
  margin: 1rem 0rem;

  &:hover {
    text-decoration: none;
  }
`

const Button = ({ children, to, onClick, disabled, variant = "outlined" }) => (
  <StyledLink
    onClick={onClick}
    to={to === undefined ? false : to}
    disabled={disabled}
  >
    <MaterialButton variant={variant}> {children} </MaterialButton>{" "}
  </StyledLink>
)

export default withSimpleErrorBoundary(Button)
