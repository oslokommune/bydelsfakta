import { baseUrl } from '../../util/config';

export default {
  text: 'Eierform',
  value: 'eierform',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Eieform',
      map: {
        labels: ['', ''],
        url: ``,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'eierform_status',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/eieform_status_00.json`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'eierform_historisk',
          template: 'c',
          method: 'ratio',
          url: `${baseUrl}/eieform_historic_00.json`,
          production: true,
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
