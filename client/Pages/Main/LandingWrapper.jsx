import React from 'react';
import { css } from 'emotion';

// components
import Landing from '../../Views/Main/Landing.jsx';

const classes = {
  wrapper: css`
    width: 100%;
    height: 100%;
  `,
};

function LandingWrapper() {
  return (
    <div className={classes.wrapper}>
      <Landing />
    </div>
  );
}

export default LandingWrapper;
