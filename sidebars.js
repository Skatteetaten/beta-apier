/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: ['index',
    {
      type: 'category',
      label: 'Utleggsbegjæring og prøving',
      link: { type: 'doc', id: 'utleggsbegjaering/index' },
      items: []
    },

    {
      type: 'category',
      label: 'Trekkpålegg',
      link: { type: 'doc', id: 'trekkpaalegg/index' },
      items: []
    }
  ]
};

module.exports = sidebars;
