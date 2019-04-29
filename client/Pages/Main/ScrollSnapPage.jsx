import React, {
  memo,
} from 'react';

// components
import ScrollSnap from '../../Views/Main/ScrollSnap.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
  },
};

function ScrollSnapPage() {
  return (
    <div style={styles.wrapper}>
      <ScrollSnap />
    </div>
  );
}

export default memo(ScrollSnapPage);
