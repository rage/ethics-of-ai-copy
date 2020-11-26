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



const sponsors = {
  1: <Sponsor1 width="250px" />,
  2: <Sponsor2 width="250px" />,
  3: <Sponsor3 width="280px" />,
  4: <Sponsor4 width="250px" />,
  5: <Sponsor5 width="250px" />,
  6: <Sponsor6 width="200px" />,
}

const Container = styled.div`
  margin: 6rem 0;
  padding: 2rem 6rem;
  height: 60%;

  span {
    font-size: 1.2rem;
  }
`
const SponsorBox = styled.div`
  padding: 2rem;
  width: 70%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 1rem auto;

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
`

export default (props) => {
  return (
    <Container>
      <H2> Partners </H2> <span> Official partners of this course</span>
      <SponsorBox>
        <img alt="Helsingin yliopisto" src={UHLogo} />
        <img alt="MOOC.fi" src={MoocfiLogo} />
        {Object.values(sponsors).map((sponsor) => (
          <SponsorLogo>{sponsor}</SponsorLogo>
        ))}
      </SponsorBox>
    </Container>
  )
}
