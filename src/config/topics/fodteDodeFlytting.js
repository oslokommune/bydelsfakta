import { baseUrl, apiUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Fødte, døde og flytting',
  value: 'fodte-dode-flytting',
  cards: [
    {
      size: 'large',
      heading: 'Flytting etter alder',
      about: {
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2Fstatistikkbanken.oslo.kommune.no%3A80%2Fobj%2FfCatalog%2FCatalog2&submode=catalog&mode=documentation&top=yes',
      },
      tabs: [
        {
          label: 'Status',
          method: 'value',
          template: 'comboHistogram',
          id: 'flyttehyppighet_totalt_status',
          url: `${API}/flyttehyppighet-totalt-status`,
        },
      ],
    },

    {
      size: 'large',
      heading: 'Befolkningsvekst',
      sources: [source.ssb],
      tabs: [
        {
          label: 'Historisk',
          method: 'value',
          heading: 'Befolkningsvekst etter netto innflytting og fodselsoverskudd',
          template: 'barsAndLines',
          variant: 'population-growth',
          id: 'befolkningsvekst_netto_innflytting_fødselsoverskudd',
          url: `${API}/befolkningsutvikling-og-forventet-utvikling`,
        },
      ],
    },

    {
      size: 'large',
      heading: 'Fødselsoverskudd',
      sources: [source.ssb],
      tabs: [
        {
          label: 'Historisk',
          method: 'value',
          heading: 'Fødselsoverskudd',
          template: 'barsAndLines',
          variant: 'births-and-deaths',
          id: 'fodselsoverskudd',
          url: `${API}/befolkningsutvikling-og-forventet-utvikling`,
        },
      ],
    },

    {
      size: 'large',
      heading: 'Inn- og utflytting',
      sources: [source.ssb],
      tabs: [
        {
          label: 'Historisk',
          method: 'value',
          heading: 'Inn- og utflytting',
          template: 'barsAndLines',
          variant: 'migrations',
          id: 'inn_og_utflytting',
          url: `${API}/befolkningsutvikling-og-forventet-utvikling`,
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
