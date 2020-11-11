import React from "react"
import styled from "styled-components"

import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import chapterIcon from "../images/blob-4.svg"
import PagesContext from "../contexes/PagesContext"
import { nthIndex } from "../util/strings"
import { Link } from "gatsby"
import { withTranslation } from "react-i18next"
import { Divider, Paper } from "@material-ui/core"

const Wrapper = styled.aside`
  @media (min-width: 1px) {
    padding: 3em 1em 7em 1em;
    margin-bottom: 8em;
    background: rgba(165, 178, 166, 0.2);
    border-radius: 24px;
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
  @media (min-width: 1500px) {
    padding: 3em 5em 7em 5em;
    width: 35%;
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
  padding-bottom: 2em;
`

const ImageBox = styled.div`
  @media (min-width: 1px) {
    width: 40px;
    height: 40px;
    position: relative;
    display: inline-block;
    vertical-align: middle;
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
  margin-top: 1em;
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
      console.log(sectionPages)
      const chapters = []
      // const chapters = props.children[0].props.children
      // position:"relative", verticalAlign:"middle", marginTop:"0rem", marginInlineStart:"0.8em", textAlign:"center"}}
      return (
        <Wrapper>
          <h3 style={{ textAlign: "center", marginBottom: "0.7em" }}>
            {" "}
            Chapter content{" "}
          </h3>
          <Body>
            {sectionPages.map((value, index) => {
              return (
                <ChapterParts>
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
                          top: "0.4em",
                          textAlign: "center",
                          position: "relative",
                          zIndex: "3",
                          color: "white",
                          fontSize: "20px",
                        }}
                      >
                        {chooseChapterValue[index]}
                      </p>
                      <Image src={chapterIcon} alt="Chapter icon" />
                    </div>
                  </ImageBox>
                  <span
                    style={{
                      verticalAlign: "middle",
                      marginLeft: "1em",
                      fontSize: "18px",
                    }}
                  >
                    <a
                      style={{ textDecoration: "none", color: "#1C3B40" }}
                      href={value.path}
                    >
                      {value.title}
                    </a>
                  </span>
                </ChapterParts>
              )
            })}
          </Body>
        </Wrapper>
      )
    }}
  </PagesContext.Consumer>
)

export default withSimpleErrorBoundary(ChapterBox)
