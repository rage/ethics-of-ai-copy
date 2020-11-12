import React from "react"
import styled from "styled-components"
import chap2 from "../images/chap-2.svg"
import accountability from "../images/accountability.svg"
import chap4 from "../images/chap-4.svg"
import chap5 from "../images/chap-5.svg"
import chap6 from "../images/chap-6.svg"

const Wrapper = styled.div``

const BigFive = () => {
  return (
    <div>
      <img src={chap2} alt="big five chap-2" style={{}}></img>
      <img
        src={accountability}
        alt="big five accountability"
        style={{ width: "200px", marginLeft: "3em" }}
      ></img>
      <img
        src={chap4}
        alt="big five chap-4"
        style={{ marginLeft: "3em" }}
      ></img>
      <img
        src={chap5}
        alt="big five chap-5"
        style={{ marginLeft: "3em" }}
      ></img>
      <img
        src={chap6}
        alt="big five chap-6"
        style={{ marginLeft: "3em" }}
      ></img>
    </div>
  )
}

export default BigFive
