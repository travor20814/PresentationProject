// @flow
import React, { useState } from 'react';
import { css, cx } from 'emotion';

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
    position: absolute;
    z-index: 1;
    left: 0;
    top: 40px;
    width: 100%;
    height: auto;
    padding: 0 12px;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 12px;
    box-shadow: 0px 0px 5px -1px rgba(0, 0, 0, 0.84);
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

const MODAL_ID = 'option-modal-01';

function Selector() {
  const [isModalOpen, toggleModalOpen] = useState(false);
  const [selectedValue, setValue] = useState(null);

  return (
    <div className={cx(classes.wrapper, isModalOpen && classes.activeWrapper)}>
      <button
        type="button"
        role="listbox"
        aria-activedescendant={selectedValue}
        aria-owns={MODAL_ID}
        onClick={() => toggleModalOpen(prev => !prev)}
        className={classes.toggleBtn}>
        <span className={classes.selectedValue}>
          {selectedValue || '請選擇'}
        </span>
      </button>
      {isModalOpen ? (
        <div id={MODAL_ID} className={classes.modalWrapper}>
          {options.map(option => (
            <button
              key={option.id}
              id={option.name}
              role="option"
              aria-selected={selectedValue === option.name}
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
      ) : null}
    </div>
  );
}

export default Selector;
