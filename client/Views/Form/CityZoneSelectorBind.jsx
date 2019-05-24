import React, { memo } from 'react';
import {
  Field,
} from 'react-final-form';

// components
import Selector from './Selector.jsx';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
    padding: '12px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  field: {
    flex: 1,
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};

const cityZones = [{
  id: 1,
  name: '臺北市',
  zones: [{
    id: 1,
    name: '大安區',
  }, {
    id: 2,
    name: '中山區',
  }],
}, {
  id: 2,
  name: '新北市',
  zones: [{
    id: 3,
    name: '板橋區',
  }, {
    id: 4,
    name: '新莊區',
  }],
}];

function CityZoneSelectorBind() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.field}>
        <Field name="zoneId">
          {({
            input: {
              onChange: zoneOnChange,
            },
          }) => (
            <Field
              name="cityId"
              options={cityZones}
              placeholder="請選擇縣市"
              parse={v => v && parseInt(v, 10)}
              customOnChange={() => {
                zoneOnChange(-1);
              }}
              component={Selector} />
          )}
        </Field>
      </div>
      <div style={styles.field}>
        <Field name="cityId">
          {({
            input: {
              value,
            },
          }) => {
            const currentCity = cityZones.find(c => c.id === parseInt(value, 10)) || null;

            return (
              <Field
                name="zoneId"
                options={currentCity ? currentCity.zones : []}
                placeholder="請選擇區域"
                parse={v => v && parseInt(v, 10)}
                component={Selector} />
            );
          }}
        </Field>
      </div>
    </div>
  );
}

export default memo(CityZoneSelectorBind);
