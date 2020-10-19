import React from "react"
import ChartIcon from "../../assets/ethics-icon.svg"
import PresenterIcon from "../../assets/phil-icon.svg"
import WeighIcon from "../../assets/tech-icon.svg"
import styled from "styled-components"

const icons = {
  chart: <ChartIcon width="60px" height="60px" />,
  presenter: <PresenterIcon width="60px" height="60px" />,
  weigh: <WeighIcon width="60px" height="60px" />,
}

const TeaserWrapper = styled.div`
  width: 100%;
  height: 20rem;
  height: 16rem;
  box-shadow: ${(props) =>
    props.state
      ? `0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);`
      : `0`};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TeaserIcon = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-content: center;
  justify-content: center;
  margin-bottom: 0.5rem;
`

const TeaserText = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  padding: 0 1rem 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 400;
  color: #6f7678;
`

export default (props) => {
  return (
    <>
      <TeaserWrapper state={props.state}>
        <div>
          <TeaserIcon> {icons[props.icon]} </TeaserIcon>{" "}
          <TeaserText> {props.children} </TeaserText>{" "}
        </div>{" "}
      </TeaserWrapper>{" "}
    </>
  )
}
