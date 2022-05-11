import { graphql, Link } from 'gatsby'
import * as React from 'react'
import DailyLink from './Daily'
import Layout from '../components/layout'

const IndexPage = ({ data }) => {
  // eslint-disable-next-line no-undef
  const Posts = data.allMarkdownRemark.edges
  console.log({ Posts })
  return (
  <Layout>
    <div className="w-full">

{Posts.map(post => <DailyLink key={post.node.id} body={post.node.html} title={post.node.frontmatter.title}></DailyLink>)}
    </div>
  </Layout>
  )
}

export default IndexPage

export const listQuery = graphql`
query MyQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
        }
        html
      }
    }
  }
}
`
