// @flow
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
// components
import Image from './Image';
import Text from './Text';

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
  mainWrapper: css`
    width: 100%;
    padding: 40px 0 0;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  imageWrapper: css`
    margin: 0 40px 0 0;
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
      <div css={styles.mainWrapper}>
        <div css={styles.imageWrapper}>
          <Image />
        </div>
        <Text />
      </div>
    </div>
  );
}

export default Example;
