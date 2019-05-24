// @flow
import React, { memo } from 'react';
import radium from 'radium';
import {
  Field,
} from 'react-final-form';

// components
import Input from './Form/Input.jsx';
import SubmitButton from './Form/SubmitButton.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: 500,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: '#000',
  },
  inputGroup: {
    width: '100%',
    height: 'auto',
    padding: '12px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  errorMsg: {
    fontSize: 16,
    lineHeight: '24px',
    color: 'rgb(241, 48, 94)',
  },
};

type Props = {
  handleSubmit: Function,
  submitError: string,
};

function SimpleForm({
  handleSubmit,
  submitError,
}: Props) {
  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h1 style={styles.title}>
        Simple Form
      </h1>
      <div style={styles.inputGroup}>
        <span style={styles.label}>
          姓名：
        </span>
        <Field
          name="name"
          placeholder="請輸入姓名"
          component={Input} />
      </div>
      <div style={styles.inputGroup}>
        <span style={styles.label}>
          信箱：
        </span>
        <Field
          name="email"
          placeholder="請輸入 email 信箱"
          component={Input} />
      </div>
      {submitError ? (
        <span style={styles.errorMsg}>
          {submitError}
        </span>
      ) : null}
      <SubmitButton label="送出" />
    </form>
  );
}

export default memo(radium(SimpleForm));
