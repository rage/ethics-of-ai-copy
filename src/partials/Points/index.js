import React from "react"
import PointsImpl from "./PointsImpl"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "@apollo/react-hooks"
import { accessToken } from "../../services/moocfi"
import { withTranslation } from "gatsby-plugin-react-i18next"

export default withTranslation("common")(
  class Points extends React.Component {
    state = {
      render: false,
    }
    componentDidMount() {
      this.setState({ render: true })
    }
    render() {
      if (!this.state.render) {
        return <div>{this.props.t("loading2")}</div>
      }
      const apolloClient = new ApolloClient({
        uri: "https://www.mooc.fi/api",
        request: async (operation) => {
          const token = accessToken()
          if (!token) {
            return
          }
          operation.setContext({
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        },
      })
      return (
        <ApolloProvider client={apolloClient}>
          <PointsImpl />{" "}
        </ApolloProvider>
      )
    }
  },
)
