import React from "react"
import styled from "styled-components"

import Anna from "../../images/contributors/amr_foto.jpg"
import Jukka from "../../images/contributors/jukka_nurminen.jpg"
import Santeri from "../../images/contributors/santeri_raisanen.jpg"
import Sasu from "../../images/contributors/sasu-tarkoma.jpg"


const contributors = [
  {"name": 'Dr.Anna-Mari', 'url': Anna, "description": 'Dr. Anna-Mari Rusanen is a philosopher of artificial intelligence and cognitive sciences. Her research topics vary from the philosophical foundations of artificial intelligence to the cognitive dynamics of human-machine interaction, and from the ethical issues to the nature of computational explanations. Currently she works as an university lecturer in cognitive science, (Department of Digital Humanities, University of Helsinki), and also as a senior specialist on ethical and societal aspects of AI in Ministry of Finance (Finnish Governance).'},
  {"name": 'Jukka K. Nurminen', 'url': Jukka, 'description': 'Jukka K. Nurminen is a Professor at the Department of Computer Science. He is investigating tools and techniques for developing data-intensive software systems. This includes testing of AI systems, technical solutions for ethical decision making as well as software development for new computational platforms like for quantum computers and for highly distributed edge computing.'},
  {"name": 'Santeri Raisanen', 'url': Santeri,'description': 'Santeri is a PhD student in Science and Technology Studies at the Center for Consumer Society Research. Santeri has a background in Philosophy and Mathematics, and his current research revolves around the technological narratives surrounding data practices and their role in sociotechnical change. Santeri is also part of the editorial team of the Zelda Zine online Magazine.'},
  {"name": 'Sasu Tarkoma', 'url': Sasu,'description': 'Sasu Tarkoma is Professor and Head of the Department at the Department of Computer Science, University of Helsinki and Director of the Helsinki Center for Data Science (HiDATA). His research combines distributed systems, AI, and data privacy and security in the design and validation of Enablers for digital infrastructure. He is a member of the national AI technology expert group of the Ministry of Finance.'},
  {"name": 'Saara Halmetoja', 'url': Sasu,'description': 'Saara Halmetoja (Cognitive Science, University of Helsinki). Her background is in (neuro)linguistics, user experience design, and communications. Her research interests intersect language and the mind. As a strong advocate for open and interdisciplinary science, she values making research more accessible through visualizations and co-design. At Aalto University Digi Platform, she has coordinated technology-related dissemination events and science-arts collaborations such as Connecting the Dots, an exhibition about AI.'},
]

const Wrapper = styled.div`
  margin: 4rem 10rem;
  text-align: left;
`

const CourseGridSVG = styled.div`
  width: 100%;
  height: 60%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 60px;
  background: #f6ebe8;
`

const Grid = styled.div`
display: grid;
grid-template-columns: 0.5fr 1fr;
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
  return (
    <>
        <Wrapper>
        <h2>Responsible Teacher</h2>
          <div>{contributors.slice(0,2).map(t =>(
              <div>

              <Grid>
                <img src={t.url} alt={t.name} width="223px"/>
                <div>
                    <h4>{t.name}</h4>
                    <span>{t.description}</span>
                </div>
              </Grid>
              </div>
          ))}</div>

        <h2>Other main contributors</h2>
          <div>{contributors.slice(2,5).map(o =>(
            <div>
              <Grid>
                <img src={o.url} alt={o.name} />
                <div>
                    <h4>{o.name}</h4>
                    <span>{o.description}</span>
                </div>
              </Grid>
            </div>
          ))}</div>
          <CourseGridText> These are the members of the super team :)</CourseGridText>{" "}
        </Wrapper>{" "}
    </>
  )
}
