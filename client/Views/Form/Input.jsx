// @flow
import React, { memo } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: 'auto',
    height: '100%',
    flex: 1,
    borderTop: '1px solid #9b9b9b',
    borderLeft: '1px solid #9b9b9b',
    borderBottom: '1px solid #9b9b9b',
    borderRight: '1px solid #9b9b9b',
    borderRadius: 8,
    padding: '12px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 15,
    fontWeight: 400,
    color: '#000',
    border: 0,
    margin: 0,
    padding: '0 4px',
    backgroundColor: 'transparent',
    outline: 0,
  },
  error: {
    borderTop: '1px solid rgb(232, 67, 67)',
    borderLeft: '1px solid rgb(232, 67, 67)',
    borderBottom: '1px solid rgb(232, 67, 67)',
    borderRight: '1px solid rgb(232, 67, 67)',
  },
  disabled: {
    backgroundColor: '#9b9b9b',
  },
};

type Props = {
  className?: string,
  type?: string,
  input: {
    value: string | number,
    onChange: Function,
  },
  meta: {
    error: string,
  },
  createRef: Function,
  style?: Object,
  wrapperStyle?: Object,
  placeholder: string,
  disabled?: boolean,
};

function Input({
  className,
  type,
  input: {
    value,
    onChange,
  },
  meta: {
    error,
  },
  createRef,
  style,
  wrapperStyle,
  placeholder,
  disabled,
}: Props) {
  return (
    <div
      style={[
        styles.wrapper,
        wrapperStyle,
        error && styles.error,
        disabled && styles.disabled,
      ]}>
      <input
        type={type}
        className={className}
        ref={(r) => {
          if (createRef) {
            createRef(r);
          }
        }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        style={[
          styles.input,
          style,
        ]} />
    </div>
  );
}

Input.defaultProps = {
  type: 'text',
  className: null,
  style: null,
  wrapperStyle: null,
  disabled: false,
};

export default memo(
  radium(
    Input
  )
);
