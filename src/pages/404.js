import React from "react"
import Layout from "../templates/Layout"
import Container from "../components/Container"
import { withLoginStateContext } from "../contexes/LoginStateContext"
import Helmet from "react-helmet"
import { withTranslation } from "react-i18next"

const NotFoundPage = ({ t }) => (
  <Layout>
    <Container>
      <Helmet title="404" />
      <h1>{t("notFoundTitle")}</h1>
      <p>{t("notFoundInfo")}</p>
    </Container>
  </Layout>
)

export default withTranslation("common")(withLoginStateContext(NotFoundPage))
