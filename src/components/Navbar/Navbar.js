import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullseye } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"

import Hamburger from "../../components/Hamburger"
import LoginControls from "../LoginControls"
import { useTranslation } from "gatsby-plugin-react-i18next"
/* import NavGrid from "./NavGrid" */
import "./Navbar.css"

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #333;
`

export default function Navbar(props) {
  const [clicked, setClicked] = useState(false)
  const { t } = useTranslation("navbar")

  return (
    <div className="fixedPosition">
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <Link to="/" aria-label={t("label1")} role="button">
            {" "}
            <StyledIcon icon={faBullseye} aria-hidden="true">
              {" "}
            </StyledIcon>
          </Link>
        </h1>{" "}
        <div
          className="menu-icon"
          onClick={() => setClicked(!clicked)}
          role="button"
          aria-label={t("label2")}
        >
          <Hamburger> </Hamburger>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"} role="list">
          <li>
            <a
              className="nav-links"
              href="/faq"
              aria-label={t("label3")}
              role="button"
            >
              {t("gridItem2")}
            </a>
          </li>
          <LoginControls />
          <span className="copyright">
            {" "}
            © 2020 Graduate Economic, <br />
            Inc.All Rights Reserved.{" "}
          </span>{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  )
}
