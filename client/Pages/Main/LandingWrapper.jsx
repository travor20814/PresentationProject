import React, { memo } from 'react';

// components
import Landing from '../../Views/Main/Landing';

const styles = {
  wrapper: {
    width: '100%',
    height: '100%',
  },
};

function LandingWrapper() {
  return (
    <div style={styles.wrapper}>
      <Landing />
    </div>
  );
}

export default memo(LandingWrapper);
