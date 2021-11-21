import React, { Fragment, useContext, useEffect, useState } from "react"
import "../i18n"
import Helmet from "react-helmet"
//import Sidebar from "../components/Sidebar"
import ContentArea from "../components/ContentArea"
//import TopBar from "../components/TopBar"
import NavBar from "../components/Navbar/Navbar"
import { StaticQuery, graphql } from "gatsby"
import * as store from "store"
import Pheromones from "../util/pheromones"
import styled, { ThemeProvider } from "styled-components"
import courseMetaData from "../../course-metadata.json"
import "./reboot.css"
import "./theme.css"
import "./remark.css"
import "focus-visible"
import "typeface-open-sans"
import "typeface-roboto-slab"
import "typeface-roboto-mono"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { config as fontAwesomeConfig } from "@fortawesome/fontawesome-svg-core"
import {
  canDoResearch,
  accessToken,
  getCachedUserDetails,
} from "../services/moocfi"
import Footer from "../components/Footer"
//import { useSiteMetadata } from "../hooks/use-site-metadata"
import { redTheme, defaultTheme, indigoTheme } from "../theme"
import PointsBalloon from "../components/PointsBalloon"
import {
  MEDIUM_SIDEBAR_WIDTH,
  LARGE_SIDEBAR_WIDTH,
  MEDIUM_LARGE_BREAKPOINT,
  SMALL_MEDIUM_BREAKPOINT,
} from "../util/constants"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import { useI18next } from "gatsby-plugin-react-i18next"
import Notice from "../partials/Notice"
import LoginStateContext, {
  withLoginStateContext,
} from "../contexes/LoginStateContext"

fontAwesomeConfig.autoAddCss = false

const layoutQuery = graphql`
  query {
    title: site {
      siteMetadata {
        title
        theme
      }
    }
  }
`

const themeArray = {
  redTheme: redTheme,
  indigoTheme: indigoTheme,
  defaultTheme: defaultTheme,
}

const Wrapper = styled.div`
  ${(props) =>
    props.mobileMenuOpen &&
    `
    height: 100vh;
    overflow: hidden;
  `}
`

const SidebarPush = styled.div`
  @media only screen and (min-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    margin-left: ${LARGE_SIDEBAR_WIDTH};
  }
  @media only screen and (max-width: ${MEDIUM_LARGE_BREAKPOINT}) {
    margin-left: ${MEDIUM_SIDEBAR_WIDTH};
  }
  @media only screen and (max-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    margin-left: 0;
  }
`

const NoticeContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: center;
  margin: auto;
  background: #ffffff;

  a {
    color: #003d9a;
  }
`

const Layout = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language } = useI18next()
  const [userLanguage, setUserLanguage] = useState(undefined)
  const loginStateContext = useContext(LoginStateContext)

  useEffect(() => {
    if (loginStateContext.loggedIn) {
      const fetchUserLanguage = async () => {
        let userDetails = await getCachedUserDetails()
        setUserLanguage(userDetails?.extra_fields?.language)
      }
      fetchUserLanguage()
    }
  }, [])

  const toggleMobileMenu = () => {
    const prev = mobileMenuOpen
    setMobileMenuOpen(!prev)
  }

  const langPrefix = userLanguage === "en" ? "" : `/${userLanguage}`

  const inProfile =
    typeof window === "undefined"
      ? false
      : window.location.href.endsWith("/profile") ||
        window.location.href.endsWith("/profile/")

  return (
    <Fragment>
      {" "}
      <StaticQuery
        query={layoutQuery}
        render={(data) => {
          const siteTitle = data.title.siteMetadata.title
          const derivedTheme = data.title.siteMetadata.theme
          const theme = themeArray[derivedTheme] || defaultTheme
          /*             let selectedTheme
          for (const [key, value] of Object.entries(themeArray)) {
            if (key === derivedTheme) {
              selectedTheme = value
            }
          } */

          return (
            <ThemeProvider theme={theme}>
              <Wrapper mobileMenuOpen={mobileMenuOpen}>
                <Helmet
                  defaultTitle={siteTitle}
                  titleTemplate={`%s - ${siteTitle}`}
                  // meta={[
                  //   {
                  //     name: "description",
                  //     content:
                  //       "Helsingin yliopiston kaikille avoin ja ilmainen ohjelmoinnin perusteet opettava verkkokurssi. Kurssilla perehdytään nykyaikaisen ohjelmoinnin perusideoihin sekä ohjelmoinnissa käytettävien työvälineiden lisäksi algoritmien laatimiseen. Kurssille osallistuminen ei vaadi ennakkotietoja ohjelmoinnista.",
                  //   },
                  //   {
                  //     name: "keywords",
                  //     content:
                  //       "ohjelmointi, java, programming, CS1, MOOC, 2019, ohjelmointikurssi, avoin, ilmainen, helsingin yliopisto",
                  //   },
                  // ]}
                />
                <NavBar />
                {loginStateContext.loggedIn &&
                  language &&
                  userLanguage &&
                  language !== userLanguage &&
                  !inProfile && (
                    <NoticeContainer>
                      <Notice>
                        You are viewing a different language version of the
                        course than what you selected in your profile settings.
                        Assignment answers are tied to the language version, so
                        to continue with the assignments switch back to the{" "}
                        {userLanguage === "en"
                          ? "English"
                          : userLanguage === "sv"
                          ? "Swedish"
                          : "Finnish"}{" "}
                        version of the course, or change the language in your{" "}
                        <a href={`${langPrefix}/profile`}>profile</a>.
                      </Notice>
                    </NoticeContainer>
                  )}
                <ContentArea mobileMenuOpen={mobileMenuOpen}>
                  {children}
                </ContentArea>
                {/* <PointsBalloon /> */}
                <Footer />
              </Wrapper>
            </ThemeProvider>
          )
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseMetaData) }}
      />
    </Fragment>
  )
}

export default withSimpleErrorBoundary(withLoginStateContext(Layout))
