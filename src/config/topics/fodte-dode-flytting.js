import { baseUrl, apiUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Fødte, døde og flytting',
  value: 'fodte-dode-flytting',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Flytting etter alder',
      production: false,
      sources: [source.ssb],
      tabs: [
        {
          label: 'Status',
          method: 'value',
          template: 'm',
          url: `${API}/flyttehyppighet-totalt-status`,
          production: true,
        },
      ],
    },

    {
      size: 'large',
      heading: 'Befolkningsvekst',
      production: true,
      sources: [source.ssb],
      tabs: [
        {
          label: 'Historisk',
          method: 'value',
          heading: 'Befolkningsvekst etter netto innflytting og fødselsoverskudd',
          template: 'n',
          url: `${API}/befolkningsutvikling-og-forventet-utvikling`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Befolkning',
    tema: 'Fødte, døde og flytting',
    bgImage: `${baseUrl}/img/flytting`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['alder', 'befolkningsutvikling', 'innvandrerbefolkningen'],
};
