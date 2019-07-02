import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Kjønn og alder',
  value: 'alder',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Befolkningen etter alder',
      about:
        'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
      sources: [source.ssb, source.oslo],
      map: false,
      production: true,
      tabs: [
        {
          active: false,
          label: 'Antall',
          id: 'alder_segment_antall',
          template: 'd',
          heading: 'Aldersdistribusjon (antall)',
          url: `${API}/alder-distribusjon-status`,
          method: 'value',
          help: 'Dette er hjelp',
          production: true,
        },
        {
          active: false,
          label: 'Andel',
          id: 'alder_segment_andel',
          template: 'd',
          heading: 'Aldersdistribusjon (andel)',
          url: `${API}/alder-distribusjon-status`,
          method: 'ratio',
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Befolkningspyramide',
      about:
        'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
      sources: [source.ssb, source.oslo],
      map: false,
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'alder_distribusjon_status',
          template: 'e',
          heading: 'Befolkningen etter alder og kjønn',
          method: 'value',
          url: `${API}/alder-distribusjon-status`,
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Gjennomsnitt- og medianalder',
      about:
        'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
      sources: [source.ssb, source.oslo],
      production: true,
      map: {
        labels: ['Lavere gjennomsnittsalder', 'Høyere gjennomsnittsalder'],
        scale: [32, 43],
        reverse: true,
        method: 'avg',
        url: `${API}/alder-distribusjon-status`,
        production: true,
      },
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'alder_medianalder_status',
          method: 'total',
          heading: 'Gjennomsnitts- og medianalder',
          template: 'f',
          help:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum malesuada arcu id pulvinar. Donec congue quam nec elit molestie, vel feugiat lorem euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer feugiat urna risus, nec interdum risus laoreet id.',
          url: `${API}/alder-distribusjon-status`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Befolkning',
    tema: 'Kjønn og alder',
    bgImage: `${baseUrl}/img/alder`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['befolkningsutvikling', 'husholdninger', 'levekaar'],
};
