import React from "react"
import styled from "styled-components"

import H3 from "../Headers/H3"
import Anna from "../../images/contributors/amr_foto.jpg"
import Jukka from "../../images/contributors/jukka_nurminen.jpg"
import Santeri from "../../images/contributors/santeri_raisanen.jpg"
import Sasu from "../../images/contributors/sasu-tarkoma.jpg"
import Saara from "../../images/contributors/saara.jpg"
import { useTranslation } from "react-i18next"


const contributors = (t) => [
  // {"name": 'Anna-Mari Rusanen', 'url': Anna, "description": t("contributorDescription1")},
  // {"name": 'Jukka K. Nurminen', 'url': Jukka, 'description': t("contributorDescription2")},
  // {"name": 'Santeri Raisanen', 'url': Santeri,'description': t("contributorDescription3")},
  // {"name": 'Sasu Tarkoma', 'url': Sasu,'description': t("contributorDescription4")},
  // {"name": 'Saara Halmetoja', 'url': Saara,'description': t("contributorDescription5")},
  {"name": 'Anna-Mari Rusanen', 'url': Anna, "description": "Dr. Anna-Mari Rusanen is a philosopher of artificial intelligence and cognitive sciences. Her research topics vary from the philosophical foundations of artificial intelligence to the cognitive dynamics of human-machine interaction, and from the ethical issues to the nature of computational explanations. Currently she works as an university lecturer in cognitive science, (Department of Digital Humanities, University of Helsinki), and also as a senior specialist on ethical and societal aspects of AI in Ministry of Finance (Finnish Governance)."},
  {"name": 'Jukka K. Nurminen', 'url': Jukka, 'description': "Jukka K. Nurminen is a Professor at the Department of Computer Science. He is investigating tools and techniques for developing data-intensive software systems. This includes testing of AI systems, technical solutions for ethical decision making as well as software development for new computational platforms like for quantum computers and for highly distributed edge computing."},
  {"name": 'Santeri Raisanen', 'url': Santeri,'description': "Santeri is a PhD student in Science and Technology Studies at the Center for Consumer Society Research. Santeri has a background in Philosophy and Mathematics, and his current research revolves around the technological narratives surrounding data practices and their role in sociotechnical change. Santeri is also part of the editorial team of the Zelda Zine online Magazine."},
  {"name": 'Sasu Tarkoma', 'url': Sasu,'description': "Sasu Tarkoma is Professor and Head of the Department at the Department of Computer Science, University of Helsinki and Director of the Helsinki Center for Data Science (HiDATA). His research combines distributed systems, AI, and data privacy and security in the design and validation of Enablers for digital infrastructure. He is a member of the national AI technology expert group of the Ministry of Finance."},
  {"name": 'Saara Halmetoja', 'url': Saara,'description': "Saara Halmetoja (Cognitive Science, University of Helsinki). Her background is in (neuro)linguistics, user experience design, and communications. Her research interests intersect language and the mind. As a strong advocate for open and interdisciplinary science, she values making research more accessible through visualizations and co-design. At Aalto University Digi Platform, she has coordinated technology-related dissemination events and science-arts collaborations such as Connecting the Dots, an exhibition about AI."},
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

export default (props) => {
  const { t } = useTranslation("common")

  return (
    <>
        <Wrapper>
        {/* <h3>{t("aboutSubtitle1")}</h3> */}
        <h3>Responsible Teacher</h3>
          <div>{contributors(t).slice(0,2).map(c =>(
              <div>

              <Grid>
                <img src={c.url} alt={c.name} width="223px"/>
                <div>
                    <h5>{c.name}</h5>
                    <span>{c.description}</span>
                </div>
              </Grid>
              </div>
          ))}</div>

        {/* <h3>{t("aboutSubtitle2")}</h3> */}
        <h3>Other main contributors</h3>
          <div>{contributors(t).slice(2,5).map(o =>(
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
}
