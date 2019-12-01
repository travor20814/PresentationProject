// @flow
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

import mockSource from '../../static/images/chicken.jpg';

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeInEffect = css`
  opacity: 0;
  transform: translateX(-40px);
  animation-name: ${fadeInAnimation};
  animation-duration: 1.5s;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`;

const styles = {
  wrapper: ({
    withFadeIn,
  }) => css`
    width: 200px;
    height: 200px;
    object-fit: contain;
    ${withFadeIn ? fadeInEffect : null};
  `,
};

function Image() {
  return (
    <img
      alt="Custom Cover"
      src={mockSource}
      css={styles.wrapper({
        withFadeIn: true,
      })} />
  );
}

export default Image;
