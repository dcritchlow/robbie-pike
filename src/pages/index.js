import React from 'react'
import { graphql } from 'gatsby'
import IndexPage from '../templates/index-page'

const Index = (data) => {
  return (
    <IndexPage data={data}></IndexPage>
  )
}
export default Index
export const IndexQuery = graphql`
query IndexPage {
  allMarkdownRemark(
    filter: { frontmatter: { templateKey: { eq: "index-page" } } }
  ) {
    edges {
      node {
        frontmatter {
          title
          image
          heading
          description
          intro {
            blurbs {
              image
              text
            }
            heading
            description
          }
          main {
            heading
            description
            image1 {
              alt
              image
            }
            image2 {
              alt
              image
            }
            image3 {
              alt
              image
            }
          }
          testimonials {
            author
            quote
          }
          full_image
          pricing {
            heading
            description
            plans {
              description
              items
              plan
              price
            }
          }
        }
      }
    }
  }
}
`