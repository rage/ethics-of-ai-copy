import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { Button as MaterialButton } from "@material-ui/core"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const StyledLink = styled(Link)`
  margin: 1rem 0.5rem;

  &:hover {
    text-decoration: none;
  }
`

const StyledButton = styled.button`
  display: inline-block;
  width: auto;
  border-radius: 4px;
  padding: 0.9rem 2.4rem;
  color: #333;
  border: none;
  text-transform: none;
  outline: 0;
  background: #fff;
  font-size: 1.4rem;
  font-weight: 400;
  backface-visibility: hidden;
  letter-spacing: normal;
  transform: translate3d(0, 0, 0);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  cursor: pointer;
  text-decoration: none;

  :hover {
    transform: translate3d(0, -2px, 0);
    box-shadow: 0 6px 7px 0 rgba(0, 0, 0, 0.15), 0 0 5px 0 rgba(0, 0, 0, 0.1);
    text-decoration: none;
  }
`
export const Primary = styled(StyledButton)`
  background: #333;
  color: #fff;
`
const Hero = styled(StyledButton)`
  background: #4a6164;
  color: #fff;
  border-radius: 50px;
  font-weight: 500;
`
const Secondary = styled(StyledButton)`
  background: #fff;
  color: #333;
`
const Ghost = styled(StyledButton)`
  background: transparent;
`

export const PrimaryButton = ({
  children,
  to,
  onClick,
  disabled,
  variant = "outlined",
}) => (
  <StyledLink
    onClick={onClick}
    to={to === undefined ? false : to}
    disabled={disabled}
  >
    <Primary variant={variant}> {children} </Primary>
  </StyledLink>
)

export const HeroButton = ({
  children,
  to,
  onClick,
  disabled,
  variant = "outlined",
}) => (
  <StyledLink
    onClick={onClick}
    to={to === undefined ? false : to}
    disabled={disabled}
  >
    <Hero variant={variant}> {children} </Hero>
  </StyledLink>
)
export const SecondaryButton = ({
  children,
  to,
  onClick,
  disabled,
  variant = "outlined",
}) => (
  <StyledLink
    onClick={onClick}
    to={to === undefined ? false : to}
    disabled={disabled}
  >
    <Secondary variant={variant}> {children} </Secondary>
  </StyledLink>
)

export const GhostButton = ({
  children,
  to,
  onClick,
  disabled,
  variant = "outlined",
}) => (
  <StyledLink
    onClick={onClick}
    to={to === undefined ? false : to}
    disabled={disabled}
  >
    <Ghost variant={variant}> {children} </Ghost>
  </StyledLink>
)

/* export default withSimpleErrorBoundary(Button) */
