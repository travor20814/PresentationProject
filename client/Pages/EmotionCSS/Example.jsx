// @flow
import React from 'react';
import { css, keyframes } from 'emotion';

const bounceAnimate = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0, 0, 0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0, -4px, 0);
  }
`;

const withBounceAnimation = css`
  animation-name: ${bounceAnimate};
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
`;

const classes = {
  wrapper: css`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  `,
  title: needBounce => css`
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 1px;

    ${needBounce ? withBounceAnimation : null};

    &:hover {
      animation-name: none;
    }
  `,
};

function Example() {
  return (
    <div className={classes.wrapper}>
      <h1 className={classes.title(true)}>
        My Custom Title
      </h1>
    </div>
  );
}

export default Example;
