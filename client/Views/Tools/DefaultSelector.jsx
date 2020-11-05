// @flow
import React from 'react';
import { css } from 'emotion';

const classes = {
  wrapper: css`
    width: 100%;
    height: 40px;
    font-size: 16px;
    color: #1a1a1a;
    letter-spacing: 1px;
    padding: 0 12px;
    border: 1px solid #1a1a1a;
    cursor: pointer;
  `,
};

const options = [{
  id: '1',
  name: '選項1',
}, {
  id: '2',
  name: '選項2',
}];

function Selector() {
  return (
    <select className={classes.wrapper}>
      {options.map(option => (
        <option key={option.id} value={option.name}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default Selector;
