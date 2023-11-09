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
        href: 'https://app.swaggerhub.com/apis-docs/Skatteetaten_Deling/Innkreving_av_krav_for_offentlige_oppdragsgivere/'
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
    },

    {
      type: 'category',
      label: 'Utleggstrekk',
      link: { type: 'doc', id: 'utleggstrekk/index' },
      items: [
        {
          type: 'category',
          label: 'Endepunkter',
          link: { type: 'doc', id: 'utleggstrekk/endepunkter/index' },
          items: []
        },
        {
          type: 'category',
          label: 'Feltbeskrivelser',
          link: { type: 'doc', id: 'utleggstrekk/feltbeskrivelser/index' },
          items: []
        },
        'utleggstrekk/tilgang',
        'utleggstrekk/informasjonsmodeller',
        'utleggstrekk/skisser'
      ]
    }
  ]
};

module.exports = sidebars;
