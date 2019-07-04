import { baseUrl } from '../../util/config';

export default {
  text: 'Fødte, døde og flytting',
  value: 'befolkningsendringer',
  production: null,
  cards: [
    {
      size: 'large',
      heading: 'Flytting etter alder',
      production: null,
      tabs: [
        {
          label: 'Status',
          method: 'value',
          heading: 'Flytting etter alder og innvandringskategori',
          template: 'm',
          url: `${baseUrl}/mockDataFlytting.json`,
          production: null,
        },
      ],
    },
  ],
  options: {
    kategori: 'Befolkning',
    tema: 'Fødte, døde og flytting',
    bgImage: `${baseUrl}/img/flytting`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['alder', 'befolkningsutvikling', 'innvandrerbefolkningen'],
};
