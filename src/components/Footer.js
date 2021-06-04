import React, { useContext } from "react"
import styled from "styled-components"
import BackgroundImage from "../images/banner.svg"
import { Card, CardContent } from "@material-ui/core"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"
import CourseSettings from "../../course-settings"

import UHLogo from "../images/uh-logo.png"
import MoocfiLogo from "../images/moocfi-logo-bw.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faFacebook,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import Button from "./Button"
import PagesContext from "../contexes/PagesContext"

const StyledIcon = styled(FontAwesomeIcon)`
  color: black;
  margin-bottom: 1rem;
  margin: 1rem;
`

const SocialContainer = styled.div``

const ContentContainer = styled.div`
  padding: 1rem 0;
`

const GithubContainer = styled.div`
  padding-top: 1rem;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const ButtonContainer = styled.div`
  padding: 1rem 0;
`

const FooterWrapper = styled.footer`
  height: 25rem;
  position: relative;
  a {
    color: #006fe6;
  }
`

const FooterBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #a5c4c6;
  z-index: -50000;
`

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const StyledCard = styled(Card)`
  width: 90%;
  max-width: 800px;
`

const StyledCardContent = styled(CardContent)`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
`

const BrandsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  img {
    height: 6rem;
    width: auto;
    margin: 1rem;
  }
`

const Footer = () => {
  const pagesContextValue = useContext(PagesContext)
  const filePath = pagesContextValue?.current?.filePath
  const { t } = useTranslation("common")

  return (
    <FooterWrapper>
      <FooterBackground />
      <FooterContent>
        <StyledCard>
          <StyledCardContent>
            <BrandsContainer>
              <OutboundLink
                href="https://helsinki.fi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt={t("hy")} src={UHLogo} />
              </OutboundLink>
              <OutboundLink
                href="https://mooc.fi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img alt="MOOC.fi" src={MoocfiLogo} />
              </OutboundLink>
            </BrandsContainer>
          </StyledCardContent>
        </StyledCard>
      </FooterContent>
    </FooterWrapper>
  )
}

export default withSimpleErrorBoundary(Footer)
