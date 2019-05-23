import { baseUrl } from '../../util/config';

export default {
  text: 'Eierform',
  value: 'eierform',
  production: null,
  cards: [
    {
      size: 'large',
      heading: '',
      map: {
        labels: ['', ''],
        url: ``,
      },
      production: null,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'eierform_status',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
          production: null,
        },
        {
          active: false,
          label: 'Matrise',
          id: 'eierform_matrise',
          template: 'i',
          method: 'ratio',
          url: `${baseUrl}/mockDataI.json`,
          production: null,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'eierform_historisk',
          template: 'b',
          url: `${baseUrl}/mockDataB.json`,
          production: null,
        },
      ],
    },
  ],
  options: {
    kategori: 'Bomiljø',
    tema: 'Eierform',
    bgImage: `${baseUrl}/img/eierform`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['boligpriser', 'trangboddhet', 'bygningstyper'],
};
