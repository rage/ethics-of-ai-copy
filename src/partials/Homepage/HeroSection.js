import React from "react"
import styled from "styled-components"

import { respond } from "../../_respond"
import { HeroButton } from "../../components/Buttons"
import HeroIllustration from "../../assets/hero-svg.svg"

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  padding-bottom: 1rem;
`

const HeroSection = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='1920' height='944' viewBox='0 0 1920 944'%3E%3Cdefs%3E%3CclipPath id='clip-Web_1920_1'%3E%3Crect width='1920' height='944'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg id='Web_1920_1' data-name='Web 1920 – 1' clip-path='url(%23clip-Web_1920_1)'%3E%3Crect width='1920' height='944' fill='%23fff'/%3E%3Cg id='Group_1472' data-name='Group 1472' transform='translate(22.27 -24.04)'%3E%3Cg id='Group_1411' data-name='Group 1411' transform='translate(-66.023 139.354) rotate(17)'%3E%3Cpath id='Path_6777' data-name='Path 6777' d='M23.96,243.686,38.216,235.2l9.543-13.543,12.2-10.692L72.9,200.92l10.667-12.279L94.09,176.254l9.97-12.86L116.4,152.582l10.414-12.5,10.687-12.29,10.359-12.532,7.693-14.575,10.289-12.6,10.485-12.462,7.53-14.586,8.123-14.1,9.57-13.229,1.71-17.312L194.14,0,175.264,1.9l-7.7,14.951-7.149,15.446L150.367,45.771,139.8,58.845l-9.693,13.693L117.743,84.155l-10.266,13.2-11.342,12.3-8.271,14.919-13.26,10.649L64.519,148.662,51.877,159.708l-10.721,12.87-10.818,12.87-11.926,11.74L4.542,206.8,0,225.448,7.493,243.5Z' fill='%23d39a50'/%3E%3C/g%3E%3Cg id='Group_1412' data-name='Group 1412' transform='translate(-15.397 218.432) rotate(17)'%3E%3Cpath id='Path_6778' data-name='Path 6778' d='M22.252,241.934,34.73,231.549l12.042-10.881,13.355-9.556,11.914-11.084,8.811-14.038,10.212-12.638L104.5,163.59,115.3,151.412l9.445-13.306L134,124.7l12.075-11.154,7.5-14.712L164.092,86.4l9.949-12.833L181.3,58.83l9.385-13.237,8.556-13.882,4.874-17.456L191.69,0,174.4.815,165.165,14.75l-6.282,16.023L146.5,42.592l-7.181,15.5L128.545,71,116.6,82.939l-9.838,13.553L96.639,109.831l-9.995,13.482L73.872,134.4,62.637,146.794,50.769,158.572,38.826,170.239,28.84,183.932,16.2,194.906,3.051,205.283,0,223.772,8.648,239.7Z' fill='%23d39a50'/%3E%3C/g%3E%3C/g%3E%3Cpath id='Path_6780' data-name='Path 6780' d='M840.712,845.834c15.18-20.864,11.452-42.327-8.418-58.2-20.878-16.68-44.433-30.756-68.47-42.339-8.562-4.129-17.461-8.217-26.6-11.662-.345-17.47-.119-34.957.1-52.424.226-17.914-27.507-16.329-27.733,1.461-.181,14.413-.365,28.845-.23,43.269a95.832,95.832,0,0,0-16.083-1.274c-26.691.26-49.4,15.514-66.738,34.75-38.005,42.155-58.271,98.131-61.009,154.33-.872,17.869,26.867,16.227,27.731-1.461,2.312-47.391,20.051-94.606,50.909-130.836,17.836-20.946,38.659-32.788,65.99-27.026.275,5.632.6,11.266,1.064,16.89,2.123,26.049,6.028,54.561,22.585,75.821C760.388,881.235,814.813,881.433,840.712,845.834Zm-78.4-8.65c-20.19-16.629-22.047-48.509-23.745-72.54-.023-.3-.034-.6-.054-.9,14.854,6.318,29.2,14.356,42.644,22.4a290.023,290.023,0,0,1,32.82,22.361c11.025,8.856,9.46,17.8-.849,26.754C799.211,847.336,776.745,849.069,762.313,837.183Z' transform='translate(1143.74 -696.709) rotate(15.009)' fill='%23e3c7b6'/%3E%3Cpath id='Path_6781' data-name='Path 6781' d='M996.076,732.247c6.358,50.191-10.987,84.07-43.914,119.192-31.366,33.456-65.569,76.784-110.825,77.367-94.82,1.223-152.373-8.252-188.2-179.831-8.092-38.754,155.092-183.79,186.1-181.919C931.034,572.57,985.02,644.943,996.076,732.247Z' transform='translate(1054.688 -266.037)' fill='%23a5b2a6'/%3E%3Cg id='Group_1413' data-name='Group 1413' transform='matrix(0.174, 0.985, -0.985, 0.174, 836.705, -286.394)'%3E%3Cpath id='Path_6782' data-name='Path 6782' d='M581.875,681.357c-1.8-14.538,3.11-24.346,12.425-34.524,8.878-9.691,18.559-22.241,31.366-22.411,26.835-.355,43.122,2.392,53.263,52.09,2.288,11.225-43.893,53.238-52.67,52.7C600.278,727.61,585,706.646,581.875,681.357Z' transform='translate(67.621 99.56)' fill='%23a5c4c6'/%3E%3Cpath id='Path_6783' data-name='Path 6783' d='M578.022,635.163c-.739-15.435,5.261-25.335,15.97-35.246,10.2-9.444,21.489-21.827,35.1-20.93,28.516,1.875,45.589,6.126,52.355,59.215,1.529,11.99-50.878,52.278-60.148,50.976C593.846,685.32,579.314,662.007,578.022,635.163Z' transform='translate(61.011 14.85)' fill='%23a5c4c6'/%3E%3Cpath id='Path_6784' data-name='Path 6784' d='M549.989,642.765c-6.638-12.311-5.722-22.726-1.045-34.982,4.455-11.672,8.625-26.165,19.851-30.724,23.522-9.553,38.826-12.717,65.025,27.989,5.919,9.195-20.178,62.45-28.1,64.993C582.273,677.561,561.529,664.173,549.989,642.765Z' fill='%23a5c4c6'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  padding: 10rem 8rem 10rem 8rem;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-text: center;
  z-inde: 99;

  ${respond.xs`
  padding: 0;
`}

  ${respond.mobile`
  margin: 4rem 0;
  width: 100%;
  padding: 0;
`}

`

const BigText = styled.h1`
  font-family: "Work Sans", sans-serif;
  font-weight: 600;
  font-size: clamp(40px, 4vw, 70px);
  color: #26252a;
`

const HeroText = styled.div`
  color: #333;
  font-size: 20px;
  line-height: 1.8;
  font-weight: 400;
  width: 60%;
  display: grid;
  margin: 0 auto;

  ${respond.mobile`
  width: 100%;
  padding: 0 20px;
`}

  ${respond.xs`
  width: 100%;;
`}

  ${respond.lg`
  width: 60%;
`}
`

const StyledSVG = styled(HeroIllustration)`
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  position: absolute;
`

export default (props) => {
  return (
    <div>
      <StyledSVG />
      <HeroSection>
        <BigText> {props.title} </BigText>
        <HeroText> {props.subtitle} </HeroText>{" "}
        <ButtonWrapper>
          <HeroButton to="/start">Start </HeroButton>
        </ButtonWrapper>
      </HeroSection>
    </div>
  )
}
