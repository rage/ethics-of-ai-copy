import React from "react"
import Layout from "../../templates/Layout"
import Container from "../../components/Container"
import { withLoginStateContext } from "../../contexes/LoginStateContext"
import Helmet from "react-helmet"
import { useTranslation } from "gatsby-plugin-react-i18next"

const NotFoundPage = () => {
  const { t } = useTranslation("common")

  return (
    <Layout>
      <Container>
        <Helmet title="404" />
        <h1>{t("notFoundTitle")}</h1>
        <p>{t("notFoundInfo")}</p>
      </Container>
    </Layout>
  )
}

export default withLoginStateContext(NotFoundPage)

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
