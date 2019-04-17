import { baseUrl } from '../../util/config';

export default {
  text: 'Befolkningsendringer',
  value: 'befolkningsendringer',
  production: null,
  cards: [],
  options: {
    kategori: 'Befolkning',
    tema: 'Befolknings&shy;endringer',
    bgImage: `${baseUrl}/img/folkemengde`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['alder', 'folkemengde', 'innvandrerbefolkningen'],
};
