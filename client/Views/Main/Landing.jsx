// @flow
import React, {
  useState,
} from 'react';
import { css, keyframes } from 'emotion';

const DELAY = 2;
const DURATION = 1.2;

const animate = keyframes`
  0% {
    transform: translateX(-20px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const baseBlockStyle = css`
  width: 200px;
  height: 200px;
  background-color: red;
`;

const classes = {
  placement: css`
    width: 100%;
    height: 100%;
    padding: 80px 0 0;
    position: relative;
  `,
  wrapper: css`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  `,
  viewer: css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
  `,
  label: css`
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    color: rgb(226, 94, 53);
    padding: 12px 0;
  `,
  btn: css`
    position: absolute;
    left: calc(50% - 65px);
    top: 6px;
    font-size: 16px;
    padding: 6px 18px;
    border: 1px solid #000;
    border-radius: 3px;
    background-color: transparent;
    cursor: pointer;
  `,
  animateWrapper: (count, forward, isShown) => css`
    ${baseBlockStyle};

    transform: translateX(50px);
    animation-name: ${isShown ? animate : null};
    animation-duration: ${DURATION}s;
    animation-delay: ${DELAY}s;
    animation-fill-mode: ${forward};
    animation-timing-function: ease-out;
    animation-iteration-count: ${count};
  `,
  transitionWrapper: isShown => css`
    ${baseBlockStyle};

    opacity: ${isShown ? 1 : 0};
    transform: translateX(${isShown ? '0px' : '-20px'});
    transition-property: opacity, transform;
    transition-timing-function: ease-out;
    transition-duration: ${DURATION}s;
    transition-delay: 0s;
  `,
};

function Landing() {
  const [isShown, setShown] = useState(false);

  return (
    <div className={classes.placement}>
      <button
        type="button"
        onClick={() => setShown(!isShown)}
        className={classes.btn}>
        {`Click to ${isShown ? 'hide' : 'show'}`}
      </button>
      <div className={classes.wrapper}>
        <div className={classes.viewer}>
          <div className={classes.animateWrapper(1, 'forwards', true)} />
          <span className={classes.label}>
            Animate count 1 (forwards)
          </span>
        </div>
        <div className={classes.viewer}>
          <div className={classes.animateWrapper(1, 'backwards', true)} />
          <span className={classes.label}>
            Animate count 1 (backwards)
          </span>
        </div>
        <div className={classes.viewer}>
          <div className={classes.animateWrapper(1, 'both', true)} />
          <span className={classes.label}>
            Animate count 1 (both)
          </span>
        </div>
        <div className={classes.viewer}>
          <div className={classes.transitionWrapper(true)} />
          <span className={classes.label}>
            transition (always true)
          </span>
        </div>
        <div className={classes.viewer}>
          <div className={classes.transitionWrapper(isShown)} />
          <span className={classes.label}>
            transition (based on state)
          </span>
        </div>
        <div className={classes.viewer}>
          <div
            className={classes.animateWrapper(1, 'both', isShown)} />
          <span className={classes.label}>
            Animate count 1 (both & state)
          </span>
        </div>
      </div>
    </div>
  );
}

export default Landing;
