import React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  position: relative;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 2px;
  margin: 0 0 1em 0;
  width: 100%;
  transition: background border 0.2s;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.secondary[9]};
    background: ${props => props.theme.colors.secondary[11]};
    h2 {
      color: ${({ theme }) => theme.colors.secondary[2]};
    }
  }
  a {
    display: flex;
    flex-flow: column;
    height: 100%;
    width: 100%;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '40%' : '60%')};
      }
    }
  }
`

const StyledImg = styled(Img)`
  border-top-left-radius: 1px;
  border-top-right-radius: 1px;
`

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  text-transform: capitalize;
  margin: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(1)};
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
  margin: ${({ theme }) => theme.spacing(2)};
  margin-top: 0;
`

const Date = styled.h3`
  color: gray;
`

const ReadingTime = styled.h4`
  color: gray;
`

const Excerpt = styled.p`
  margin: 0 1rem 1rem 1rem;
  line-height: 1.6;
`

const Card = ({ slug, heroImage, title, publishDate, body, ...props }) => {
  return (
    <>
      {heroImage && body && (
        <Post featured={props.featured}>
          <Link to={`${props.basePath}/${slug}/`}>
            <StyledImg fluid={heroImage.fluid} backgroundColor={'#eeeeee'} />
            <Title>{title}</Title>
            <Info>
              <Date>{publishDate}</Date>
              <ReadingTime>
                {body.childMarkdownRemark.timeToRead} min read
              </ReadingTime>
            </Info>
            <Excerpt
              dangerouslySetInnerHTML={{
                __html: body.childMarkdownRemark.excerpt,
              }}
            />
          </Link>
        </Post>
      )}
    </>
  )
}

export default Card
