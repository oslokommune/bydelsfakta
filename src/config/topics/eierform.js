import { baseUrl } from '../../util/config';

export default {
  text: 'Eierform',
  value: 'eierform',
  cards: [
    {
      size: 'large',
      heading: '',
      map: {
        labels: ['', ''],
        url: ``,
      },
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'eierform_status',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
        },
        {
          active: false,
          label: 'Matrise',
          id: 'eierform_matrise',
          template: 'i',
          method: 'ratio',
          url: `${baseUrl}/mockDataI.json`,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'eierform_historisk',
          template: 'b',
          url: `${baseUrl}/mockDataB.json`,
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
