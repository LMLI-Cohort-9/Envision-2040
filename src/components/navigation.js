import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';
import './navigation.module.css';

import {Navbar, Nav} from 'react-bootstrap';

/**
 * [Insert comment here].
 */
class Navigation extends React.Component {
  /**
   * [Insert comment here].
   * @return {*} [Insert comment here].
   */
  render() {
    const {data} = this.props;

    return (
      <Navbar collapseOnSelect expand="lg" bg="transparent " variant="light">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">About</Nav.Link>
          </Nav>
          <Nav className="mx-auto">
            {data.allContentfulCategory.edges.map(({node}) => {
              return (
                <Nav.Link key={node.slug} href={`/${node.slug}`}>
                  {node.title}
                </Nav.Link>
              );
            })}
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

/**
 * [Insert comment here]
 * @param {*} props [Insert comment here].
 * @return {*} [Insert comment here].
 */
export default function MyNavigation(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulCategory {
            edges {
              node {
                title
                slug
              }
            }
          }
        }
      `}
      render={(data) => <Navigation data={data} {...props} />}
    />
  );
}

Navigation.propTypes = {
  data: PropTypes.shape({
    allContentfulCategory: PropTypes.shape({
      edges: PropTypes.shape({
        map: PropTypes.func,
      }),
    }),
  }),
};
