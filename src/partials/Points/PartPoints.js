import React from "react"
import { Card, CardContent, Typography } from "@material-ui/core"
import { useTranslation } from "gatsby-plugin-react-i18next"

export default ({ points }) => {
  const { t } = useTranslation("common")

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {t("points")}: {points.group}
        </Typography>
      </CardContent>
    </Card>
  )
}
