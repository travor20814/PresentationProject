// @flow
import React, {
  memo,
  useState,
} from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import { ThemeContext } from '../../Constant/context.js';
// components
import SiteHeader from '../../Views/Main/SiteHeader.jsx';
import LandingWrapper from './LandingWrapper.jsx';
import ColorSwitchPage from './ColorSwitchPage.jsx';

const styles = {
  placement: {
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  mainWrapper: {
    width: '100%',
    height: 'auto',
    minHeight: '100vh',
    padding: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
    backgroundColor: 'var(--primary-color)',
  },
  mainView: {
    flex: 1,
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
};

type Props = {

};

function MainBoard() {
  const [themeClassName, setThemeClassName] = useState('white-theme');

  return (
    <div style={styles.placement}>
      <ThemeContext.Provider
        value={{
          setThemeToBlack: () => setThemeClassName('black-theme'),
          setThemeToWhite: () => setThemeClassName('white-theme'),
        }}>
        <div className={themeClassName} style={styles.mainWrapper}>
          <SiteHeader />
          <main style={styles.mainView}>
            <Switch>
              <Route path="/switch-theme" component={ColorSwitchPage} />
              <Route path="/" component={LandingWrapper} />
            </Switch>
          </main>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default memo(MainBoard);
