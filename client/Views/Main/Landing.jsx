// @flow
import React from 'react';
import { css } from 'emotion';

const classes = {
  wrapper: css`
    width: 100%;
    height: auto;
  `,
};

function Landing() {
  return (
    <div className={classes.wrapper}>
      Welcome to my presentation!
    </div>
  );
}

export default Landing;
