import React from "react"
import styled from "styled-components"

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// import { faInfoCircle, faUserGraduate } from "@fortawesome/free-solid-svg-icons"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import techIcon from "../images/tech-icon.svg"


const Wrapper = styled.aside`
  @media (min-width: 711px){
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 30px;
    background: #E0DEDC;
    padding-left: 4rem;
    padding-top: 2rem;
    position: relative;
    ul {
      padding-inline-start:40px
    }
  }
  @media (max-width: 710px){
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 30px;
    background: #E0DEDC;
    padding-left: 4rem;
    padding-top: 2rem;
    position: relative;
    ul {
      padding-inline-start:40px
    }
    }
    @media (max-width: 425px){
      padding: 1rem;
      margin-bottom: 2rem;
      box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
      border-radius: 30px;
      background: #E0DEDC;
      padding-left: 4rem;
      padding-top: 2rem;
      position: relative;
      ul {
        padding-inline-start:40px
      }
      }
`

/*
const StyledIcon = styled(FontAwesomeIcon)`
  vertical-align: middle;
  margin-right: 1rem;
  margin-left: 0.5rem;
  color: var(--color);
`


const Header = styled.h3`
  font-size: 1.3rem;
  font-weight: normal;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f7f7f9;
`
*/
const Body = styled.div`
  padding-bottom: 0.5rem;
`
/*
const variantToColor = {
  hint: "#528afc",
  learningObjectives: "#57b181",
}

const variantToIcon = {
  hint: faInfoCircle,
  learningObjectives: faUserGraduate,
}
*/
const ImageBox = styled.img`
@media (min-width: 1px){
  top: 3.3em;
  left: -1em;
  width: 60px;
  heigth: auto;
  position: absolute;
  -webkit-transform: translate(10%, 0);
}
@media (min-width: 425px){
  top: 3.3em;
  left: -2.5em;
  width: 70px;
  heigth: auto;
  position: absolute;
  -webkit-transform: translate(15%, 0);
}
@media (min-width: 900px){
  top: 3.3em;
  left: -4em;
  width: 90px;
  heigth: auto;
  position: absolute;
  -webkit-transform: translate(18%, 0);
}
`
/*
<Wrapper style={{ "--color": variantToColor[props.variant] }}>
  <Header>
    <StyledIcon icon={variantToIcon[props.variant]} size="1x" />
      {props.name}
  </Header>
  <Body>{props.children}</Body>
</Wrapper>
*/

const TextBox = props => {
  return (
    <Wrapper>
    <h3> {props.name}</h3>
    <Body>{props.children}</Body>
    <ImageBox src={techIcon} alt="Tech icon"></ImageBox>
    </Wrapper>
  )
}

export default withSimpleErrorBoundary(TextBox)
