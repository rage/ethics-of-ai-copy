import React, { useState, useRef, useEffect } from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"
import OutlinedInput from "@material-ui/core/OutlinedInput"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import InputBase from "@material-ui/core/InputBase"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { useTranslation } from "gatsby-plugin-react-i18next"
import FinnishFlag from "../../assets/fi_flag.svg"
import SwedishFlag from "../../assets/sv_flag.svg"
import UKFlag from "../../assets/uk_flag.svg"

const StyledFormControl = styled(FormControl)`
  width: 100%;
  display: flex;
`

const StyledInputBase = styled(InputBase)`
  padding: 0 0 0 0.5rem;
  border-radius: 0.2rem;
  background: #E7E7E7;
`

const DropdownMenu = ({ selectedVariant, setSelectedVariant, navBar }) => {
  const [labelWidth, setLabelWidth] = useState(0)
  const inputLabelRef = useRef(null)
  const { t } = useTranslation("user")

  const inNavBar = typeof navBar !== 'undefined' ? navBar : false

  useEffect(() => {
    if (!inNavBar) {
      setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth)
    }
  })

  const handleChange = (event) => {
    setSelectedVariant(event.target.value)
  }

  const selectedLanguage = selectedVariant === 'en' ? 'english' : (selectedVariant === 'sv' ? 'swedish' : 'finnish')

  return (
    <StyledFormControl variant="outlined">
      {!inNavBar && <InputLabel ref={inputLabelRef} htmlFor="language-variant-select">
        {t("whichLanguage")}
      </InputLabel>}
      <Select
        id="site-language-selector"
        value={selectedVariant}
        onChange={handleChange}
        aria-label={`site language selector, selected language: ${selectedLanguage}`}
        role="listbox"
        input={inNavBar ? (
          <StyledInputBase
            aria-labelledby="site-language-selector"
          />
        ) : (
          <OutlinedInput
            labelWidth={labelWidth}
            name="language-variant"
            id="language-variant-select"
          />
        )
        }
      >
        <MenuItem value={"en"} aria-label="select english" role="option">
          {inNavBar ? (<UKFlag aria-label="english" style={{ maxWidth: "30px", maxHeight: "20px" }} />) : "English"}
        </MenuItem>
        <MenuItem value={"sv"} aria-label="select swedish" role="option">
          {inNavBar ? (<SwedishFlag aria-label="swedish" style={{ width: "30px", height: "20px" }} />) : "Svenska"}
        </MenuItem>
        <MenuItem value={"fi"} aria-label="select finnish" role="option">
          {inNavBar ? (<FinnishFlag aria-label="finnish" style={{ maxWidth: "30px", maxHeight: "20px" }} />) : "Suomi"}
        </MenuItem>
      </Select>
    </StyledFormControl>
  )
}

export default withSimpleErrorBoundary(DropdownMenu)
