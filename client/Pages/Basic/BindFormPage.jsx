import React, { memo } from 'react';
import {
  Form,
  FormSpy,
} from 'react-final-form';

// components
import BindForm from '../../Views/BindForm.jsx';
import Preview from '../../Views/Form/Preview.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  renderCount: {
    fontSize: 18,
    fontWeight: 500,
    color: 'rgb(207, 59, 27)',
  },
  innerWrapper: {
    width: 500,
    height: 'auto',
    margin: 12,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};

let renderCount1 = 0;
let renderCount2 = 0;

function BindFormPage() {
  return (
    <div style={styles.wrapper}>
      <Form
        onSubmit={(values) => {
          const {
            cityId,
            zoneId,
            email,
          } = values;
          console.log(cityId, zoneId, email);
          return null;
        }}
        initialValues={{
          cityId: -1,
          zoneId: -1,
          email: '',
        }}>
        {({
          values,
          submitError,
          handleSubmit,
        }) => (
          <div style={styles.innerWrapper}>
            <span style={styles.renderCount}>
              {++renderCount1}
            </span>
            <BindForm
              handleSubmit={handleSubmit}
              submitError={submitError} />
            <Preview values={values} />
          </div>
        )}
      </Form>
      <Form
        onSubmit={(values) => {
          const {
            cityId,
            zoneId,
            email,
          } = values;
          console.log(cityId, zoneId, email);
          return null;
        }}
        subscription={{
          submitting: true,
        }}
        initialValues={{
          cityId: -1,
          zoneId: -1,
          email: '',
        }}>
        {({
          submitError,
          handleSubmit,
        }) => (
          <div style={styles.innerWrapper}>
            <span style={styles.renderCount}>
              {++renderCount2}
            </span>
            <BindForm
              handleSubmit={handleSubmit}
              submitError={submitError} />
            <FormSpy subscription={{ values: true }}>
              {({
                values,
              }) => (
                <Preview values={values} />
              )}
            </FormSpy>
          </div>
        )}
      </Form>
    </div>
  );
}

export default memo(BindFormPage);
