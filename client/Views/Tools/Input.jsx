// @flow
import React from 'react';
import { css } from 'emotion';

const classes = {
  wrapper: css`
    width: 100%;
    height: auto;
    padding: 0 12px;
    border: 1px solid #1a1a1a;

    &:focus-within {
      border: 1px solid #FF0000;
    }
  `,
  input: css`
    width: 100%;
    height: 40px;
    border: none;
    outline: 0;
    font-size: 16px;
    color: #1a1a1a;
    letter-spacing: 1px;
  `,
};

function Input({
  required,
}: {
  required?: boolean,
}) {
  return (
    <div className={classes.wrapper}>
      <input
        type="text"
        aria-required={required}
        placeholder="Type something..."
        className={classes.input} />
    </div>
  );
}

Input.defaultProps = {
  required: false,
};

export default Input;
