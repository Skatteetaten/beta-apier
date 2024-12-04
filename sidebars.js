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
        'innkrevingsoppdrag/kom-i-gang',
        'innkrevingsoppdrag/anbefalinger-for-bruk',
        'innkrevingsoppdrag/beskrivelse-av-tjenester',
        'innkrevingsoppdrag/funksjonell-beskrivelse',
        'innkrevingsoppdrag/felles-valideringsregler',
        {
          type: 'category',
          label: 'Oppdragsgiverspesifikke valideringsregler',
          items: [
            'innkrevingsoppdrag/oppdragsgiverspesifikke-valideringsregler/bronnoysundregistrene',
            'innkrevingsoppdrag/oppdragsgiverspesifikke-valideringsregler/nav'
          ]
        }
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
          href: 'https://app.swaggerhub.com/apis/skatteetaten/utleggsbegjaering-app/0.0.3'
        },
        {
          type: 'category',
          label: 'Feltbeskrivelser',
          link: { type: 'doc', id: 'utleggsbegjaering/feltbeskrivelser/index' },
          items: []
        },
        'utleggsbegjaering/tilgang',
        'utleggsbegjaering/informasjonsmodeller',
        'utleggsbegjaering/skisser',
        'utleggsbegjaering/testing',
        'utleggsbegjaering/endringslogg'
      ]
    },

    {
      type: 'category',
      label: 'Trekkpålegg',
      link: { type: 'doc', id: 'trekkpaalegg/index' },
      items: [
        {
          type: 'category',
          label: 'API Spesifikasjon',
          link: { type: 'doc', id: 'trekkpaalegg/apispesifikasjon/index' },
          items: []
        },
        {
          type: 'category',
          label: 'Feltbeskrivelser',
          link: { type: 'doc', id: 'trekkpaalegg/feltbeskrivelser/index' },
          items: []
        },
        'trekkpaalegg/tilgang',
        'trekkpaalegg/informasjonsmodeller',
        'trekkpaalegg/skisser',
        'trekkpaalegg/testing',
      ]
    }
  ]
};

module.exports = sidebars;
