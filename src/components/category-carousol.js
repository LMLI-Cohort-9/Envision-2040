import { Link } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/**
 * The class that represents the category preview component.
 */
class CategoryCarousol extends React.Component {
  /**
   * Returns the category preview component's content that is
   * supposed to be rendered by a user's browser inside a Layout component.
   * @return {*} The category preview component content that is supposed to
   * be rendered by a browser.
   */
  render() {
    const { categories } = this.props;

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <Slider {...settings}>
        {categories.map(({ node }) => {
          return (
            <div>
              <Link to={`/${node.slug}`}>
                <h3>{node.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: node.description.childMarkdownRemark.html,
                  }}
                />
                <Img alt={node.title} fluid={node.heroImage.fluid} />
              </Link>
            </div>
          );
        })}
      </Slider>
    );
  }
}

export default CategoryCarousol;
