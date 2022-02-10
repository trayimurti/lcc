import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Learn',
    Svg: require('../../static/img/learn.svg').default,
    description: (
      <>
        Learn Data Structure and Algorithms, Short tricks, and more.
      </>
    ),
  },
  {
    title: 'Code',
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
        After learning, it's time to practice. The best way to practice is to <code>code</code> yourself.
      </>
    ),
  },
  {
    title: 'Contribute',
    Svg: require('../../static/img/contribute.svg').default,
    description: (
      <>
        Contribute for coder. It's the best way to learn.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
