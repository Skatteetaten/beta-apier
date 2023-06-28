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
        'kravogbetalinger/faq',
        'kravogbetalinger/referansedata - eksterne kodelister'     ]
    },

    {
      type: 'category',
      label: 'Innkrevingsoppdrag',
      link: { type: 'doc', id: 'innkrevingsoppdrag/index' },
      items: [
        'innkrevingsoppdrag/teknisk-dokumentasjon',
        'innkrevingsoppdrag/feltbeskrivelser',
      ]
    }]
};

module.exports = sidebars;
