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
      about:
        'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
      sources: [source.ssb],
      production: true,
      tabs: [
        {
          active: false,
          label: 'Folkemengde',
          heading: 'Befolkningsutvikling',
          id: 'befolkningstuvikling_antall',
          method: 'value',
          template: 'b',
          url: `${API}/folkemengde-utvikling-historisk`,
          production: true,
        },

        {
          active: false,
          label: 'Prosentvis endring',
          method: 'ratio',
          id: 'befolkningstuvikling_andel',
          template: 'b',
          url: `${API}/folkemengde-utvikling-historisk-prosent`,
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Befolkningsvekst',
      about:
        'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
      sources: [source.ssb],
      production: true,
      tabs: [
        {
          active: true,
          label: 'Status',
          heading: 'Befolkningsvekst',
          id: 'befolkningsvekst',
          production: true,
          url: `${API}/nokkeltall-om-befolkningen`,
          template: 'g',
        },
      ],
    },
    {
      size: 'large',
      heading: 'Forventet utvikling',
      about:
        'Tall for historisk befolkningsutvikling er statistikk fra SSB, mens påfølgende år viser framskrevet folkemengde per 1. januar hvert år. Framskrevne tall er hentet fra Oslo kommunes seneste befolkningsframskrivning. Befolkningsframskrivningen gir et anslag for hvor mange mennesker det vil bo i Oslo i årene framover fordelt på aldersgrupper. Framskrivningene legger til grunn en rekke forutsetninger for utvikling av fruktbarhet, dødelighet, flyttemønster og boligbygging, og viser beregnet befolkningsutvikling gitt disse forutsetningene.',
      sources: [source.ssb, source.oslo],
      production: true,
      tabs: [
        {
          label: 'Historisk',
          method: 'value',
          template: 'h',
          id: 'forventet_utvikling',
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
