// @flow
import React, {
  memo,
} from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
  },
  colorSwitchBar: {
    width: '100%',
    height: 'auto',
    padding: '12px 16px',
    border: '1px solid var(--secondary-color)',
    borderRadius: 3,
    backgroundColor: 'rgba(21, 50, 65, 0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  colorSwitchBtn: {
    width: 24,
    height: 24,
    padding: 0,
    margin: '0 12px 0 0',
    border: '1px solid #000',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    display: 'block',
  },
  articleWrapper: {
    width: '100%',
    height: 'auto',
    padding: 24,
  },
  title: {
    fontSize: 24,
    color: 'var(--secondary-color)',
  },
  description: {
    fontSize: 16,
    color: 'var(--secondary-color)',
  },
};

type Props = {
  onClick: Function,
};

function ColorSwitch({
  onClick,
}: Props) {
  return (
    <div style={styles.wrapper}>
      <div style={styles.colorSwitchBar}>
        <button
          key="white-theme-btn"
          type="button"
          onClick={() => onClick('white')}
          style={[
            styles.colorSwitchBtn,
            {
              backgroundColor: '#fff',
            },
          ]} />
        <button
          key="black-theme-btn"
          type="button"
          onClick={() => onClick('black')}
          style={[
            styles.colorSwitchBtn,
            {
              backgroundColor: '#000',
            },
          ]} />
      </div>
      <article style={styles.articleWrapper}>
        <h2 style={styles.title}>
          文章標題
        </h2>
        <p style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit
          in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
    </div>
  );
}

export default memo(
  radium(
    ColorSwitch
  )
);
