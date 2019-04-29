import React, { memo } from 'react';
import radium from 'radium';

const styles = {
  wrapper: {
    width: '100%',
    height: 'auto',
    padding: '12px 0',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  eventGroup: {
    width: 'auto',
    height: 'auto',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  eventName: {
    fontSize: 24,
    fontWeight: 500,
    marginTop: 12,
    color: 'var(--secondary-color)',
  },
  scrollContainer: {
    width: 300,
    height: 350,
    border: '1px solid var(--secondary-color)',
    flex: 'none',
    overflow: 'auto',
  },
  horizontalScroll: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  verticalScroll: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  viewBlock: {
    flex: 'none',
    width: 250,
    height: 300,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    scrollSnapAlign: 'center',
  },
  viewBlockText: {
    fontSize: 18,
    fontWeight: 700,
    color: 'var(--secondary-color)',
  },
  withXMandatory: {
    scrollSnapType: 'x mandatory',
  },
  withYMandatory: {
    scrollSnapType: 'y mandatory',
  },
  withYProximity: {
    scrollSnapType: 'y proximity',
  },
};

function ScrollSnap() {
  return (
    <div style={styles.wrapper}>
      <section style={styles.eventGroup}>
        <div style={[styles.scrollContainer, styles.horizontalScroll]}>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(61, 166, 172)' }]}>
            <span style={styles.viewBlockText}>
              1
            </span>
          </div>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(63, 221, 55)' }]}>
            <span style={styles.viewBlockText}>
              2
            </span>
          </div>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(61, 166, 172)' }]}>
            <span style={styles.viewBlockText}>
              3
            </span>
          </div>
        </div>
        <span style={styles.eventName}>
          Default
        </span>
      </section>
      <section style={styles.eventGroup}>
        <div style={[styles.scrollContainer, styles.horizontalScroll, styles.withXMandatory]}>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(61, 166, 172)' }]}>
            <span style={styles.viewBlockText}>
              1
            </span>
          </div>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(63, 221, 55)' }]}>
            <span style={styles.viewBlockText}>
              2
            </span>
          </div>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(61, 166, 172)' }]}>
            <span style={styles.viewBlockText}>
              3
            </span>
          </div>
        </div>
        <span style={styles.eventName}>
          scroll-snap-type: x mandatory
        </span>
      </section>
      <section style={styles.eventGroup}>
        <div style={[styles.scrollContainer, styles.verticalScroll, styles.withYMandatory]}>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(61, 166, 172)' }]}>
            <span style={styles.viewBlockText}>
              1
            </span>
          </div>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(63, 221, 55)' }]}>
            <span style={styles.viewBlockText}>
              2
            </span>
          </div>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(61, 166, 172)' }]}>
            <span style={styles.viewBlockText}>
              3
            </span>
          </div>
        </div>
        <span style={styles.eventName}>
          scroll-snap-type: y mandatory
        </span>
      </section>
      <section style={styles.eventGroup}>
        <div style={[styles.scrollContainer, styles.verticalScroll, styles.withYProximity]}>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(61, 166, 172)' }]}>
            <span style={styles.viewBlockText}>
              1
            </span>
          </div>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(63, 221, 55)' }]}>
            <span style={styles.viewBlockText}>
              2
            </span>
          </div>
          <div style={[styles.viewBlock, { backgroundColor: 'rgb(61, 166, 172)' }]}>
            <span style={styles.viewBlockText}>
              3
            </span>
          </div>
        </div>
        <span style={styles.eventName}>
          scroll-snap-type: y proximity
        </span>
      </section>
    </div>
  );
}

export default memo(
  radium(
    ScrollSnap
  )
);
