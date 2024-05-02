import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Befolkningsutvikling',
  value: 'befolkningsutvikling',
  cards: [
    {
      size: 'large',
      heading: 'Befolkningsutvikling',
      about: {
        info: 'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        sources: [source.ssb],
        externalInfo: 'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Befolkning__Folkemengde',
      },
      tabs: [
        {
          label: 'Folkemengde',
          heading: 'Befolkningsutvikling',
          id: 'befolkningsutvikling_antall',
          method: 'value',
          template: 'lines',
          url: `${API}/folkemengde-utvikling-historisk`,
        },

        {
          heading: 'Prosentvis årlig utvikling i folkemengde',
          label: 'Prosentvis endring',
          id: 'befolkningsutvikling_andel',
          method: 'ratio',
          template: 'lines',
          url: `${API}/folkemengde-utvikling-historisk-prosent`,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Befolkningsvekst',
      about: {
        info: 'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        sources: [source.ssb],
        externalInfo: 'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Befolkning__Folkemengde',
      },
      tabs: [
        {
          label: 'Status',
          heading: 'Befolkningsvekst',
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
