// @flow
import React from 'react';
import { css } from 'emotion';
import { NavLink } from 'react-router-dom';

const classes = {
  wrapper: css`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
  linkBtn: css`
    width: auto;
    height: auto;
    padding: 6px 12px;
    background-color: transparent;
    border: 1px solid #000;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 400;
    color: #000;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
  `,
};

const linkActiveStyle = {
  backgroundColor: 'rgb(117, 179, 203)',
};

function SiteHeader() {
  return (
    <header className={classes.wrapper}>
      <NavLink
        to={{ pathname: '/' }}
        className={classes.linkBtn}
        activeStyle={linkActiveStyle}>
        連結1
      </NavLink>
    </header>
  );
}

export default SiteHeader;
