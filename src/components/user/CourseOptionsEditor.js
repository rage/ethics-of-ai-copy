import React, { useEffect, useState } from "react"
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  Card,
  CardContent,
  FormHelperText,
} from "@material-ui/core"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Loading from "../Loading"

import { updateUserDetails, userDetails } from "../../services/moocfi"

import styled from "styled-components"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle as icon } from "@fortawesome/free-solid-svg-icons"
import DropdownMenu from "./DropdownMenu"
import { Link } from "gatsby"
import { useI18next, withTranslation } from "gatsby-plugin-react-i18next"

const Row = styled.div`
  margin-bottom: 1.5rem;
`

const Form = styled.form``

const InfoBox = styled.div`
  margin-bottom: 2rem;
`

const FormContainer = styled.div`
  height: 100%;
  margin-top: 2rem;
`

const StyledIcon = styled(FontAwesomeIcon)`
  margin-right: 0.25rem;
`

const StyledFormHelperText = styled(FormHelperText)`
  margin-left: .9rem;
`

const CourseOptionsEditor = ({ t, onComplete }) => {
  const { language, changeLanguage } = useI18next()

  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(true)
  const [errorObj, setErrorObj] = useState({})
  const [digitalEducationForAll, setDigitalEducationForAll] = useState(false)
  const [marketing, setMarketing] = useState(false)
  const [research, setResearch] = useState(undefined)
  const [firstName, setFirstName] = useState(undefined)
  const [lastName, setLastName] = useState(undefined)
  const [email, setEmail] = useState(undefined)
  const [studentNumber, setStudentNumber] = useState(undefined)
  const [loading, setLoading] = useState(true)
  const [focused, setFocused] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState(undefined)

  useEffect(() => {
    const fetchUserDetails = async () => {
      const data = await userDetails()
      setFirstName(data.user_field?.first_name)
      setLastName(data.user_field?.last_name)
      setEmail(data.email)
      setStudentNumber(data.user_field?.organizational_id)
      setDigitalEducationForAll(data.extra_fields?.digital_education_for_all === "t")
      setMarketing(data.extra_fields?.marketing === "t")
      setResearch(data.extra_fields?.research)
      setSelectedLanguage(data.extra_fields?.language)
      setLoading(false)
      validate()
    }
    fetchUserDetails()
  }, [])

  const onClick = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    const extraFields = {
      digital_education_for_all: digitalEducationForAll,
      marketing: marketing,
      research: research,
      language: selectedLanguage,
    }
    const userField = {
      first_name: firstName,
      last_name: lastName,
      organizational_id: studentNumber,
    }
    await updateUserDetails({
      extraFields,
      userField,
    })
    setSubmitting(false)
    changeLanguage(selectedLanguage)
    onComplete()
  }

  const handleFirstNameInput = (e) => {
    setFirstName(e.target.value)
    validate()
  }

  const handleLastNameInput = (e) => {
    setLastName(e.target.value)
    validate()
  }

  const handleStudentNumberInput = (e) => {
    setStudentNumber(e.target.value)
    validate()
  }

  const handleMarketingInput = (e) => {
    setMarketing(e.target.checked)
    validate()
  }

  const handleResearchInput = (e) => {
    setResearch(e.target.value)
    validate()
  }

  const handleFocus = (e) => {
    const name = e.target.name
    setFocused(name)
  }

  const handleUnFocus = () => {
    setFocused(null)
  }

  const validate = () => {
    setError(research === undefined)
  }

  const setSelectedVariant = (value) => {
    setSelectedLanguage(value)
    validate()
  }

  return (
    <FormContainer>
      <Loading loading={loading} heightHint="490px">
        <InfoBox>
          <Card>
            <CardContent>
              {t("loggedInWith")}
              {email}
            </CardContent>
          </Card>
        </InfoBox>
      </Loading>
      <h1>{t("studentInfo")}</h1>
      <Form>
        <InfoBox>{t("aboutYourself")}</InfoBox>
        <Loading loading={loading} heightHint="490px">
          <div>
            <Row>
              <TextField
                id="first-name"
                variant="outlined"
                type="text"
                label={t("firstName")}
                autoComplete="given-name"
                name="first_name"
                InputLabelProps={{
                  shrink:
                    firstName ||
                    focused === "first_name",
                }}
                fullWidth
                value={firstName}
                onChange={handleFirstNameInput}
                onFocus={handleFocus}
                onBlur={handleUnFocus}
              />
            </Row>

            <Row>
              <TextField
                id="last-name"
                variant="outlined"
                type="text"
                label={t("lastName")}
                autoComplete="family-name"
                name="last_name"
                InputLabelProps={{
                  shrink:
                    lastName ||
                    focused === "last_name",
                }}
                fullWidth
                value={lastName}
                onChange={handleLastNameInput}
                onFocus={handleFocus}
                onBlur={handleUnFocus}
              />
            </Row>

            <Row>
              <TextField
                id="student-number"
                variant="outlined"
                type="text"
                label={t("sid")}
                name="student_number"
                InputLabelProps={{
                  shrink:
                    studentNumber ||
                    focused === "student_number",
                }}
                fullWidth
                value={studentNumber}
                onChange={handleStudentNumberInput}
                onFocus={handleFocus}
                onBlur={handleUnFocus}
              />
              <StyledFormHelperText id="student-number-helper-text">{t("nosid")}</StyledFormHelperText>
            </Row>

            <Row>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={marketing}
                    onChange={handleMarketingInput}
                    name="marketing"
                    value="1"
                  />
                }
                label={t("marketing")}
              />
            </Row>

            <h4>{t("languageVersionTitle")}</h4>

            <InfoBox>
              {t("languageVersionInfo")}
            </InfoBox>

            <Row>
              <DropdownMenu
                selectedVariant={selectedLanguage || language || "en"}
                setSelectedVariant={setSelectedVariant}
              />
            </Row>
          </div>
        </Loading>

        <h2>{t("researchTitle")}</h2>

        <p>{t("research7")}</p>

        <Row>
          <Loading loading={loading} heightHint="115px">
            <RadioGroup
              aria-label={t("researchAgree")}
              name="research"
              value={research}
              onChange={handleResearchInput}
            >
              <FormControlLabel
                value="1"
                control={<Radio color="primary" />}
                label={t("researchYes")}
              />
              <FormControlLabel
                value="0"
                control={<Radio />}
                label={t("researchNo")}
              />
            </RadioGroup>
          </Loading>
        </Row>

        <Row>
          <Button
            onClick={onClick}
            disabled={submitting || error}
            loading={submitting}
            variant="contained"
            color="primary"
            fullWidth
          >
            {t("save")}
          </Button>
        </Row>
      </Form>
      {error && (
        <InfoBox>
          <b>{t("fillRequired")}</b>
        </InfoBox>
      )}
    </FormContainer>
  )
}

export default withTranslation("common")(
  withSimpleErrorBoundary(CourseOptionsEditor),
)
