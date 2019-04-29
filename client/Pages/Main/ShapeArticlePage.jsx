import React, {
  memo,
  useState,
} from 'react';

// components
import ShapeArticle from '../../Views/Main/ShapeArticle.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
    padding: 12,
  },
};

function ShapeArticlePage() {
  const [
    options,
    setOptions,
  ] = useState({
    mode: 'default',
  });

  return (
    <div style={styles.wrapper}>
      <ShapeArticle
        options={options}
        setOptions={obj => setOptions({
          ...options,
          ...obj,
        })} />
    </div>
  );
}

export default memo(
  ShapeArticlePage
);
