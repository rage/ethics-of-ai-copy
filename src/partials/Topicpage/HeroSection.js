import React from "react"
import styled from "styled-components"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"
import TopicContent from "./TopicContent"

const HeroSection = styled.div`
  padding: 8rem 12rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: #eee;

  ${respond.xs`
/*   background: cyan; */
  padding: 4rem 6rem;
  grid-template-columns: 1fr;
`}

  ${respond.sm`
/* background: red; */
`}

${respond.md`
/* background: green; */
grid-template-columns: repeat(2, 1fr);
`}

${respond.lg`
/* background: blue; */
padding: 8rem 12rem;
grid-template-columns: repeat(2, 1fr);
`}
`

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 4rem 2rem 4rem 0;

  span {
    font-family: Merriweather, serif;
    font-size: 22px;
    line-height: 1.6;
    color: #202020;
    opacity: 0.8;
  }

  h2 {
    text-align: center !important; /* TO-DO: Find a work arround this */
    margin-bottom: 2rem;

    ${respond.md`
  text-align: left !important;
`}
  }

  ${respond.xs`
  text-align: center;
  width: 100%;
  margin-bottom: 1rem;

`}

  ${respond.md`
  text-align: left;
  margin-bottom: 0;

`}

  ${respond.lg`
  width: 100%;
  text-align: left;
  margin-bottom: 0;
`}
`
const VideoWrapper = styled.div`
  padding: 0.5rem;
`

export default (props) => {
  return (
    <>
      <HeroSection>
        <HeroText>
          <H2> {props.title} </H2> <span> {props.subtitle} </span>{" "}
        </HeroText>{" "}
        <VideoWrapper> {props.children} </VideoWrapper>{" "}
      </HeroSection>{" "}
      <TopicContent> </TopicContent>{" "}
    </>
  )
}
