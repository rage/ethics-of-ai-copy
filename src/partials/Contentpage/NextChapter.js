import React from "react"
import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation("common")

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
          <PrimaryButton to={props.nextChapter.path}>
            {" "}
            {t("nextChapter")}
          </PrimaryButton>
        </div>
      </Background>
    </Layout>
  )
}

export default NextChapter
