import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { ActionButton } from '@skatteetaten/frontend-components/ActionButton';
import styles from './TopBanner.module.scss';

interface Props {
  topStripe: React.ReactNode;
  title: string;
  logoLink?: string;
  homeText?: string;
  homeUrl?: string;
}

const ExternalHeaderContent = ({ ...props }) => {
  if (props.children) {
    return props.children;
  }
  return (
    <>
      <ActionButton
        href={props.homeUrl}
        onClick={props.onClick}
        icon="ArrowBack"
        role="link"
      >
        {props.homeText}
      </ActionButton>
      <h1>{props.title}</h1>
    </>
  );
};

export function TopBanner(props: Props): JSX.Element {
  const { topStripe, title, logoLink, homeText } = props;
  return (
    <header>
      {topStripe}
      <div className={styles.bannerContent}>
        <div>
          <div className={styles.bannerImg}>
            {logoLink ? (
              <a href={logoLink}>
                <img src={useBaseUrl('/img/logoSKE.svg')} />
              </a>
            ) : (
              <img src={useBaseUrl('/img/logoSKE.svg')} />
            )}
          </div>
        </div>
        <div className={styles.bannerHeader}>
          <ExternalHeaderContent {...props} />
        </div>
      </div>
    </header>
  );
}
