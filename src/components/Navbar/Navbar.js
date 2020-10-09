import React, { useState } from "react"
import { Link } from "gatsby"
import { MenuItems } from "./MenuItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullseye } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Hamburger from "../../components/Hamburger"
import "./Navbar.css"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  font-size: 1.6rem;
  color: #333;
`

export default function Navbar(props) {
  const [clicked, setClicked] = useState(false)

  return (
    <div classNamae="fixedPosition">
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <Link to="/homepage">
            {" "}
            <StyledIcon icon={faBullseye}> </StyledIcon>
          </Link>
        </h1>{" "}
        <div className="menu-icon" onClick={() => setClicked(!clicked)}>
          <Hamburger> </Hamburger>{" "}
        </div>{" "}
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {" "}
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {" "}
                  {item.title}{" "}
                </a>{" "}
              </li>
            )
          })}{" "}
          <span>
            {" "}
            © 2020 Graduate Economic, <br />
            Inc.All Rights Reserved.{" "}
          </span>{" "}
        </ul>{" "}
      </nav>{" "}
    </div>
  )
}
