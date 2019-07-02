import { baseUrl } from '../../util/config';

export default {
  text: 'Befolkningsendringer',
  value: 'befolkningsendringer',
  production: false,
  cards: [
    {
      size: 'large',
      heading: 'Flytting etter alder',
      production: false,
      tabs: [
        {
          label: 'Status',
          method: 'value',
          heading: 'Flytting etter alder og innvandringskategori',
          template: 'm',
          url: `${baseUrl}/mockDataFlytting.json`,
          production: false,
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
