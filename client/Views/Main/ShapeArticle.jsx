// @flow
import React, { memo } from 'react';
import radium from 'radium';

import ironMan from '../../static/images/ironman-test.png';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
  },
  titleWrapper: {
    width: '100%',
    height: 'auto',
    padding: '12px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 400,
    color: 'var(--secondary-color)',
  },
  optionsWrapper: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 12px',
  },
  optionBtn: {
    width: 'auto',
    height: 'auto',
    border: '1px solid var(--secondary-color)',
    borderRadius: 3,
    backgroundColor: 'transparent',
    padding: '6px 12px',
    margin: '0 6px',
    fontSize: 16,
    textAlign: 'center',
    color: 'var(--secondary-color)',
    cursor: 'pointer',
  },
  activeBtn: {
    backgroundColor: 'rgb(117, 179, 203)',
  },
  articleWrapper: {
    width: '100%',
    height: 'auto',
    padding: '12px 0',
  },
  ironman: {
    width: 400,
    height: 313,
    float: 'left',
  },
  withShapeImage: {
    shapeOutside: `url(${ironMan})`,
  },
  withShapePolygon: {
    shapeOutside: 'polygon(0% 0%, 40% 0, 100% 76%, 100% 100%, 0 100%)',
  },
  paragraph: {
    fontSize: 16,
    color: 'var(--secondary-color)',
  },
};

type Props = {
  options: {
    mode: string,
  },
  setOptions: Function,
};

function ShapeArticle({
  options,
  setOptions,
}: Props) {
  const {
    mode,
  } = options;

  return (
    <div style={styles.wrapper}>
      <div style={styles.titleWrapper}>
        <span style={styles.title}>
          測試文章
        </span>
        <div style={styles.optionsWrapper}>
          <button
            key="default"
            type="button"
            onClick={() => setOptions({ mode: 'default' })}
            style={[
              styles.optionBtn,
              mode === 'default' && styles.activeBtn,
            ]}>
            default
          </button>
          <button
            key="enable-shape-image"
            type="button"
            onClick={() => setOptions({ mode: 'shapeImage' })}
            style={[
              styles.optionBtn,
              mode === 'shapeImage' && styles.activeBtn,
            ]}>
            shape-outside: image
          </button>
          <button
            key="enable-shape-polygon"
            type="button"
            onClick={() => setOptions({ mode: 'shapePolygon' })}
            style={[
              styles.optionBtn,
              mode === 'shapePolygon' && styles.activeBtn,
            ]}>
            shape-outside: polygon
          </button>
        </div>
      </div>
      <article style={styles.articleWrapper}>
        <img
          alt="iron-man"
          src={ironMan}
          style={[
            styles.ironman,
            mode === 'shapeImage' && styles.withShapeImage,
            mode === 'shapePolygon' && styles.withShapePolygon,
          ]} />
        <p style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </div>
  );
}

export default memo(
  radium(
    ShapeArticle
  )
);
