import { baseUrl, apiUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Eieform',
  value: 'eieform',
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
          id: 'eieform_status',
          template: 'a',
          method: 'ratio',
          url: `${API}/eieform-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'eieform_historisk',
          template: 'c',
          method: 'ratio',
          url: `${API}/eieform-historisk`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Bomiljø',
    tema: 'Eieform',
    bgImage: `${baseUrl}/img/eieform`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['boligpriser', 'trangboddhet', 'bygningstyper'],
};
