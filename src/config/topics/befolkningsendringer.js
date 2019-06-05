import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Befolkningsendringer',
  value: 'befolkningsendringer',
  production: true,
  cards: [
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
  options: {
    kategori: 'Befolkning',
    tema: 'Befolknings&shy;endringer',
    bgImage: `${baseUrl}/img/folkemengde`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['alder', 'folkemengde', 'innvandrerbefolkningen'],
};
