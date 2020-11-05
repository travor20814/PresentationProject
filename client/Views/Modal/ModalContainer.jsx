// @flow
import React from 'react';
import { css } from 'emotion';
import ReactDOM from 'react-dom';

import { FloatingContainerContext } from '../../Constants/context';

const containerShown = css`
  opacity: 1;
  pointer-events: auto;
  visibility: visible;
`;

const classes = {
  container: shown => css`
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    background-color: rgba(12, 12, 12, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.12s ease-in;
    visibility: hidden;

    ${shown ? containerShown : null};
  `,
  modalWrapper: css`
    width: auto;
    height: auto;
    position: relative;
  `,
  closeBtnWrapper: css`
    position: absolute;
    top: 0;
    right: -52px;
  `,
  closeBtn: css`
    position: absolute;
    right: -40px;
    top: -40px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: 500;
    line-height: 20px;
    border: 1px solid #1a1a1a;
    color: #1a1a1a;
  `,
};

function ModalContainer({
  shown,
  children,
  onClose,
}: {
  shown?: boolean,
  children: Node,
  onClose?: ?Function,
}) {
  return (
    <div
      aria-hidden={!shown}
      aria-modal="true"
      role="dialog"
      className={classes.container(shown)}>
      <div className={classes.modalWrapper}>
        {children}
        <button
          type="button"
          onClick={onClose}
          className={classes.closeBtn}>
          x
        </button>
      </div>
    </div>
  );
}

ModalContainer.defaultProps = {
  onClose: null,
  shown: true,
};

export default ({
  shown,
  children,
  onClose,
}: Props) => (
  <FloatingContainerContext.Consumer>
    {container => (
      ReactDOM.createPortal(
        <ModalContainer
          shown={shown}
          onClose={onClose}>
          {children}
        </ModalContainer>,
        container,
      )
    )}
  </FloatingContainerContext.Consumer>
);
