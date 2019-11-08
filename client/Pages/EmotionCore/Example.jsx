// @flow
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

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

const styles = {
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

const inline = {
  customTitle: {
    fontSize: 26,
  },
};

function Example() {
  return (
    <div css={styles.wrapper}>
      <h1
        className="override-class"
        css={styles.title(true)}
        style={inline.customTitle}>
        My Custom Title
      </h1>
    </div>
  );
}

export default Example;
