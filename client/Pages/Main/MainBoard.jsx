// @flow
import React, {
  memo,
  useReducer,
} from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';

import {
  ReducerContext,
  DispatchContext,
} from '../../Constant/context';
import {
  CACHE_MEMBER_TOKEN,
  CLEAR_MEMBER_TOKEN,
  CACHE_INPUT,
} from '../../Constant/actions';
// components
import LandingWrapper from './LandingWrapper.jsx';
import SiteHeader from '../../Views/Main/SiteHeader.jsx';
import BasicFormPage from '../Basic/BasicFormPage.jsx';
import ParserFormPage from '../Basic/ParserFormPage.jsx';
import BindFormPage from '../Basic/BindFormPage.jsx';

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

const initialState = {
  accessToken: localStorage.getItem('accessToken') || null,
  email: null,
};

function reducer(state, action) {
  switch (action.type) {
    case CACHE_MEMBER_TOKEN:
      return {
        ...state,
        accessToken: action.accessToken || null,
      };
    case CLEAR_MEMBER_TOKEN:
      return {
        ...state,
        accessToken: null,
      };
    case CACHE_INPUT:
      return {
        ...state,
        email: action.email || null,
      };
    default:
      return state;
  }
}

function MainBoard() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReducerContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <div style={styles.placement}>
          <div style={styles.mainWrapper}>
            <SiteHeader />
            <main style={styles.mainView}>
              <Switch>
                <Route path="/bind-form" component={BindFormPage} />
                <Route path="/parser-form" component={ParserFormPage} />
                <Route path="/basic-form" component={BasicFormPage} />
                <Route path="/" component={LandingWrapper} />
              </Switch>
            </main>
          </div>
        </div>
      </DispatchContext.Provider>
    </ReducerContext.Provider>
  );
}

export default memo(MainBoard);
