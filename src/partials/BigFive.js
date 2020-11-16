import React from "react"
import styled from "styled-components"
import chap2 from "../images/chap-2.svg"
import accountability from "../images/accountability.svg"
import chap4 from "../images/chap-4.svg"
import chap5 from "../images/chap-5.svg"
import chap6 from "../images/chap-6.svg"

const Wrapper = styled.div`
  background-color: rgba(231, 204, 235, 0.5);
  padding-top: 5em;
  padding-bottom: 5em;
  width: 100vw;
  left: calc(-50vw + 50%);
  position: relative;
`

const BigFive = () => {
  return (
    <Wrapper>
      <div style={{ marginLeft: "3em", marginRight: "10em" }}>
        <img
          src={chap2}
          alt="big five chap-2"
          style={{ marginLeft: "7em", width: "150px" }}
        ></img>
        <img
          src={accountability}
          alt="big five accountability"
          style={{ marginLeft: "7em", width: "150px" }}
        ></img>
        <img
          src={chap4}
          alt="big five chap-4"
          style={{ marginLeft: "7em", width: "150px" }}
        ></img>
        <img
          src={chap5}
          alt="big five chap-5"
          style={{ marginLeft: "7em", width: "150px" }}
        ></img>
        <img
          src={chap6}
          alt="big five chap-6"
          style={{ marginLeft: "7em", width: "150px" }}
        ></img>
      </div>
    </Wrapper>
  )
}

export default BigFive
