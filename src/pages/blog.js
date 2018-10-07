import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export const BlogPostPageTemplate = ({ posts }) => (
  <section className="section">
    <div className="container">
      <div className="content">
        <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
      </div>
      {posts.map(({ node: post }) => (
        <div
          className="content"
          style={{ border: '1px solid #eaecee', padding: '2em 4em' }}
          key={post.id}
        >
          <p>
            <Link className="has-text-primary" to={post.fields.slug}>
              {post.frontmatter.title}
            </Link>
            <span> &bull; </span>
            <small>{post.frontmatter.date}</small>
          </p>
          <p>
            {post.excerpt}
            <br />
            <br />
            <Link className="button is-small" to={post.fields.slug}>
              Keep Reading →
            </Link>
          </p>
        </div>
      ))}
    </div>
  </section>
)

BlogPostPageTemplate.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

const BlogPostPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <BlogPostPageTemplate posts={edges} />
    </Layout>
  )
}

BlogPostPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      posts: PropTypes.array,
    }),
  }),
}

export default BlogPostPage

export const pageQuery = graphql`
  query BlogPostQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
