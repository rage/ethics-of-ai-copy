import React from "react"
import { Card, CardContent, Typography } from "@material-ui/core"
import { withTranslation } from "react-i18next"

export default withTranslation("common")(({ points, t }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        {t("points")}: {points.group}
      </Typography>
    </CardContent>
  </Card>
))
