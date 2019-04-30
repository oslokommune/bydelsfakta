import { baseUrl } from '../../util/config';

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
          active: true,
          label: 'Status',
          id: 'boligpriser_status',
          method: 'value',
          template: 'l',
          url: `${baseUrl}/mockDataL.json`,
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
