// @flow
import React from 'react';
import { css } from 'emotion';

const classes = {
  wrapper: css`
    width: 500px;
    height: auto;
    padding: 24px;
    margin: 12px 0;
    background-color: rgba(156, 156, 156, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
  `,
};

type Props = {
  values: any,
};

function Preview({
  values,
}: Props) {
  if (!values) return null;

  return (
    <div className={classes.wrapper}>
      <pre>{JSON.stringify(values, 0, 2)}</pre>
    </div>
  );
}

export default Preview;
