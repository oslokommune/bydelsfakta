import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Befolkningsutvikling',
  value: 'befolkningsutvikling',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Befolkningsvekst',
      production: true,
      tabs: [
        {
          active: true,
          label: 'Status',
          heading: 'Befolkningsvekst',
          production: true,
          url: `${API}/nokkeltall-om-befolkningen`,
          template: 'g',
        },
      ],
    },
    {
      size: 'large',
      heading: 'Befolkningsutvikling',
      production: true,
      tabs: [
        {
          active: false,
          label: 'Folkemengde',
          heading: 'Befolkningsutvikling',
          method: 'value',
          template: 'b',
          url: `${API}/folkemengde-utvikling-historisk`,
          production: true,
        },

        {
          active: false,
          label: 'Prosentvis endring',
          method: 'ratio',
          template: 'b',
          url: `${API}/folkemengde-utvikling-historisk-prosent`,
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Forventet utvikling',
      production: true,
      tabs: [
        {
          label: 'Historisk',
          method: 'value',
          template: 'h',
          url: `${API}/befolkningsutvikling-og-forventet-utvikling`,
          production: true,
        },
      ],
    },
  ],
  related: ['alder', 'innvandrerbefolkningen', 'befolkningsendringer'],
  options: {
    kategori: 'Befolkning',
    tema: 'Befolkningsutvikling',
    bgImage: `${baseUrl}/img/folkemengde`,
    txtColor: 'rgb(245, 173, 165)',
  },
};
