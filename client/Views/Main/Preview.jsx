// @flow
import React, { memo } from 'react';

const styles = {
  wrapper: {
    width: 500,
    height: 'auto',
    padding: 24,
    margin: '12px 0',
    backgroundColor: 'rgba(156, 156, 156, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

type Props = {
  values: any,
};

function Preview({
  values,
}: Props) {
  if (!values) return null;

  return (
    <div style={styles.wrapper}>
      <pre>{JSON.stringify(values, 0, 2)}</pre>
    </div>
  );
}

export default memo(Preview);
