// @flow
import React, { memo } from 'react';
import radium from 'radium';
import {
  Field,
} from 'react-final-form';

import { normalizePhone } from '../helper/form.js';
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

function ParserForm({
  handleSubmit,
  submitError,
}: Props) {
  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h1 style={styles.title}>
        Parser Form
      </h1>
      <div style={styles.inputGroup}>
        <span style={styles.label}>
          帳號：
        </span>
        <Field
          name="account"
          placeholder="請輸入帳號（限大寫）"
          parse={v => v && v.toUpperCase()}
          format={v => v && v.toUpperCase()}
          component={Input} />
      </div>
      <div style={styles.inputGroup}>
        <span style={styles.label}>
          家用電話：
        </span>
        <Field
          name="phone"
          placeholder="(XX)XXXX-XXXX"
          parse={normalizePhone}
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

export default memo(radium(ParserForm));
