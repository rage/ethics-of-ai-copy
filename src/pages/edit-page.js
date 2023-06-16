import React from "react"
import Helmet from "react-helmet"
import Layout from "../templates/Layout"
import Container from "../components/Container"
import { withLoginStateContext } from "../contexes/LoginStateContext"
import { Button, Typography } from "@material-ui/core"
import CourseSettings from "../../course-settings"
import { useTranslation } from "gatsby-plugin-react-i18next"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const EditPage = () => {
  const { t } = useTranslation("common")

  const urlEnd =
    typeof window !== `undefined`
      ? window.location.search.substr(1).split("&")
      : null
  var qs = (function (a) {
    if (a === "" || a === null) return {}
    var b = {}
    for (var i = 0; i < a.length; ++i) {
      var p = a[i].split("=", 2)
      if (p.length === 1) b[p[0]] = ""
      else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "))
    }
    return b
  })(urlEnd)

  const path = qs.path

  var editPath = CourseSettings.githubUrl.concat("/edit/master", path)

  var loginThenEditPath =
    "https://github.com/join?return_to=" + editPath + "&source=login"
  return (
    <Layout>
      <Container>
        <Helmet title={t("editPageTitle")} />

        <Typography variant="h3" component="h1">
          {t("editPageTitle")}
        </Typography>
        <br />
        <p>{t("editPage1")}</p>
        <p>
          {t("editPage2")}{" "}
          <a href={loginThenEditPath} target="_blank" rel="noopener noreferrer">
            {t("editPage3")}
          </a>
        </p>

        <p>
          {t("editPage4")}{" "}
          <a
            href={CourseSettings.githubUrl.concat("/pulls")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("editPage3")}
          </a>{" "}
          {t("editPage5")}
        </p>

        <center>
          <a href={editPath} target="_blank" rel="noopener noreferrer">
            <Button color="primary" variant="contained">
              {t("editPageButtonText")}
              {path}
            </Button>
          </a>
        </center>

        <br />
        <Typography variant="h4" component="h1">
          {t("editPageSecondHeader")}
        </Typography>
        <ol>
          <li>{t("editPageList1")}</li>
          <li>{t("editPageList2")}</li>
          <li>{t("editPageList3")}</li>
          <li>{t("editPageList4")}</li>
          <li>{t("editPageList5")}</li>
          <li>{t("editPageList6")}</li>
        </ol>

        <p>{t("editPage6")}</p>
      </Container>
    </Layout>
  )
}

export default withSimpleErrorBoundary(withLoginStateContext(EditPage))

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
