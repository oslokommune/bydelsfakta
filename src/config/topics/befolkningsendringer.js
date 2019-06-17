import { baseUrl } from '../../util/config';

// const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Befolkningsendringer',
  value: 'befolkningsendringer',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Flytting',
      production: true,
      tabs: [
        {
          label: 'Historisk',
          method: 'value',
          template: 'm',
          url: `${baseUrl}/mockDataFlytting.json`,
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
  related: ['alder', 'folkemengde', 'innvandrerbefolkningen'],
};
