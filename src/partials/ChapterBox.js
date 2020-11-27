import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import chapterIcon from "../images/blob-4.svg"
import PagesContext from "../contexes/PagesContext"
import { nthIndex } from "../util/strings"
import { respond } from "../_respond"

const Wrapper = styled.aside`
  padding: 3em 2em 7em 2em;
  margin-bottom: 5em;
  background: rgba(165, 178, 166, 0.2);
  border-radius: 10px;
  position: relative;
  width: 500px;
  max-height: 480px;

  ${respond.mobile`
  width: 100%;
  padding: 1.6rem 1rem;
  margin: 4rem 0;
`}

  ${respond.xs`
width: 500px;
padding: 3em 2em 7em 2em;
margin-bottom: 5em;
`}

h2 {
    ${respond.mobile`
  font-size: 22px;
  text-transform: uppercase;
`}
    ${respond.xs`
  text-transform: capitalize;
`}
  }
`

const Header = styled.h3`
  font-size: 1.3rem;
  font-weight: normal;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f7f7f9;
`

const Body = styled.div``

const ImageBox = styled.div`
  @media (min-width: 1px) {
    width: 40px;
    height: 40px;
    position: relative;
    vertical-align: middle;
    display: inline-block;
  }
`
const Image = styled.img`
  position: absolute;
  -webkit-transform: rotate(105deg);
  z-index: 1;
  top: 0;
  left: 0;
`

const ChapterParts = styled.div`
  margin-left: 0em;
  padding: 0.8em 1em;
  list-style-type: none;
  color: black;
  text-decoration: none;
  border-radius: 5px;
  margin-bottom: 0.4em;

  ${(props) =>
    props.currentPage &&
    `
    background-color: rgba(187, 198, 187, 0.8);
    border-radius: 5px;
    color: white;

    :hover {
      background-color: rgba(187, 198, 187) !important;
      color: white !important;
    }
  `}
  :hover {
    background-color: #d6dcd6;
    color: black;
  }
`

const chooseChapterValue = {
  0: "I",
  1: "II",
  2: "III",
  3: "IV",
  4: "V",
}
const ChapterBox = (props) => (
  <PagesContext.Consumer>
    {(value) => {
      const currentPath = value.current.frontmatter.path
      let sectionPath = currentPath
      const sectionSeparator = nthIndex(currentPath, "/", 2)
      if (sectionSeparator !== -1) {
        sectionPath = currentPath.substr(0, sectionSeparator)
      }

      const sectionPages = value.all
        .filter((o) => o.path.startsWith(`${sectionPath}/`))
        .sort((a, b) => {
          a = a.path.toLowerCase()
          b = b.path.toLowerCase()

          return a > b ? 1 : b > a ? -1 : 0
        })
      return (
        <Wrapper>
          <h2
            style={{
              textAlign: "center",
              marginBottom: "0.7em",
              color: "#3B4754",
              fontFamily: "Work Sans",
            }}
          >
            {" "}
            Chapter content{" "}
          </h2>
          <Body>
            {sectionPages.map((value, index) => {
              return (
                <a
                  style={{ color: "#1C3B40", boxShadow: "none" }}
                  href={value.path}
                >
                  <ChapterParts currentPage={currentPath === value.path}>
                    <ImageBox>
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          zIndex: "2",
                          left: "-0.8em",
                          textAlign: "center",
                        }}
                      >
                        <p
                          style={{
                            top: "0.6em",
                            textAlign: "center",
                            position: "relative",
                            zIndex: "3",
                            color: "white",
                            fontSize: "16px",
                          }}
                        >
                          {chooseChapterValue[index]}
                        </p>
                        <Image src={chapterIcon} alt="Chapter icon" />
                      </div>
                    </ImageBox>
                    <p
                      style={{
                        verticalAlign: "top",
                        /* marginLeft: "1em", */
                        fontSize: "18px",
                        display: "inline-block",
                        width: "80%",
                        margin: ".4em 0 .4em 1em",
                      }}
                    >
                      {value.title}
                    </p>
                  </ChapterParts>
                </a>
              )
            })}
          </Body>
        </Wrapper>
      )
    }}
  </PagesContext.Consumer>
)

export default withSimpleErrorBoundary(ChapterBox)
