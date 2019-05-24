import React, { memo } from 'react';
import {
  Form,
} from 'react-final-form';
import { FORM_ERROR } from 'final-form';

// components
import SimpleForm from '../../Views/SimpleForm.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
        initialValues={{
          name: 'Test name',
          email: '123@gmail.com',
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
          <SimpleForm
            handleSubmit={handleSubmit}
            submitError={submitError} />
        )}
      </Form>
    </div>
  );
}

export default memo(BasicFormPage);
