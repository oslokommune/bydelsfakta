import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Folkemengde',
  value: 'folkemengde',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Befolkningsutvikling',
      production: true,
      tabs: [
        {
          active: false,
          label: 'Folkemengde',
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
  ],
  related: ['alder', 'innvandrerbefolkningen', 'befolkningsendringer'],
  options: {
    kategori: 'Befolkning',
    tema: 'Folkemengde',
    bgImage: `${baseUrl}/img/folkemengde`,
    txtColor: 'rgb(245, 173, 165)',
  },
};
