import React from 'react';
import Grid from '@skatteetaten/frontend-components/Grid';
import { FooterSection } from './FooterSection';

export function Footer(): JSX.Element {
  const linksAbout = [
    {
      path: 'https://www.skatteetaten.no/nn/kontakt/',
      text: 'Kontakt oss'
    },
    {
      path: 'https://uustatus.no/nb/erklaringer/publisert/fda75c75-d3d3-42ac-acb5-627bae3c1b93',
      text: 'Tilgjengelighetserklæring'
    },
    {
      path: 'https://www.skatteetaten.no/om-skatteetaten/jobb/',
      text: 'Jobbe i Skatteetaten'
    },
    {
      path: 'https://www.skatteetaten.no/om-skatteetaten/om-oss/',
      text: 'Om oss'
    },
    {
      path: 'https://www.skatteetaten.no/om-skatteetaten/analyse-og-rapporter/',
      text: 'Analyse og rapporter'
    },
    {
      path: 'https://www.skatteetaten.no/om-skatteetaten/forskning/',
      text: 'Forskning'
    }
  ];

  return (
    <Grid>
      <Grid.Row>
        <Grid.Col xl={4} lg={12}>
          <FooterSection heading={'Om Skatteetaten'} links={linksAbout} />
        </Grid.Col>
        <Grid.Col xl={4} lg={12}>
          <FooterSection
            heading={'Følg oss'}
            subHeading={'Du kan kontakte oss i sosiale medier.'}
            links={[
              {
                text: 'Se alle Skatteetatens kontoer',
                path: 'https://www.skatteetaten.no/om-skatteetaten/sikkerhet/sosiale-medier/'
              }
            ]}
          />
        </Grid.Col>
        <Grid.Col xl={4} lg={12}>
          <FooterSection
            heading={'Presse'}
            subHeading={
              'Pressemeldinger, pressekontakter og annen informasjon for journalister.'
            }
            links={[
              {
                text: 'Se vårt presserom',
                path: 'https://www.skatteetaten.no/presse/'
              }
            ]}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  );
}
