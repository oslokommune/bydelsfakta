import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Befolkningsutvikling',
  value: 'befolkningsutvikling',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Befolkningsutvikling',
      about: {
        info:
          'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2Fstatistikkbanken.oslo.kommune.no%3A80%2Fobj%2FfCatalog%2FCatalog48&submode=catalog&mode=documentation&top=yes',
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Folkemengde',
          heading: 'Befolkningsutvikling',
          id: 'befolkningsutvikling_antall',
          method: 'value',
          template: 'lines',
          url: `${API}/folkemengde-utvikling-historisk`,
          production: true,
        },

        {
          active: false,
          heading: 'Prosentvis årlig utvikling i folkemengde',
          label: 'Prosentvis endring',
          id: 'befolkningsutvikling_andel',
          method: 'ratio',
          template: 'lines',
          url: `${API}/folkemengde-utvikling-historisk-prosent`,
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Befolkningsvekst',
      about: {
        info:
          'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2Fstatistikkbanken.oslo.kommune.no%3A80%2Fobj%2FfCatalog%2FCatalog48&submode=catalog&mode=documentation&top=yes',
      },
      production: true,
      tabs: [
        {
          active: true,
          label: 'Status',
          heading: 'Befolkningsvekst',
          production: true,
          id: 'befolkningsvekst',
          url: `${API}/nokkeltall-om-befolkningen`,
          template: 'populationDetailsTable',
        },
      ],
    },
  ],
  related: ['alder', 'innvandrerbefolkningen', 'fodte-dode-flytting'],
  options: {
    kategori: 'Befolkning',
    tema: 'Befolkningsutvikling',
    bgImage: `${baseUrl}/img/folkemengde`,
    txtColor: 'rgb(245, 173, 165)',
  },
};
