/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: ['index',
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
        'innkrevingsoppdrag/anbefalinger-for-bruk',
        'innkrevingsoppdrag/beskrivelse-av-tjenester',
        'innkrevingsoppdrag/felles-valideringsregler',
        {
          type: 'category',
          label: 'Oppdragsgiverspesifikke valideringsregler',
          items: [
            'innkrevingsoppdrag/oppdragsgiverspesifikke-valideringsregler/bronnoysundregistrene',
            'innkrevingsoppdrag/oppdragsgiverspesifikke-valideringsregler/nav',
          ],
        },
      ]
    },

    {
      type: 'category',
      label: 'Utleggsbegjæring og prøving',
      link: { type: 'doc', id: 'utleggsbegjaering/index' },
      items: [
        {
          type: 'link',
          label: 'API-dokumentasjon',
          href: 'https://app.swaggerhub.com/apis/skatteetaten/utleggsbegjaering-app/0.0.1'
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
          label: 'API Spesifikasjon',
          link: { type: 'doc', id: 'utleggstrekk/apispesifikasjon/index' },
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
