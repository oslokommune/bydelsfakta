import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Husholdninger',
  value: 'husholdninger',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Husholdningstyper',
      map: {
        labels: ['Færre aleneboende', 'Flere aleneboende'],
        url: `${API}/Husholdning-totalt-status-FzFf5`,
        method: 'ratio',
        series: 0,
        scale: [0.25, 0.6],
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'husholdning_totalt_status',
          template: 'a',
          method: 'ratio',
          url: `${API}/Husholdning-totalt-status-FzFf5`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdning_totalt_historisk',
          template: 'c',
          url: `${API}/Husholdning-totalt-historisk-NZrxf`,
          method: 'ratio',
          production: true,
        },

        {
          active: false,
          label: 'Historisk (antall)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdning_totalt_historisk',
          template: 'c',
          url: `${API}/Husholdning-totalt-historisk-NZrxf`,
          method: 'value',
          production: true,
        },

        {
          active: false,
          label: 'Matrise',
          id: 'husholdning_totalt_matrise',
          method: 'ratio',
          template: 'i',
          url: `${API}/Husholdning-totalt-matrise-e9w4m`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Befolkning',
    tema: 'Husholdninger',
    bgImage: `${baseUrl}/img/husholdninger`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['trangboddhet', 'eierform', 'bygningstyper'],
};
