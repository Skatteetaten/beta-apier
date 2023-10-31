/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: ['index',
    {
      type: 'category',
      label: 'Krav og Betalinger',
      link: { type: 'doc', id: 'kravogbetalinger/index' },
      items: [{
        type: 'link',
        label: 'Krav og betalinger API',
        href: 'https://skatteetaten.github.io/api-dokumentasjon/api/kravogbetalinger'
      }, 'kravogbetalinger/tilgang',
        'kravogbetalinger/feltbeskrivelser',
        'kravogbetalinger/skisser',
        'kravogbetalinger/referansedata',
        'kravogbetalinger/faq']
    },

    {
      type: 'category',
      label: 'Innkrevingsoppdrag',
      link: { type: 'doc', id: 'innkrevingsoppdrag/index' },
      items: [{
        type: 'link',
        label: 'API-dokumentasjon',
        href: 'https://app.swaggerhub.com/apis-docs/skatteetaten/oppdragsinnkreving-api/'
      },
        'innkrevingsoppdrag/teknisk-dokumentasjon',
        'innkrevingsoppdrag/beskrivelse-av-tjenester',
        'innkrevingsoppdrag/mottaksbekreftelse'
      ]
    },

    {
      type: 'category',
      label: 'Utleggsbegjæring og prøving',
      link: { type: 'doc', id: 'utleggsbegjaering/index' },
      items: [
        {
          type: 'category',
          label: 'Endepunkter',
          link: { type: 'doc', id: 'utleggsbegjaering/endepunkter/index' },
          items: []
        },
        {
          type: 'category',
          label: 'Feltbeskrivelser',
          link: { type: 'doc', id: 'utleggsbegjaering/feltbeskrivelser/index' },
          items: []
        },
        'utleggsbegjaering/tilgang',
        'utleggsbegjaering/informasjonsmodeller',
        'utleggsbegjaering/skisser'
      ]
    }
  ]
};

module.exports = sidebars;
