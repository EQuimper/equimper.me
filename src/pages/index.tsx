import { graphql } from 'gatsby'

import React from 'react'

import AuthorIntro from '../components/author-intro'
import BlogCard from '../components/blog-card'
import Layout from '../components/layout'
import RowTitle from '../components/row-title'
import VideoCard from '../components/video-card'
import styled from '../utils/styled'

const Root = styled('div')`
  ${tw('container mx-auto pb-10 w-full xl:w-3/4')};
`

const RowWrapper = styled('div')`
  ${tw('mb-10 w-full')};
`

const VideosWrapper = styled('div')`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  grid-gap: 1em;
`

interface IProps {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: {
          fields: {
            slug: string
          }
          frontmatter: {
            title: string
            description: string
            tags: string[]
          }
          id: string
        }
      }>
    }
    allYoutubeVideo: {
      edges: Array<{
        node: {
          id: string
          title: string
          description: string
          thumbnail: {
            url: string
            height: number
            width: number
          }
          channelTitle: string
          publishedAt: string
          localThumbnail: {
            childImageSharp: {
              resolutions: any
              fluid: any
            }
          }
        }
      }>
    }
    avatarImg: {
      fixed: any
    }
  }
}

const IndexPage = ({ data }: IProps) => (
  <Layout>
    <Root>
      <AuthorIntro data={data} />

      <RowTitle title="Latest Blog Post" />

      <RowWrapper>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogCard key={node.id} data={node} />
        ))}
      </RowWrapper>

      <RowTitle title="Latest Videos" />

      <RowWrapper>
        <VideosWrapper>
          {data.allYoutubeVideo.edges.map(({ node }) => (
            <VideoCard key={node.id} data={node} />
          ))}
        </VideosWrapper>
      </RowWrapper>
    </Root>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            tags
          }
        }
      }
    }

    allYoutubeVideo(limit: 3) {
      edges {
        node {
          id
          title
          description
          thumbnail {
            url
            height
            width
          }
          channelTitle
          publishedAt(formatString: "YYYY-MM-DD")
          localThumbnail {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }

    avatarImg: imageSharp(original: { src: { regex: "/avatar/" } }) {
      fixed(width: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
