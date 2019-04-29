import React, { memo } from 'react';
import radium from 'radium';
import { NavLink } from 'react-router-dom';

const styles = {
  wrapper: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  linkBtn: {
    width: 'auto',
    height: 'auto',
    padding: '6px 12px',
    margin: '0 12px 0 0',
    backgroundColor: 'transparent',
    border: '1px solid var(--secondary-color)',
    borderRadius: 3,
    fontSize: 16,
    fontWeight: 400,
    color: 'var(--secondary-color)',
    textAlign: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  linkActive: {
    backgroundColor: 'rgb(117, 179, 203)',
  },
};

function SiteHeader() {
  return (
    <header style={styles.wrapper}>
      <NavLink
        to={{ pathname: '/switch-theme' }}
        style={styles.linkBtn}
        activeStyle={styles.linkActive}>
        主題切換功能
      </NavLink>
      <NavLink
        to={{ pathname: '/shape-article' }}
        style={styles.linkBtn}
        activeStyle={styles.linkActive}>
        文繞圖(shape)
      </NavLink>
    </header>
  );
}

export default memo(
  radium(
    SiteHeader
  )
);
