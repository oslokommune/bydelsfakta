import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Boligpriser',
  value: 'boligpriser',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Blokkleiligheter',
      map: {
        labels: ['Lavere boligpriser', 'Høyere boligpriser'],
        scale: [40000, 95000],
        method: 'value',
        url: `${API}/boligpriser_status-pD7ZV`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'boligpriser_status',
          heading: 'Gj.snitt kvadratmeterpris på blokkleiligheter',
          method: 'value',
          template: 'a',
          url: `${API}/boligpriser_status-pD7ZV`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'boligpriser_historisk',
          heading: 'Gj.snitt kvadratmeterpris på blokkleiligheter',
          method: 'value',
          template: 'c',
          url: `${API}/boligpriser_historic-4owcY`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Bomiljø',
    tema: 'Boligpriser',
    bgImage: `${baseUrl}/img/boligpriser`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['trangboddhet', 'eierform', 'befolkningsendringer'],
};
