import React from "react"
import styled from "styled-components"

import Icon1 from "../../assets/chap-1.svg"
import Icon2 from "../../assets/chap-2.svg"
import Icon3 from "../../assets/chap-3.svg"
import Icon4 from "../../assets/chap-4.svg"
import Icon5 from "../../assets/chap-5.svg"
import Icon6 from "../../assets/chap-6.svg"

const svgs = {
  chapter01: <Icon1 />,
  chapter02: <Icon2 />,
  chapter03: <Icon3 />,
  chapter04: <Icon4 />,
  chapter05: <Icon5 />,
  chapter06: <Icon6 />,
  chapter07: <Icon3 />,
}

const CourseGridWrapper = styled.div`
  background: #e3c7b6;
  width: auto;
  height: 22rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`

const CourseGridSVG = styled.div`
  width: 100%;
  height: 60%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 60px;
  background: #f6ebe8;
`

const CourseGridText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #333;
  padding: 2rem;

  H5 {
    margin-bottom: 6px;
  }

  span {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.7;
  }
`

export default (props) => {
  return (
    <>
      <CourseGridWrapper>
        {" "}
        <CourseGridSVG> {svgs[props.title]} </CourseGridSVG>{" "}
        <CourseGridText> {props.children} </CourseGridText>{" "}
      </CourseGridWrapper>{" "}
    </>
  )
}
