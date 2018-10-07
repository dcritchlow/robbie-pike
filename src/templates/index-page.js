import React from 'react'
import PropTypes from 'prop-types'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import { StaticQuery, graphql } from 'gatsby'

const IndexPage = ({ data }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="content">
              <div
                className="full-width-image-container margin-top-0"
                style={{ backgroundImage: `url(${data.allMarkdownRemark.edges[0].node.frontmatter.image})` }}
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
                  {data.allMarkdownRemark.edges[0].node.frontmatter.title}
                </h2>
              </div>
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-2">
                    {data.allMarkdownRemark.edges[0].node.frontmatter.heading}
                  </h3>
                  <p>{data.allMarkdownRemark.edges[0].node.frontmatter.description}</p>
                </div>
              </div>
              <Features gridItems={data.allMarkdownRemark.edges[0].node.frontmatter.intro.blurbs} />
              <div className="columns">
                <div className="column is-7">
                  <h3 className="has-text-weight-semibold is-size-3">
                    {data.allMarkdownRemark.edges[0].node.frontmatter.main.heading}
                  </h3>
                  <p>{data.allMarkdownRemark.edges[0].node.frontmatter.main.description}</p>
                </div>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-vertical">
                  <div className="tile">
                    <div className="tile is-parent is-vertical">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={data.allMarkdownRemark.edges[0].node.frontmatter.main.image1.image}
                          alt={data.allMarkdownRemark.edges[0].node.frontmatter.main.image1.alt}
                        />
                      </article>
                    </div>
                    <div className="tile is-parent">
                      <article className="tile is-child">
                        <img
                          style={{ borderRadius: '5px' }}
                          src={data.allMarkdownRemark.edges[0].node.frontmatter.main.image2.image}
                          alt={data.allMarkdownRemark.edges[0].node.frontmatter.main.image2.alt}
                        />
                      </article>
                    </div>
                  </div>
                  <div className="tile is-parent">
                    <article className="tile is-child">
                      <img
                        style={{ borderRadius: '5px' }}
                        src={data.allMarkdownRemark.edges[0].node.frontmatter.main.image3.image}
                        alt={data.allMarkdownRemark.edges[0].node.frontmatter.main.image3.alt}
                      />
                    </article>
                  </div>
                </div>
              </div>
              <Testimonials testimonials={data.allMarkdownRemark.edges[0].node.frontmatter.testimonials} />
              <div
                className="full-width-image-container"
                style={{ backgroundImage: `url(${data.allMarkdownRemark.edges[0].node.frontmatter.full_image})` }}
              />
              <h2 className="has-text-weight-semibold is-size-2">
                {data.allMarkdownRemark.edges[0].node.frontmatter.pricing.heading}
              </h2>
              <p className="is-size-5">{data.allMarkdownRemark.edges[0].node.frontmatter.pricing.description}</p>
              <Pricing data={data.allMarkdownRemark.edges[0].node.frontmatter.pricing.plans} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

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
    }
    render={ data => 
      <IndexPage data={data} {...props} />
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