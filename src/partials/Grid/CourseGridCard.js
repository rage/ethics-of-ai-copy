import React from "react"
import styled from "styled-components"

import Icon1 from "../../assets/chap-1-rev.svg"
import Icon2 from "../../assets/chap-2.svg"
import Icon3 from "../../assets/chap-3.svg"
import Icon4 from "../../assets/chap-4.svg"
import Icon5 from "../../assets/chap-5.svg"
import Icon6 from "../../assets/chap-6.svg"
import Icon7 from "../../assets/chap-7.svg"

const svgs = {
  chapter01: <Icon1 width="180px" />,
  chapter02: <Icon2 width="170px" />,
  chapter03: <Icon3 width="170px" />,
  chapter04: <Icon4 width="150px" />,
  chapter05: <Icon5 width="200px" />,
  chapter06: <Icon6 width="200px" />,
  chapter07: <Icon7 width="160px" />,
}

const CourseGridWrapper = styled.div`
  background: #fff;
  width: auto;
  height: 28rem;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    border: none;
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

  H4 {
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.8;
    color: #333;
  }
`

export default (props) => {
  return (
    <>
      <a href={props.url} style={{ textDecoration: "none" }}>
        <CourseGridWrapper>
          {" "}
          <CourseGridSVG> {svgs[props.title]} </CourseGridSVG>{" "}
          <CourseGridText> {props.children} </CourseGridText>{" "}
        </CourseGridWrapper>{" "}
      </a>
    </>
  )
}
