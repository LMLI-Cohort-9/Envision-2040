import { graphql } from 'gatsby';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import React from 'react';
import Header from '../components/header';
import Layout from '../components/layout';
import Countdown from 'react-countdown';
// Brings in stuff needed for css.
import styles from '../css/index.module.css';

import headerImg from '../assets/images/header-white.svg';
import { Row, Col } from 'react-bootstrap';

/**
 * The class that represents the home page.
 */
class Home extends React.Component {
  /**
   * Returns the homepage content that is supposed to be rendered by a user's
   * browser inside a Layout component.
   * @return {*} The home page content that is supposed to be rendered by a
   * browser.
   */
  render() {
    const categories = get(this.props, 'data.allContentfulCategory.edges');

    // Random component
    const Completionist = () => <span>Please wait for the site to reload!</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        return <Completionist />;
      } else {
        // Render a countdown
        return <div class="countdown">
          <Row class={styles.countdown}>
            <Col md={3}>
              <span>{days}</span> DAYS
            </Col>
            <Col md={3}>
              <span>{hours}</span> HOURS
            </Col>
            <Col md={3}>
              <span>{minutes}</span> MINUTES
            </Col>
            <Col md={3}>
              <span>{seconds}</span> SECONDS
            </Col>
          </Row>
        </div>;
      }
    };

    return (
      <Layout
        description="Join the Lockheed Martin Leadership Institute as we take a deep dive into how we can prepare for what the next 20 years will bring as we explore the intersections of technology, social rights, and what it means to be human."
        location={this.props.location}>
        <div className="content">
          <Header image={headerImg} alt={"Envision 2040"} applyGradient={true} />
          <div className="wrapper">
            <h2 className="section-headline">
              <Countdown
                date={new Date(2021, 4, 15, 12)}
                renderer={renderer}
              />
            </h2>
            <Row>
              <Col md={6}>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/I8ZtHxOqFnY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </Col>
              <Col md={6}>
                <h3>Why wait for the world of tomorrow when it could be the world of today?</h3>
                <p>
                  Between a global health crisis, heightened social rights
                  tension, and a polarized political environment, the world faces an
                  uncertain future. This is where 2040 comes into play. Join the Lockheed
                  Martin Leadership Institute starting on April 15th as we take a deep dive into how we can prepare for
                  what the next 20 years will bring as we explore the intersections
                  of technology, social rights, and what it means to be human.
            </p>
                <p>To stay up to date with everything Envision 2040, follow us on <a href="https://www.facebook.com/cecleadership">
                  Facebook</a>, <a href="https://twitter.com/MUEngLdrInst">Twitter</a>, and <a href="https://www.instagram.com/muleadershipinstitute/">
                  Instagram</a>!
            </p>
              </Col>
            </Row>
          </div>
        </div>

        <div className="break" />

        <div className="content">
          <div className="wrapper">
            <h2 className="section-headline">
              Who Are We?
            </h2>
            <p>
              We are Miami University&apos;s Lockheed Martin Leadership
              Institute! The Lockheed Martin Leadership is a three year
              intensive cohort certification program that focuses on
              Transformational Leadership for Students in Miami
              University&apos;s College of Engineering and Computing. The
              purpose of the Lockheed Martin Leadership Institute is simple,
              yet powerful: to cultivate leaders who will flourish in their
              professions and lives by: thinking strategically; working
              collaboratively with others; effectively communicating their
              ideas; finding innovative solutions to society&apos;s most
              complex problems.
            </p>
            <p>
              To learn more about us, you can checkout our
              <a href="/about"> about page</a> or our
              <a href="/contact"> contact page</a>.
            </p>
          </div>
        </div>
      </Layout >
    );
  }
}

Home.propTypes = {
  location: PropTypes.any,
};

export default Home;

// Performs a GraphQL query to get the image, description, title, and slug used above.
export const pageQuery = graphql`
  query Home {
    allContentfulCategory(sort: {fields: sortOrder}) {
      edges {
        node {
          title
          slug
          heroImage {
            fluid(maxWidth: 700, maxHeight: 392, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
          sortOrder
        }
      }
    }
  }
`;

