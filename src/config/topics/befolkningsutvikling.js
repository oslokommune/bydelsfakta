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
          url: `${API}/nokkeltall-om-befolkningen`,
          template: 'g',
        },
      ],
    },
    {
      size: 'large',
      heading: 'Forventet utvikling',
      about: {
        info:
          'Tall for historisk befolkningsutvikling er statistikk fra SSB, mens påfølgende år viser framskrevet folkemengde per 1. januar hvert år. Framskrevne tall er hentet fra Oslo kommunes seneste befolkningsframskrivning. Befolkningsframskrivningen gir et anslag for hvor mange mennesker det vil bo i Oslo i årene framover fordelt på aldersgrupper. Framskrivningene legger til grunn en rekke forutsetninger for utvikling av fruktbarhet, dødelighet, flyttemønster og boligbygging, og viser beregnet befolkningsutvikling gitt disse forutsetningene.',
        sources: [source.ssb, source.oslo],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2Fstatistikkbanken.oslo.kommune.no%3A80%2Fobj%2FfCatalog%2FCatalog52&submode=catalog&mode=documentation&top=yes',
      },
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
  related: ['alder', 'innvandrerbefolkningen', 'fodte-dode-flytting'],
  options: {
    kategori: 'Befolkning',
    tema: 'Befolkningsutvikling',
    bgImage: `${baseUrl}/img/folkemengde`,
    txtColor: 'rgb(245, 173, 165)',
  },
};
