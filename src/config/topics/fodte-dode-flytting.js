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
      production: true,
      about: {
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2Fstatistikkbanken.oslo.kommune.no%3A80%2Fobj%2FfCatalog%2FCatalog2&submode=catalog&mode=documentation&top=yes',
      },
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
