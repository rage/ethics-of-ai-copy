import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import chapterIcon from "../images/blob-4.svg"

const Wrapper = styled.aside`
  @media (min-width: 1px) {
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    background: #e0dedc;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 5em;
    position: relative;
  }
  @media (min-width: 444px) {
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    background: #e0dedc;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 5em;
    position: relative;
  }
  @media (min-width: 600px) {
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    background: #e0dedc;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 5em;
    position: relative;
    width: 50%;
  }
  @media (min-width: 870px) {
    padding: 1rem;
    margin-bottom: 2rem;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 20px;
    background: #e0dedc;
    padding-left: 2rem;
    padding-top: 2rem;
    padding-bottom: 5em;
    position: relative;
    width: 40%;
  }
`

const Header = styled.h3`
  font-size: 1.3rem;
  font-weight: normal;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f7f7f9;
`

const Body = styled.div`
  padding-bottom: 0.5rem;
`

const ImageBox = styled.img`
  @media (min-width: 1px) {
    top: 5.8em;
    left: 0.2em;
    width: 40px;
    heigth: auto;
    position: relative;
    -webkit-transform: translate(10%, 0);
    -webkit-transform: rotate(105deg);
  }
  @media (min-width: 425px) {
    top: 6em;
    left: 0.2em;
    width: 40px;
    heigth: auto;
    position: relative;
    -webkit-transform: translate(5%, 0);
    -webkit-transform: rotate(105deg);
  }
`

const ChapterBox = (props) => {
  console.log(props.children[0].props.children.length / 2)
  console.log(props.children[0].props.children[1].props.children[0])
  console.log(props.children[0].props.children[3].props.children[0])
  console.log(props.children[0].props.children[5].props.children[0])
  console.log(props.children[0].props.children[7].props.children[0])
  const chapters = props.children[0].props.children
  return (
    <Wrapper>
      <h3> Chapter content</h3>
      <Body>
        {chapters.map((value, index) => {
          if (index % 2 !== 0) {
            return (
              <div style={{ marginBottom: "-5em", marginTop: "-5em" }}>
                <ImageBox src={chapterIcon} alt="Chapter icon"></ImageBox>
                <p style={{ marginInlineStart: "4em", display: "table" }}>
                  {chapters[index].props.children[0]}
                </p>
              </div>
            )
          }
        })}
      </Body>
    </Wrapper>
  )
}

export default withSimpleErrorBoundary(ChapterBox)
