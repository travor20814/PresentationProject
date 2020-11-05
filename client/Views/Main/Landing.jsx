// @flow
import React from 'react';
import { css } from 'emotion';

import Selector from '../Tools/Selector';

const classes = {
  wrapper: css`
    width: 100%;
    height: auto;
  `,
  table: css`
    width: 100%;
    max-width: 720px;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
  `,
  row: css`
    width: 100%;
    display: grid;
    grid-template-columns: 160px 1fr;
    grid-column-gap: 24px;
    align-items: center;
  `,
  rowLabel: css`
    font-size: 16px;
    font-weight: 500;
    color: #1a1a1a;
    letter-spacing: 1px;
  `,
};

function Landing() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.table}>
        <div className={classes.row}>
          <span className={classes.rowLabel}>
            一般 Selector：
          </span>
          <Selector />
        </div>
      </div>
    </div>
  );
}

export default Landing;
