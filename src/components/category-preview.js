import PropTypes from 'prop-types';
import React from 'react';
import {Link} from 'gatsby';
import Img from 'gatsby-image';

import styles from './category-preview.module.css';

const CategoryPreview = ({category}) => (
  <div className={styles.preview}>
    <Img alt="" fluid={category.heroImage.fluid} />
    <h3 className={styles.previewTitle}>
      <Link to={`/${category.slug}`}>{category.title}</Link>
    </h3>
    <div
      dangerouslySetInnerHTML={{
        __html: category.description,
      }}
    />
  </div>
);

CategoryPreview.propTypes = {
  category: PropTypes.shape({
    description: PropTypes.any,
    heroImage: PropTypes.shape({
      fluid: PropTypes.any,
    }),
    slug: PropTypes.any,
    title: PropTypes.any,
  }),
};

export default CategoryPreview;
