import React from "react"
import Helmet from "react-helmet"
import Layout from "../../templates/Layout"
import Container from "../../components/Container"
import { withLoginStateContext } from "../../contexes/LoginStateContext"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Credits = () => {
  const { t } = useTranslation("common")

  return (
    <Layout>
      <Container>
        <Helmet title={t("credits")} />
        <h1>{t("credits")}</h1>
        <p>
          {t("makers")}{" "}
          <a
            href="https://www.helsinki.fi/en/researchgroups/data-driven-education"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("rage")}
          </a>
          .
        </p>
        <h2>{t("material")}</h2>

        <p>{t("contentMakers")}</p>
        <p>
          {t("licenceTitle")}{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons BY-NC-SA 4.0
          </a>{" "}
          {t("licenceInfo")}
        </p>

        <h2>{t("licenceTechTitle")}</h2>

        <p>
          {t("licenceTechMakers")}{" "}
          <a
            href="https://github.com/nygrenh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Henrik Nygren
          </a>{" "}
          {t("and")}{" "}
          <a
            href="https://github.com/redande"
            target="_blank"
            rel="noopener noreferrer"
          >
            Antti Leinonen
          </a>
          {t("licenceRage1")}{" "}
          <a
            href="https://www.helsinki.fi/en/researchgroups/data-driven-education"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("licenceRage2")}
          </a>{" "}
          {t("licenceTMC1")}
          <a
            href="https://tmc.mooc.fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test My Code
          </a>
          {t("licenceTMC2")}
        </p>
      </Container>
    </Layout>
  )
}

export default withLoginStateContext(Credits)

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
