// @flow
import React, { useState } from 'react';
import { css } from 'emotion';

import DefaultSelector from '../Tools/DefaultSelector';
import Selector from '../Tools/Selector';
import ModalSelector from '../Tools/ModalSelector';
import Input from '../Tools/Input';

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
    margin: 0 0 24px;
  `,
  rowLabel: css`
    font-size: 16px;
    font-weight: 500;
    color: #1a1a1a;
    letter-spacing: 1px;
  `,
};

function Landing() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  return (
    <div className={classes.wrapper}>
      <div className={classes.table}>
        <div className={classes.row}>
          <span className={classes.rowLabel}>
            預設 Selector：
          </span>
          <DefaultSelector />
        </div>
        <div className={classes.row}>
          <span className={classes.rowLabel}>
            客製 Selector：
          </span>
          <Selector />
        </div>
        <div className={classes.row}>
          <span className={classes.rowLabel}>
            pop-up Selector：
          </span>
          <ModalSelector />
        </div>
        <div className={classes.row}>
          <span className={classes.rowLabel}>
            pop-up Selector2：
          </span>
          <ModalSelector />
        </div>
        <div className={classes.row}>
          <span className={classes.rowLabel}>
            Input：
          </span>
          <Input />
        </div>
        <div className={classes.row}>
          <span className={classes.rowLabel}>
            Required Input：
          </span>
          <Input required />
        </div>
        <div className={classes.row}>
          <button
            type="button"
            aria-controls="display-counter display-counter2"
            onClick={() => {
              if (counter >= 4) {
                setCounter2(prev => prev - 1);
              } else {
                setCounter(prev => prev + 1);
              }
            }}>
            ++
          </button>
          <span id="display-counter" aria-live="polite" className={classes.rowLabel}>
            {counter}
          </span>
        </div>
        <span id="display-counter2" aria-live="assertive" className={classes.rowLabel}>
          {counter2}
        </span>
      </div>
    </div>
  );
}

export default Landing;
