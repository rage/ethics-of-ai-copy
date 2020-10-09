import React from "react"
import styled from "styled-components"
import { useTrail, animated } from "react-spring"
import { respond } from "../../_respond"
import H3 from "../Headers/H3"
import ChartIcon from "../../assets/chart-icon.svg"
import PresenterIcon from "../../assets/presenter-icon.svg"
import WeighIcon from "../../assets/weighbalance-icon.svg"
import TeaserCard from "./TeaserCard"

const obj = [
  {
    icon: <ChartIcon width="48px" height="48px" />,
    title: "Question",
    text: "Kesällä 2020 kurssi järjestetään ensimmäistä?",
  },
  {
    icon: <PresenterIcon width="48px" height="48px" />,
    title: "Question",
    text: "Kesällä 2020 kurssi järjestetään ensimmäistä?",
  },
  {
    icon: <WeighIcon width="48px" height="48px" />,
    title: "Question",
    text: "Kesällä 2020 kurssi järjestetään ensimmäistä?",
  },
]

//TO-DO: Make Grid responsive without Media queries
//TO-DO: + More Breakpoints
const Wrapper = styled.div`
  margin: 6rem 0;

  span {
    display: block;
    padding: 0.8rem 0;
    background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
`

const TeaserContainer = styled.div`
  padding: 2rem 0.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4rem;
  justify-content: center;

  ${respond.xs`
  grid-gap: 2rem;
  padding: 0 0.5rem;
    grid-template-columns: minmax(20rem,100%);
  `}

  ${respond.sm`

    width: 100%;
    padding: 0;
     grid-template-columns: repeat(3, minmax(15rem, 20rem));
  `}

  ${respond.md`

  padding: 2rem 2rem;
  grid-template-columns: repeat(3, 20rem);
  `}

  ${respond.lg`
  padding: 2rem 0;
  grid-template-columns: repeat(3, 24rem);
  grid-gap: 6rem;
  `}
`

const TeaserQuestion = (props) => {
  const trail = useTrail(obj.length, {
    from: {
      marginTop: -20,
      opacity: 0,
      transform: "translate3d(0, -40px, 0)",
    },
    to: {
      marginTop: 20,
      opacity: 1,
      transform: "translate3d(0, 0, 0)",
    },
  })

  return (
    <Wrapper>
      <span> {props.subtitle} </span> <H3> {props.title} </H3>{" "}
      <TeaserContainer>
        {" "}
        {trail.map((props, index) => {
          return (
            <animated.div key={obj[index]} style={props}>
              <TeaserCard
                index={index}
                icon={obj[index].icon}
                title={obj[index].title}
                text={obj[index].text}
              />{" "}
            </animated.div>
          )
        })}{" "}
      </TeaserContainer>{" "}
    </Wrapper>
  )
}

export default TeaserQuestion
