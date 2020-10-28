import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import chapterIcon from "../images/blob-4.svg"
import Title from "./Title"

const Wrapper = styled.aside`
  @media (min-width: 1px) {
    padding: 3em 1em 7em 1em;
    margin-bottom: 8em;
    background: rgba(165, 178, 166, 0.2);
    border-radius: 15px;
    position: relative;
    width: 100%;
  }
  @media (min-width: 444px) {
    padding: 3em 1em 6em 1em;
  }
  @media (min-width: 600px) {
    padding: 3em 1em 6em 2em;
    width: 50%;
  }
  @media (min-width: 870px) {
    padding: 3em 1em 6em 2em;
    width: 40%;
  }
  @media (min-width: 1100px) {
    padding: 3em 5em 7em 5em;
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
  display: table;
`

const ImageBox = styled.div`
  @media (min-width: 1px) {
    top: 5.2em;
    left: 0.2em;
    width: 40px;
    height: auto;
    position: relative;
    margin-top: -3em;
    margin-bottom: 1em;
    display: block;
    vertical-align: left;
  }
  @media (min-width: 425px) {
    top: 5.5em;
    position: relative;
  }
`
const Image = styled.img`
  top: -2.2em;
  left: 0.2em;
  width: 100px;
  height: auto;
  position: relative;
  margin-top: -12em;
  margin-bottom: -12em;
  -webkit-transform: rotate(105deg);
  z-index: 1;
`

const ChapterParts = styled.div`
  margin-bottom: -4em;
  margin-top: -2em;
  margin-inline-start: 1em;
  line-height: 2;
  @media (min-width: 400px) {
    margin-inline-start: 7em;
  }
  @media (min-width: 500px) {
    margin-inline-start: 5em;
  }
  @media (min-width: 600px) {
    margin-inline-start: 0em;
  }
`

const chooseChapterValue = {
  1: "I",
  3: "II",
  5: "III",
  7: "IV",
  9: "V",
}
const ChapterBox = (props) => {
  const chapters = props.children[0].props.children
  // position:"relative", verticalAlign:"middle", marginTop:"0rem", marginInlineStart:"0.8em", textAlign:"center"}}
  return (
    <Wrapper>
      <h3 style={{ textAlign: "center", marginBottom: "-1.7em" }}>
        {" "}
        Chapter content{" "}
      </h3>
      <Body>
        {chapters.map((value, index) => {
          if (index % 2 !== 0) {
            return (
              <ChapterParts>
                <ImageBox>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      zIndex: "2",
                      top: "0.5em",
                      left: "0.1em",
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontSize: "15px",
                      }}
                    >
                      {chooseChapterValue[index]}
                    </p>
                  </div>
                  <Image src={chapterIcon} alt="Chapter icon" />
                </ImageBox>
                <p
                  style={{
                    marginInlineStart: "4em",
                    marginTop: "0em",
                    display: "inline-block",
                  }}
                >
                  {chapters[index].props.children[0]}
                </p>
              </ChapterParts>
            )
          }
        })}
      </Body>
    </Wrapper>
  )
}

export default withSimpleErrorBoundary(ChapterBox)
