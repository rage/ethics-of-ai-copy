import React from "react"
import styled from "styled-components"
import { PrimaryButton } from "../../components/Buttons"
import heroSvg from "../../images/hero-svg.svg"

const Layout = styled.div`
  width: 100vw;
  height: 25em;
`

const Background = styled.div`
  background-image: url(${heroSvg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 1;
  position: relative;
  width: 100%;
  height: 60em;
`
const NextChapter = (props) => {
  return (
    <Layout>
      <Background>
        <div
          style={{
            marginLeft: "45em",
            marginTop: "10em",
            position: "absolute",
          }}
        >
          <PrimaryButton to={`/chapter-${props.nextChapter}`}>
            {" "}
            Next Chapter
          </PrimaryButton>
        </div>
      </Background>
    </Layout>
  )
}

export default NextChapter
