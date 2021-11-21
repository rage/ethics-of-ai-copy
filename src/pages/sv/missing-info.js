import React, { useContext } from "react"

import Layout from "../../templates/Layout"
import CourseOptionsEditor from "../../components/user/CourseOptionsEditor"
import LoginStateContext, {
  withLoginStateContext,
} from "../../contexes/LoginStateContext"
import Container from "../../components/Container"
import { useI18next, withTranslation } from "gatsby-plugin-react-i18next"

const MissingInfo = () => {
  const { navigate, t } = useI18next()
  const loginStateContext = useContext(LoginStateContext)

  const onStepComplete = () => {
    if (typeof window !== "undefined") {
      window.history.back()
      return
    }
    navigate("/")
  }

  if (!loginStateContext.loggedIn) {
    if (typeof window !== "undefined") {
      navigate("/sign-in")
    }
    return <div>{t("redirecting")}</div>
  }
  return (
    <Layout>
      <Container>
        <CourseOptionsEditor
          courseVariant="nodl"
          onComplete={onStepComplete}
        />
      </Container>
    </Layout>
  )
}


export default withTranslation("common")(withLoginStateContext(MissingInfo))

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
