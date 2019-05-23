// @flow
import React from 'react';
import radium from 'radium';

const styles = {
  selectGroup: {
    width: 'auto',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  selectSvgWrap: {
    position: 'absolute',
    right: 16,
    top: 16,
    width: 16,
    height: 16,
    pointerEvents: 'none',
    borderRadius: '0 1px 1px 0',
  },
  selector: {
    width: 'auto',
    height: 'auto',
    border: '1px solid #9b9b9b',
    backgroundColor: 'transparent',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    borderRadius: 2,
    padding: '8px 35px 8px 14px',
    cursor: 'pointer',
    outline: 'none',
  },
  selectorTrangle: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderWidth: '6px 6px 0 6px',
    borderColor: '#9b9b9b transparent transparent transparent',
  },
  errorSelect: {
    border: '1px solid rgb(149, 28, 28)',
  },
};

type Props = {
  input: {
    name: string | number,
    value: string,
    onChange: Function,
  },
  options?: Array<{
    id: number,
    name: string,
  }>,
  style?: Object,
  placeholder?: string,
  meta: {
    error: string,
  },
  disabled?: boolean,
  customOnChange?: Function,
};

function Selector({
  input: {
    value,
    onChange,
  },
  options,
  style,
  placeholder,
  disabled,
  meta: {
    error,
  },
}: Props) {
  const customStyles = Array.isArray(style) ? style : [style];

  return (
    <div style={styles.selectGroup}>
      {error ? (
        <span style={{ display: 'block', color: 'rgb(149, 28, 28)' }}>
          !
        </span>
      ) : null}
      <select
        disabled={disabled}
        style={[
          styles.selector,
          error && styles.errorSelect,
          ...customStyles,
        ]}
        value={value}
        onChange={e => onChange(e.target.value)}>
        {placeholder ? (
          <option key="-1" value="-1">
            {placeholder}
          </option>
        ) : null}
        {(options || []).map(t => (
          <option
            key={t.id}
            value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
      <div style={styles.selectSvgWrap}>
        <div style={styles.selectorTrangle} />
      </div>
    </div>
  );
}

Selector.defaultProps = {
  options: [],
  style: {},
  placeholder: '無',
  disabled: false,
  customOnChange: null,
};

export default radium(Selector);
