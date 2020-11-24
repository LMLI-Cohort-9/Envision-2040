import PropTypes from 'prop-types';
import React from 'react';
import {graphql} from 'gatsby';
import get from 'lodash/get';
import Img from 'gatsby-image';
import Layout from '../components/layout';

import heroStyles from '../components/hero.module.css';

/**
 * [Insert comment here].
 */
class ModuleTemplate extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const post = get(this.props, 'data.contentfulModule');

    return (
      <Layout location={this.props.location}>
        <div style={{background: '#fff'}}>
          <div className={heroStyles.hero}>
            <Img
              className={heroStyles.heroImage}
              alt={post.title}
              fluid={post.heroImage.fluid}
            />
          </div>
          <div className="wrapper">
            <h1 className="section-headline">{post.title}</h1>
            <div
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
      </Layout>
    );
  }
}

ModuleTemplate.propTypes = {
  location: PropTypes.any,
};

export default ModuleTemplate;

export const pageQuery = graphql`
  query ModuleBySlug($slug: String!) {
    contentfulModule(slug: { eq: $slug }) {
      title
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
