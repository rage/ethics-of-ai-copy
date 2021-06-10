import React from "react"
import styled from "styled-components"

import HeroSection from "./Herosection"
import Contributors from "./Contibutors"
import { respond } from "../../_respond"
import H2 from "../Headers/H2"

const Container = styled.div`
  text-align: left;
`

export default (props) => {
  console.log(props)
  return (
    <>
      <HeroSection></HeroSection>
      <Contributors></Contributors>
    </>
  )
}
