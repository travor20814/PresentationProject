import React, { memo } from 'react';
import {
  Form,
  Field,
} from 'react-final-form';
import { FORM_ERROR } from 'final-form';

// components
import Input from '../../Views/Form/Input.jsx';
import SubmitButton from '../../Views/Form/SubmitButton.jsx';

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

function BasicFormPage() {
  return (
    <div style={styles.wrapper}>
      <Form
        onSubmit={(values) => {
          const {
            name,
            email,
          } = values;

          if (email) {
            const emailReg = new RegExp(
              /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
            );

            if (!email.match(emailReg)) {
              // like throw new SubmissionError => meta.submitError
              return { email: 'Wrong Email Format.' };
            }
          }

          if (name !== 'rytass') {
            return {
              [FORM_ERROR]: 'WRONG NAME.', // submitError
            };
          }

          return null;
        }}
        validate={(values) => {
          const errors = {};

          if (!values.name) {
            errors.name = 'Required';
          }

          if (!values.email) {
            errors.email = 'Required';
          }
          // meta.error
          return errors;
        }}>
        {({
          submitError,
          handleSubmit,
        }) => (
          <form style={styles.form} onSubmit={handleSubmit}>
            <h1 style={styles.title}>
              Form Field Submit/Validate/Error
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
        )}
      </Form>
    </div>
  );
}

export default memo(BasicFormPage);
