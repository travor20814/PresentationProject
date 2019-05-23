// @flow
import React, { memo } from 'react';
import radium from 'radium';

const styles = {
  button: {
    width: 'auto',
    height: 'auto',
    padding: '6px 24px',
    fontSize: 16,
    fontWeight: 500,
    color: '#000',
    border: '1px solid #000',
    borderRadius: 3,
    backgroundColor: 'transparent',
    outline: 0,
    cursor: 'pointer',
    opacity: 1,
    ':hover': {
      opacity: 0.88,
    },
  },
  disabled: {
    opacity: 0.3,
  },
};

type Props = {
  label?: string,
  style: object,
  disabled?: boolean,
};

function SubmitButton({
  label,
  style = {},
  disabled,
}: Props) {
  const customStyles = Array.isArray(style) ? style : [style];

  return (
    <button
      type="submit"
      disabled={disabled}
      style={[
        styles.button,
        ...customStyles,
        disabled && styles.disabled,
      ]}>
      {label}
    </button>
  );
}

SubmitButton.defaultProps = {
  disabled: false,
  label: '送出',
};

export default memo(
  radium(
    SubmitButton
  )
);
