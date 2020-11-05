// @flow
import React, { useState } from 'react';
import { css, cx } from 'emotion';

import Modal from '../Modal/ModalContainer';

const classes = {
  wrapper: css`
    width: 100%;
    height: 40px;
    border: 1px solid #1a1a1a;
    position: relative;
  `,
  activeWrapper: css`
    border: 1px solid #ff0000;
  `,
  toggleBtn: css`
    width: 100%;
    height: 100%;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border: none;
  `,
  selectedValue: css`
    font-size: 16px;
    font-weight: 400;
    color: #1a1a1a;
    letter-spacing: 1px;
  `,
  modalWrapper: css`
    width: 500px;
    height: auto;
    padding: 0 12px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 12px;
    background-color: #fff;
  `,
  option: css`
    width: 100%;
    border: 0;
    outline: 0;
    background-color: transparent;
    padding: 12px 0;
    font-size: 16px;
    color: #1a1a1a;
    letter-spacing: 1px;
  `,
};

const options = [{
  id: '1',
  name: '選項1',
}, {
  id: '2',
  name: '選項2',
}];

function ModalSelector() {
  const [isModalOpen, toggleModalOpen] = useState(false);
  const [selectedValue, setValue] = useState(null);

  return (
    <div className={cx(classes.wrapper, isModalOpen && classes.activeWrapper)}>
      <button
        type="button"
        onClick={() => toggleModalOpen(prev => !prev)}
        className={classes.toggleBtn}>
        <span className={classes.selectedValue}>
          {selectedValue || '請選擇'}
        </span>
      </button>
      <Modal
        shown={isModalOpen}
        onClose={() => toggleModalOpen(false)}>
        <div className={classes.modalWrapper}>
          {options.map(option => (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setValue(option.name);
                toggleModalOpen(false);
              }}
              className={classes.option}>
              {option.name}
            </button>
          ))}
        </div>
      </Modal>
    </div>
  );
}

export default ModalSelector;
