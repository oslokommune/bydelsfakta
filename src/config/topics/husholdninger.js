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
        url: `${API}/husholdning-totalt-status`,
        method: 'ratio',
        series: 0,
        scale: [0.25, 0.6],
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'husholdning_totalt_status',
          template: 'a',
          method: 'ratio',
          url: `${API}/husholdning-totalt-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'husholdning_totalt_status',
          template: 'a',
          method: 'value',
          url: `${API}/husholdning-totalt-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdning_totalt_historisk',
          template: 'c',
          url: `${API}/husholdning-totalt-historisk`,
          method: 'ratio',
          production: true,
        },

        {
          active: false,
          label: 'Historisk (antall)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdning_totalt_historisk',
          template: 'c',
          url: `${API}/husholdning-totalt-historisk`,
          method: 'value',
          production: true,
        },

        {
          active: false,
          label: 'Matrise',
          id: 'husholdning_totalt_matrise',
          method: 'ratio',
          template: 'i',
          url: `${API}/husholdning-totalt-status`,
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
  related: ['trangboddhet', 'eieform', 'bygningstyper'],
};
