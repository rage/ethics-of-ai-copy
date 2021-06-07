import React from "react"
import styled from "styled-components"

import { respond } from "../../_respond"
import H2 from "../Headers/H2"
import Sponsor1 from "../../assets/hidata.svg"
import Sponsor2 from "../../assets/mayor-of-london.svg"
import Sponsor3 from "../../assets/helsinki.svg"
import Sponsor4 from "../../assets/gemeente01.svg"
import Sponsor5 from "../../assets/ministry-of-finance.svg"
import Sponsor6 from "../../assets/fcai.svg"
import UHLogo from "../../images/uh-logo.png"
import MoocfiLogo from "../../images/moocfi-logo-bw.png"
import { useTranslation } from "react-i18next"

const sponsors = (hyAlt) => [
  <Sponsor1 width="200px" />,
  <Sponsor2 width="200px" />,
  <Sponsor3 width="200px" />,
  <img alt={hyAlt} src={UHLogo} width="260px" />,
  <img alt="MOOC.fi" src={MoocfiLogo} width="260px" />,
  <Sponsor4 width="180px" />,
  <Sponsor5 width="160px" />,
  <Sponsor6 width="140px" />,
]

const Container = styled.div`
  margin: 6rem 0;
  padding: 2rem 6rem;
  height: 60%;

  span {
    font-size: 1.2rem;
  }

  h2 {
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    font-size: clamp(28px, 4vw, 40px);
    color: #333;
  }

  ${respond.mobile`
  width: 100%;
  margin: 0;
  padding: 0;
  `}

  ${respond.xs`
  padding:0
`}

${respond.sm`
  width: 100%;
  padding: 0;
`}
`
const SponsorBox = styled.div`
  padding: 2rem;
  width: 60%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3rem;
  margin: 1rem auto;

  ${respond.mobile`
  grid-template-columns: 1fr;
  width: 100%;
  padding: 0;
  `}

  ${respond.xs`
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  padding:0
`}

${respond.sm`
grid-template-columns: repeat(2, 1fr);
  width: 100%;
  padding: 0;
`}

${respond.lg`
padding: 2rem;
width: 70%;
grid-template-columns: repeat(4, 1fr);
`}

  img {
    display: flex;
    align-self: center;
  }
`
const SponsorLogo = styled.div`
  height: 130px;
  width: 100%;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
`

export default (props) => {
  const { t, ready } = useTranslation("common")

  return (
    ready === true ? (
      <Container>
      <h2> {t("partnersTitle")} </h2> <span> {t("partnersInfo")}</span>
      <SponsorBox>
        {Object.values(sponsors(t("hy"))).map((sponsor) => (
          <SponsorLogo>{sponsor}</SponsorLogo>
        ))}
      </SponsorBox>
    </Container>
    ) : (
      <Container>
      <p> Loading... </p>
      <SponsorBox>
        {Object.values(sponsors("Loading...")).map((sponsor) => (
          <SponsorLogo>{sponsor}</SponsorLogo>
        ))}
      </SponsorBox>
    </Container>
    )
  )
}
