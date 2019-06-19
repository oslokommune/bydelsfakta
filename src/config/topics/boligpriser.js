import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Boligpriser',
  value: 'boligpriser',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Boligpris for blokkleiligheter',
      map: {
        labels: ['Lavere boligpriser', 'Høyere boligpriser'],
        heading: 'Gjennomsnittlig kvadratmeterpris blokkleiligheter',
        scale: [40000, 95000],
        method: 'value',
        url: `${API}/boligpriser-blokkleiligheter-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'boligpriser_status',
          heading: 'Gjennomsnittlig kvadratmeterpris for blokkleiligheter',
          method: 'value',
          template: 'a',
          url: `${API}/boligpriser-blokkleiligheter-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'boligpriser_historisk',
          heading: 'Gjennomsnittlig kvadratmeterpris for blokkleiligheter',
          method: 'value',
          template: 'b',
          url: `${API}/boligpriser-blokkleiligheter-historisk`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Boforhold',
    tema: 'Boligpriser',
    bgImage: `${baseUrl}/img/boligpriser`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['trangboddhet', 'eierform', 'befolkningsendringer'],
};
