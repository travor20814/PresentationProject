import React, { memo } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
  },
  titleUseVariable: {
    fontSize: 24,
    color: 'var(--secondary-color)',
  },
};

function Landing() {
  return (
    <div style={styles.wrapper}>
      <span style={styles.titleUseVariable}>
        Welcome to my presentation!
      </span>
    </div>
  );
}

export default memo(
  radium(
    Landing
  )
);
