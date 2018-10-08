import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import { StaticQuery, graphql } from 'gatsby'

export const IndexPage = ({
  image,
  title,
  heading,
  description,
  intro
}) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${image})` }}
              >
                <h2
                  className="has-text-weight-bold is-size-1"
                  style={{
                    boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
                    backgroundColor: '#f40',
                    color: 'white',
                    padding: '1rem',
                  }}
                >
                  {title}
                </h2>
              </div>
              <div className="columns">
                <div className="column is-12">
                  <h3 className="has-text-weight-semibold is-size-2 has-text-centered">
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
              </div>
              <Features gridItems={intro.blurbs} />
            </div> 
          </div>
        </div>
      </div>
    </div>
  </section>
)

const IndexPageData = ({data}) => {
  const { frontmatter } = data.allMarkdownRemark.edges[0].node
  return <IndexPage 
    image={frontmatter.image}
    title={frontmatter.title}
    heading={frontmatter.heading}
    description={frontmatter.description}
    intro={frontmatter.intro}
  />
}

export default props => (
  <StaticQuery
    query={
      graphql`
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
                }
              }
            }
          }
        }
        `
    }
    render={ data => 
      <IndexPageData data={data} {...props} />
    }
  />
);

IndexPage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    image1: PropTypes.object,
    image2: PropTypes.object,
    image3: PropTypes.object,
  }),
  testimonials: PropTypes.array,
  fullImage: PropTypes.string,
  pricing: PropTypes.shape({
    heading: PropTypes.string,
    description: PropTypes.string,
    plans: PropTypes.array,
  }),
}