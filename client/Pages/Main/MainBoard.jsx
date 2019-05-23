// @flow
import React, { PureComponent } from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// components
import LandingWrapper from './LandingWrapper.jsx';
import SiteHeader from '../../Views/Main/SiteHeader.jsx';

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
    padding: 24,
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
          <SiteHeader />
          <main style={styles.mainView}>
            <Switch>
              <Route path="/basic-form" component={null} />
              <Route path="/" component={LandingWrapper} />
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default MainBoard;
