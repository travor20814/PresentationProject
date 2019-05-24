import React, { memo } from 'react';
import {
  Form,
} from 'react-final-form';

// components
import ParserForm from '../../Views/ParserForm.jsx';
import Preview from '../../Views/Form/Preview.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerWrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};

function ParserFormPage() {
  return (
    <div style={styles.wrapper}>
      <Form
        onSubmit={(values) => {
          const {
            account,
            phone,
          } = values;

          console.log(account, phone);
        }}
        initialValues={{
          account: '',
          phone: '',
        }}>
        {({
          submitError,
          handleSubmit,
          values,
        }) => (
          <div style={styles.innerWrapper}>
            <ParserForm
              handleSubmit={handleSubmit}
              submitError={submitError} />
            <Preview values={values} />
          </div>
        )}
      </Form>
    </div>
  );
}

export default memo(ParserFormPage);
