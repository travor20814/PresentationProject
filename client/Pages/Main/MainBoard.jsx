// @flow
import React, { PureComponent } from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

// components
import LandingWrapper from './LandingWrapper.jsx';

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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'relative',
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

class MainBoard extends PureComponent<Props> {
  render() {
    return (
      <div style={styles.placement}>
        <div style={styles.mainWrapper}>
          <main style={styles.mainView}>
            <Switch>
              <Route path="/" component={LandingWrapper} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default MainBoard;
