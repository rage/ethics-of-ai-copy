import React, { useState, useCallback } from "react"
import { HamburgerCollapse } from "react-animated-burgers"

const Hamburger = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    [],
  )

  return (
    <HamburgerCollapse
      barColor="#333"
      buttonWidth={35}
      {...{ isActive, toggleButton }}
    />
  )
}

export default Hamburger
