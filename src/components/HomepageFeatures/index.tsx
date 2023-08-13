import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'TurboHub',
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
        <>
          免费部署属于自己的 Github 资源加速下载站点，享受极速下载体验。
        </>
    ),
  },
  {
    title: 'RushGet',
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
        <>
          帮您使用替代源下载 docker 镜像与 release 包，快速简单。
        </>
    ),
  },
  {
    title: 'Shuttle',
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
        <>
          协助您构建属于自己的镜像仓库，彻底摆脱网络束缚。
        </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
      <div className={clsx('col col--4')}>
        {/*<div className="text--center">*/}
        {/*  <Svg className={styles.featureSvg} role="img" />*/}
        {/*</div>*/}
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
