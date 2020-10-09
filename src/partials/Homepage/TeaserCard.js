import React from "react"
import styled from "styled-components"
import H5 from "../../partials/Headers/H5"

const TeaserWrapper = styled.div`
  width: 100%;
  height: 16rem;
  /*   box-shadow: ${(props) =>
    props.state
      ? `0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);`
      : `0`}; */
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  display: grid;
  align-content: center;
  justify-content: center;
  transition: 0.25s;

  :hover {
    background: #fff;
    opacity: 1;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    color: #202020;
    border-color: transparent;
  }
`

const TeaserIcon = styled.div`
  width: 21.5%;
  height: 65px;
  display: grid;
  align-content: center;
  justify-content: center;
  margin: 0.2rem auto 0.2rem auto;
`

const TeaserText = styled.div`
  display: flex;
  flex-direction: column;
  align-item: left;
  padding: 0 1rem 0.5rem 1rem;
  font-weight: 400;
  color: #202020;

  p {
    font-size: 16px;
    line-height: 1.625;
    font-family: "Merriweather", serif;
    opacity: 0.8;
  }
`

export default ({ icon, index, title, text }) => {
  return (
    <TeaserWrapper>
      <TeaserIcon> {icon} </TeaserIcon>{" "}
      <TeaserText>
        <H5> {title} </H5> <p>{text}</p>
      </TeaserText>{" "}
    </TeaserWrapper>
  )
}
