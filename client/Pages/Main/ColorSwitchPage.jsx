import React, {
  memo,
  useContext,
} from 'react';

import { ThemeContext } from '../../Constant/context.js';
// components
import ColorSwitch from '../../Views/Main/ColorSwitch.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
  },
};

function ColorSwitchPage() {
  const {
    setThemeToBlack,
    setThemeToWhite,
  } = useContext(ThemeContext);

  return (
    <div style={styles.wrapper}>
      <ColorSwitch
        onClick={(type) => {
          switch (type) {
            case 'white':
              return setThemeToWhite();
            case 'black':
              return setThemeToBlack();
            default:
              return null;
          }
        }} />
    </div>
  );
}

export default memo(ColorSwitchPage);
