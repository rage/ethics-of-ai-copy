import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import chapterIcon from "../images/blob-4.svg"

const Wrapper = styled.aside`
  @media (min-width: 1px) {
    padding: 5em 5em 5em 5em;
    margin-bottom: 2rem;
    background: rgba(165, 178, 166, 0.2);
    border-radius: 15px;
    position: relative;
    text-align: center;
  }
  @media (min-width: 444px) {
    padding: 5em 5em 5em 5em;
  }
  @media (min-width: 600px) {
    padding: 5em 5em 5em 5em;
    width: 60%;
  }
  @media (min-width: 870px) {
    padding: 3em 5em 5em 5em;
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

const ImageBox = styled.div`
  @media (min-width: 1px) {
    top: 5.8em;
    left: 0.2em;
    width: 40px;
    height: auto;
    position: relative;
    margin-top: -5em;
    margin-bottom: -1em;
    display: block;
  }
  @media (min-width: 425px) {
    top: 5.5em;
    left: 0.2em;
    width: 40px;
    height: auto;
    position: relative;
  }
`
const Image = styled.img`
  top: 0em;
  left: 0.2em;
  width: 100px;
  height: auto;
  position: relative;
  margin-top: -12em;
  margin-bottom: -12em;
  -webkit-transform: translate(5%, 0);
  -webkit-transform: rotate(105deg);
  z-index: 1;
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
      <h3> Chapter content </h3>
      <Body>
        {chapters.map((value, index) => {
          if (index % 2 !== 0) {
            return (
              <div style={{ marginBottom: "-4em", marginTop: "-5em" }}>
                <ImageBox>
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      zIndex: "2",
                      top: "0.2em",
                      left: "0.1em",
                      position: "absolute",
                    }}
                  >
                    <p
                      style={{
                        textAlign: "center",
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
                    display: "table",
                    marginTop: "4.5em",
                  }}
                >
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
