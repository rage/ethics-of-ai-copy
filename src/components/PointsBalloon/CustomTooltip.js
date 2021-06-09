import React from "react"
import withSimpleErrorBoundary from "../../util/withSimpleErrorBoundary"
import styled from "styled-components"
import { SMALL_MEDIUM_BREAKPOINT } from "../../util/constants"
import { useTranslation } from "gatsby-plugin-react-i18next"

const StyledTooltip = styled.div`
  background: white;
  border-radius: 0.25rem;
  padding: 0.5rem;
  p {
    margin-bottom: 0 !important;
    font-size: 0.9rem;
  }
  @media only screen and (max-width: ${SMALL_MEDIUM_BREAKPOINT}) {
    p {
      font-size: 0.75rem;
    }
  }
`

const CustomTooltip = (props) => {
  const { t } = useTranslation("points")

  if (!props.active) {
    return null
  }

  return (
    <StyledTooltip>
      <p>
        {t("gotPoints")}: {props.payload[0].payload.n_points}
      </p>
      <p>
        {t("maxPoints")}: {props.payload[0].payload.max_points}
      </p>
    </StyledTooltip>
  )
}

export default withSimpleErrorBoundary(CustomTooltip)
