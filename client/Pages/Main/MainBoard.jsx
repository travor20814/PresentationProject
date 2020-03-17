// @flow
import React from 'react';
import { css } from 'emotion';
import {
  Switch,
  Route,
} from 'react-router-dom';

// components
import SiteHeader from '../../Views/Main/SiteHeader';
import LandingWrapper from './LandingWrapper';

const classes = {
  placement: css`
    width: 100%;
    height: 100%;
    overflow: auto;
  `,
  mainWrapper: css`
    width: 100%;
    height: auto;
    min-height: 100vh;
    padding: 24px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
  `,
  mainView: css`
    flex: 1;
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: flex-start;
  `,
};

function MainBoard() {
  return (
    <div className={classes.placement}>
      <div className={classes.mainWrapper}>
        <SiteHeader />
        <main className={classes.mainView}>
          <Switch>
            <Route path="/" component={LandingWrapper} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default MainBoard;
