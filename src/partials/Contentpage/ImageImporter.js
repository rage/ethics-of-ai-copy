import React from "react"
import styled from "styled-components"

import chap1 from "../../images/chap-1-rev.svg"
import techIcon from "../../images/tech-icon.svg"
import philIcon from "../../images/phil-icon.svg"
import bgIcon from "../../images/bg-icon.svg"
import ethicsIcon from "../../images/ethics-icon.svg"
import chap2 from "../../images/chap-2.svg"
import chap3 from "../../images/chap-3.svg"
import chap4 from "../../images/chap-4.svg"
import chap5 from "../../images/chap-5.svg"
import chap6 from "../../images/chap-6.svg"
import chap7 from "../../images/chap-7.svg"

const chooseIcon = {
  chap1: chap1,
  chap2: chap2,
  chap3: chap3,
  chap4: chap4,
  chap5: chap5,
  chap6: chap6,
  chap7: chap7,
  tech: techIcon,
  phil: philIcon,
  bg: bgIcon,
  ethics: ethicsIcon,
  undefined: chap1,
}

const ImageWrapper = styled.img`
  height: auto;
  padding-bottom: 7rem;
  padding-right: 6rem;
  flex: 0.4;
  @media (min-width: 1px) {
    padding-right: 0rem;
    max-width: 30px;
  }
  @media (min-width: 250px) {
    padding-right: 0rem;
    max-width: 100px;
  }
  @media (min-width: 530px) {
    padding-right: 0rem;
    max-width: 200px;
  }
  @media (min-width: 700px) {
    padding-right: 1rem;
    max-width: 350px;
  }
  @media (min-width: 1000px) {
    max-width: 500px;
    padding-right: 3rem;
  }
  @media (min-width: 1500px) {
    max-width: 800px;
    padding-right: 20rem;
  }
`

const ImageImporter = (props) => {
  return <ImageWrapper src={chooseIcon[props.icon]} alt="icon" />
}

export default ImageImporter
