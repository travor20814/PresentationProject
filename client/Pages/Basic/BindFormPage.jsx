import React, { memo } from 'react';
import {
  Form,
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
  innerWrapper: {
    width: 500,
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};

function BasicFormPage() {
  return (
    <div style={styles.wrapper}>
      <Form
        onSubmit={(values) => {
          const {
            cityId,
            zoneId,
          } = values;
          console.log(cityId, zoneId);
          return null;
        }}
        initialValues={{
          cityId: -1,
          zoneId: -1,
        }}>
        {({
          values,
          submitError,
          handleSubmit,
        }) => (
          <div style={styles.innerWrapper}>
            <BindForm
              handleSubmit={handleSubmit}
              submitError={submitError} />
            <Preview values={values} />
          </div>
        )}
      </Form>
    </div>
  );
}

export default memo(BasicFormPage);
