import React from "react"

export default class ScrollIndicator extends React.Component {
  state = {
    scrolled: 0,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollProgress)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollProgress)
  }

  scrollProgress = () => {
    const scrollPx = document.documentElement.scrollTop
    const winHeightPx =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrolled = `${(scrollPx / winHeightPx) * 100}%`

    console.log(scrolled)

    this.setState({
      scrolled: scrolled,
    })
  }

  render() {
    const progressContainerStyle = {
      height: "5px",
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      zIndex: 99,
    }

    const progressBarStyle = {
      height: "5px",
      background: "#27F09D",
      width: this.state.scrolled,
    }

    return (
      <div>
        <div style={progressContainerStyle}>
          <div style={progressBarStyle} />{" "}
        </div>{" "}
      </div>
    )
  }
}
