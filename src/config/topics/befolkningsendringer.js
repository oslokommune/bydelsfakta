import { baseUrl, apiUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Befolkningsendringer',
  value: 'befolkningsendringer',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Flytting etter alder',
      production: true,
      tabs: [
        {
          label: 'Status',
          method: 'value',
          heading: 'Flytting etter alder og innvandringskategori',
          template: 'm',
          url: `${API}/flyttehyppighet-totalt-status`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Befolkning',
    tema: 'Befolknings&shy;endringer',
    bgImage: `${baseUrl}/img/folkemengde`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['alder', 'befolkningsutvikling', 'innvandrerbefolkningen'],
};
