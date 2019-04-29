import React, { memo } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
  },
};

function Landing() {
  return (
    <div style={styles.wrapper}>
      Hello world!
    </div>
  );
}

export default memo(
  radium(
    Landing
  )
);
