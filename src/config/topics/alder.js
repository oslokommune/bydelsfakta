import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Kjønn og alder',
  value: 'alder',
  cards: [
    {
      size: 'large',
      heading: 'Befolkningen etter alder',
      about: {
        info: 'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        externalInfo: 'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Befolkning__Folkemengde',
        sources: [source.ssb, source.oslo],
      },
      map: false,
      tabs: [
        {
          active: false,
          label: 'Antall',
          id: 'alder_segment_antall',
          help: 'Bruk slideren eller rullegardinlisten til å utforske et bestemt alderssegment.',
          template: 'ageDistribution',
          heading: 'Aldersfordeling (antall)',
          url: `${API}/alder-distribusjon-status`,
          method: 'value',
        },
        {
          active: false,
          label: 'Andel',
          id: 'alder_segment_andel',
          help: 'Bruk slideren eller rullegardinlisten til å utforske et bestemt alderssegment.',
          template: 'ageDistribution',
          heading: 'Aldersfordeling (andel)',
          url: `${API}/alder-distribusjon-status`,
          method: 'ratio',
        },
      ],
    },
    {
      size: 'large',
      heading: 'Befolkningspyramide',
      about: {
        info: 'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        externalInfo: 'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Befolkning__Folkemengde',
        sources: [source.ssb, source.oslo],
      },
      map: false,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'alder_befolkningspyramide_status',
          template: 'pyramid',
          heading: 'Befolkningen etter alder og kjønn',
          method: 'value',
          url: `${API}/alder-distribusjon-status`,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Gjennomsnitt- og medianalder',
      about: {
        info: 'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        externalInfo: 'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Befolkning__Folkemengde',
        sources: [source.ssb, source.oslo],
      },
      map: {
        labels: ['Lavere gjennomsnittsalder', 'Høyere gjennomsnittsalder'],
        reverse: true,
        method: 'avg',
        url: `${API}/alder-distribusjon-status`,
      },
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'alder_medianalder_status',
          method: 'total',
          heading: 'Gjennomsnitts- og medianalder',
          template: 'boxPlot',
          url: `${API}/alder-distribusjon-status`,
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
