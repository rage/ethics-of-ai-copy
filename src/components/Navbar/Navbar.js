import React, { useState } from "react"
import { Link } from "gatsby"
import { MenuItems } from "./MenuItems"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBullseye } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import Hamburger from "../../components/Hamburger"
import LoginControls from "../LoginControls"
import "./Navbar.css"

const StyledIcon = styled(FontAwesomeIcon)`
  margin-left: 0.5rem;
  font-size: 1.6rem;
  color: #333;
`

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledLogin = styled.div`
  margin-left: 80px;
`

export default function Navbar(props) {
  const [clicked, setClicked] = useState(false)

  return (
    <div className="fixedPosition">
      <nav className="NavbarItems">
        <TopBarWrapper>
          <h1 className="navbar-logo">
            <Link to="/">
              <StyledIcon icon={faBullseye}> </StyledIcon>
            </Link>
          </h1>

          <div className="menu-icon" onClick={() => setClicked(!clicked)}>
            <Hamburger> </Hamburger>
          </div>
          <StyledLogin>
            <LoginControls />
          </StyledLogin>
        </TopBarWrapper>
      </nav>
    </div>
  )
}
