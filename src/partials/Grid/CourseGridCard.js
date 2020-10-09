import React from "react"
import styled from "styled-components"
import Thumbnail01 from "../../assets/ZombieingDoodle.svg"
import Thumbnail02 from "../../assets/MessyDoodle.svg"
import Thumbnail03 from "../../assets/SprintingDoodle.svg"
import Thumbnail04 from "../../assets/UnboxingDoodle.svg"
import Thumbnail05 from "../../assets/SwingingDoodle.svg"
import Thumbnail06 from "../../assets/SitReadingDoodle.svg"
import { PrimaryButton } from "../../components/Buttons"

const courses = [
  {
    icon: <Thumbnail01 />,
    title: "Part 1",
    text: "This is an introduction to Git and GitHub",
  },
  {
    icon: <Thumbnail02 />,
    title: "Part 2",
    text: "This is an introduction to Git and GitHub",
  },
  {
    icon: <Thumbnail03 />,
    title: "Part 3",
    text: "This is an introduction to Git and GitHub",
  },
  {
    icon: <Thumbnail04 />,
    title: "Part 4",
    text: "This is an introduction to Git and GitHub",
  },
  {
    icon: <Thumbnail05 />,
    title: "Part 5",
    text: "This is an introduction to Git and GitHub",
  },
  {
    icon: <Thumbnail06 />,
    title: "Part 6",
    text: "This is an introduction to Git and GitHub",
  },
]

const CourseGridWrapper = styled.div`
  background: #fff;
  width: auto;
  height: 34rem;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  display: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const CourseGridSVG = styled.div`
  background-position: center;
  width: 100%;
  height: 60%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 20px;
`

const CourseGridTextBox = styled.div`
  display: absolute;
  flex-direction: column;
  align-item: center;
  padding: 1rem;
  height: 50%;
  top: 20px;
  width: 80%;
  margin: 0 auto;

  div {
    margin-bottom: 1.4rem;
  }

  span {
    color: #202020;
    font-size: 16px;
    line-height: 1.625;
    opacity: 0.4;
  }
`

/* const StyledIcon = styled(Icon)`
  width: 100%;
  height: 100%;
` */

export default ({ children }) => {
  return (
    <>
      {courses.map((course) => (
        <CourseGridWrapper>
          <CourseGridSVG>{course.icon}</CourseGridSVG>
          <CourseGridTextBox>
            <div>
              <h4>{course.title}</h4>
              <span>{course.text}</span>
            </div>
            <PrimaryButton to="/topic"> Preview </PrimaryButton>
          </CourseGridTextBox>
        </CourseGridWrapper>
      ))}
    </>
  )
}
