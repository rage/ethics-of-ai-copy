import React from "react"
import styled from "styled-components"

import chapIcon from "../../images/chap-1-bigmap.svg"
import techIcon from "../../images/tech-icon.svg"
import philIcon from "../../images/phil-icon.svg"
import bgIcon from "../../images/bg-icon.svg"
import ethicsIcon from "../../images/ethics-icon.svg"

const chooseIcon = {
  chap: chapIcon,
  tech: techIcon,
  phil: philIcon,
  bg: bgIcon,
  ethics: ethicsIcon,
  undefined: chapIcon,
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
  console.log(props)
  return <ImageWrapper src={chooseIcon[props.icon]} alt="icon" />
}

export default ImageImporter
