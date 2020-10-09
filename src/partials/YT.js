import React from "react"
import styled from "styled-components"
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary"

const VideoWrapper = styled.div`
  width: 50vw;
  height: 50vh;
  overflow: hidden;
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  iframe {
    position: absolute;
    top: -60px;
    left: 0;
    width: 100%;
    height: calc(100% + 120px);
  }
`

const VideoForeground = styled.div``

const BASE_URL = "https://www.youtube.com/embed/"

const YT = (props) => {
  if (!props.id) {
    return null
  }
  const url = `${BASE_URL}${props.id}?rel=0`
  return (
    <VideoWrapper>
      <VideoForeground>
        <iframe
          width="652"
          height="367"
          src={url}
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>
      </VideoForeground>
    </VideoWrapper>
  )
}

export default withSimpleErrorBoundary(YT)
