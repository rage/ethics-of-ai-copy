import React from "react"
import styled from "styled-components"

import H3 from "../Headers/H3"
import Anna from "../../images/contributors/amr_foto.jpg"
import Jukka from "../../images/contributors/jukka_nurminen.jpg"
import Santeri from "../../images/contributors/santeri_raisanen.jpg"
import Sasu from "../../images/contributors/sasu-tarkoma.jpg"
import Saara from "../../images/contributors/saara.jpg"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const contributors = (t) => [
  {
    name: "Anna-Mari Rusanen",
    url: Anna,
    description: t("contributorDescription1"),
  },
  {
    name: "Jukka K. Nurminen",
    url: Jukka,
    description: t("contributorDescription2"),
  },
  {
    name: "Santeri Raisanen",
    url: Santeri,
    description: t("contributorDescription3"),
  },
  {
    name: "Sasu Tarkoma",
    url: Sasu,
    description: t("contributorDescription4"),
  },
  {
    name: "Saara Halmetoja",
    url: Saara,
    description: t("contributorDescription5"),
  },
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
    font-family: "Montserrat";
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
        <h3>{t("aboutSubtitle1")}</h3>
        <div>
          {contributors(t)
            .slice(0, 2)
            .map((c) => (
              <div>
                <Grid>
                  <img src={c.url} alt={c.name} width="223px" />
                  <div>
                    <h5>{c.name}</h5>
                    <span>{c.description}</span>
                  </div>
                </Grid>
              </div>
            ))}
        </div>

        <h3>{t("aboutSubtitle2")}</h3>
        <div>
          {contributors(t)
            .slice(2, 5)
            .map((o) => (
              <div>
                <Grid>
                  <img src={o.url} alt={o.name} width="223px" />
                  <div>
                    <h5>{o.name}</h5>
                    <span>{o.description}</span>
                  </div>
                </Grid>
              </div>
            ))}
        </div>

        <h3>{t("aboutSubtitle3")}</h3>
        <p>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
          >
            <img
              alt="Creative Commons License"
              style={{"border-width": 0}}
              src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png"
            />
          </a>
          <br />
          {t("licenceTitle")}
          {" "}
          <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>
          {" "}
          {t("licenceInfo")}
        </p>

        <h3>{t("licenceTechTitle")}</h3>
        <p>
          {t("licenceMoocCenter1")}
          {" "}
          <OutboundLink
            href="https://mooc.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("licenceMoocCenter2")}
          </OutboundLink>
          {" "}
          {t("licenceMoocCenter3")}
          <br />
          <br />
          {t("licenceMoocCenterPersons")}
          <ul>
            <li><OutboundLink href="https://github.com/nygrenh" target="_blank" rel="noopener noreferrer">Henrik Nygren</OutboundLink></li>
            <li><OutboundLink href="https://github.com/redande" target="_blank" rel="noopener noreferrer">Antti Leinonen</OutboundLink></li>
            <li><OutboundLink href="https://github.com/george-misan" target="_blank" rel="noopener noreferrer">George Misan Eyoyibo</OutboundLink></li>
            <li><OutboundLink href="https://github.com/ipegii" target="_blank" rel="noopener noreferrer">Pekka Mäki-Mikola</OutboundLink></li>
          </ul>
        </p>
      </Wrapper>{" "}
    </>
  )
}
