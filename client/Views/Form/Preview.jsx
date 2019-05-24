// @flow
import React, { memo } from 'react';
import radium from 'radium';

const styles = {
  previewWrapper: {
    width: 500,
    height: 'auto',
    margin: '12px 0',
    padding: '12px 0',
    backgroundColor: 'rgba(156, 156, 156, 0.4)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

function Preview({
  values,
}: {
  values: any,
}) {
  if (!values) return null;

  return (
    <div style={styles.previewWrapper}>
      <pre>{JSON.stringify(values, 0, 2)}</pre>
    </div>
  );
}

export default memo(
  radium(
    Preview
  )
);
