import React from "react"
import styled from "styled-components"

import H3 from "../Headers/H3"
import Anna from "../../images/contributors/amr_foto.jpg"
import Jukka from "../../images/contributors/jukka_nurminen.jpg"
import Santeri from "../../images/contributors/santeri_raisanen.jpg"
import Sasu from "../../images/contributors/sasu-tarkoma.jpg"
import Saara from "../../images/contributors/saara.jpg"
import { withTranslation } from "react-i18next"


const contributors = ({ t }) => [
  {"name": 'Anna-Mari Rusanen', 'url': Anna, "description": t("contributorDescription1")},
  {"name": 'Jukka K. Nurminen', 'url': Jukka, 'description': t("contributorDescription2")},
  {"name": 'Santeri Raisanen', 'url': Santeri,'description': t("contributorDescription3")},
  {"name": 'Sasu Tarkoma', 'url': Sasu,'description': t("contributorDescription4")},
  {"name": 'Saara Halmetoja', 'url': Saara,'description': t("contributorDescription5")},
]

const Wrapper = styled.div`
  margin: 4rem 10rem;
  text-align: left;

  h3 {
      padding: 2rem 0 1rem 0;
      font-weight: 600;
      font-size: 30px;
      font-family: Montserrat;
  }
`

const Grid = styled.div`
display: grid;
grid-template-columns: auto 1fr;
grid-gap: 3rem;

span {
    font-size: 1.125rem;
    line-height: 1.68;
}

h5 {
    color: #333;
    font-weight: 600;
    font-family: 'Montserrat';
    margin-bottom: 0.4rem;
}
`

const CourseGridText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  color: #333;
  padding: 2rem;

  H4 {
    margin-bottom: 0.5rem;
  }

  span {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.8;
    color: #333;
    opacity: 0.9;
  }
`

export default withTranslation("common")((props) => {
  return (
    <>
        <Wrapper>
        <h3>{props.t("aboutSubtitle1")}</h3>
          <div>{contributors(props).slice(0,2).map(t =>(
              <div>

              <Grid>
                <img src={t.url} alt={t.name} width="223px"/>
                <div>
                    <h5>{t.name}</h5>
                    <span>{t.description}</span>
                </div>
              </Grid>
              </div>
          ))}</div>

        <h3>{props.t("aboutSubtitle2")}</h3>
          <div>{contributors(props).slice(2,5).map(o =>(
            <div>
              <Grid>
                <img src={o.url} alt={o.name} width="223px"/>
                <div>
                    <h5>{o.name}</h5>
                    <span>{o.description}</span>
                </div>
              </Grid>
            </div>
          ))}</div>
        </Wrapper>{" "}
    </>
  )
})
