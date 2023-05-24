/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'index',
    {
      type: 'category',
      label: 'Kalendertjenester',
      link: { type: 'doc', id: 'kalendertjenester/index' },
      items: [
        {
          type: 'category',
          label: 'Endepunkter',
          link: { type: 'doc', id: 'kalendertjenester/endepunkter/index' },
          items: ['kalendertjenester/endepunkter/hent-frister']
        },
        'kalendertjenester/informasjonsmodeller',
        'kalendertjenester/skisser'
      ]
    },
    {
      type: 'category',
      label: 'Krav og Betalinger',
      link: { type: 'doc', id: 'kravogbetalinger/index' },
      items: [
        {
          type: 'link',
          label: 'Krav og betalinger API',
          href: 'https://skatteetaten.github.io/api-dokumentasjon/api/kravogbetalinger'
        },
        'kravogbetalinger/tilgang',
        'kravogbetalinger/faq',
        'kravogbetalinger/feltbeskrivelser',
        'kravogbetalinger/skisser'
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
