import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { respond } from "../../_respond"
import Button from "../../components/Buttons"
import H2 from "../Headers/H2"
import H4 from "../Headers/H4"

const Subtitle = styled.div`
  font-size: 1.3rem;
  margin-top: 2rem;
  text-align: center;
`

const TopicContentWrapper = styled.div`
  padding: 6rem 8rem 10rem 8rem;
  margin-top: 2rem;
  width: 100%;
  height: 100vh;

  ol {
    max-width: 55rem;
    margin: 4rem auto;
    list-style: none;
    counter-reset: subtopic-counter;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  ol li {
    counter-increment: subtopic-counter;
    border-bottom: 2px solid #e6e6e6;
    width: 76%;
    display: flex;
    padding: 1.8rem 0;
    text-align: left;

    div {
      max-width: 34rem;

      span {
        font-size: 1rem;
        font-weight: 500;
        color: #202020;
        opacity: 0.8;
        line-height: 1.6;
      }
    }
  }

  ol li:first-of-type::before {
    margin-right: 4.8rem;
  }

  ol li::before {
    content: counter(subtopic-counter);
    font-weight: bold;
    font-size: 5rem;
    font-family: "Ilisarniq Light", sans serif;
    color: #23b5d3;
    line-height: 1;
    margin-right: 4rem;
  }
`
const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

export default (props) => {
  return (
    <TopicContentWrapper>
      <H2> Topic Content </H2>{" "}
      <Subtitle>
        Below is a list of all the main topics in this section{" "}
      </Subtitle>{" "}
      <ol>
        <li>
          <StyledLink to="/content">
            <div>
              <H4> The Distribution of Income in Helsinki </H4>{" "}
              <span>
                This is a subtitle that will be drerived from frontmatter.This
                is a subtitle that will be..{" "}
              </span>{" "}
            </div>{" "}
          </StyledLink>
        </li>{" "}
        <li>
          <StyledLink to="/content">
            <div>
              <H4> The Distribution of Income </H4>{" "}
              <span>
                This is a subtitle that will be drerived from frontmatter{" "}
              </span>{" "}
            </div>{" "}
          </StyledLink>
        </li>{" "}
        <li>
          <StyledLink to="/content">
            <div>
              <H4> The Distribution of Income </H4>{" "}
              <span>
                This is a subtitle that will be drerived from frontmatter{" "}
              </span>{" "}
            </div>{" "}
          </StyledLink>
        </li>{" "}
      </ol>{" "}
    </TopicContentWrapper>
  )
}
