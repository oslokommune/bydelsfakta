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
      about: {
        info: 'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?headers=aar&stubs=omra30&measure=common&virtualslice=antall_value&kjonn_vaslice=3&layers=kjonn_va&layers=alder_bef03&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FBe02-Befolkingen-etter-bydel-delbydel-kjonn-aldersgrupper-2017&mode=cube&v=2&virtualsubset=antall_value&omra30subset=30100%2C30101+-+30118&aarsubset=2008+-+2019&kjonn_vasubset=3&measuretype=4&alder_bef03subset=240&cube=http%3A%2F%2Fstatistikkbanken.oslo.kommune.no%3A80%2Fobj%2FfCube%2FBe02-Befolkingen-etter-bydel-delbydel-kjonn-aldersgrupper-2017_C1&alder_bef03slice=240&top=yes',
        sources: [source.ssb, source.oslo],
      },
      map: false,
      production: true,
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
          production: true,
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
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Befolkningspyramide',
      about: {
        info: 'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        sources: [source.ssb, source.oslo],
      },
      map: false,
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'alder_befolkningspyramide_status',
          template: 'pyramid',
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
      about: {
        info: 'Statistikken viser folkemengden per 1.1. hvert år. For flere befolkningstabeller se under «Befolkning» i Oslo kommunes statistikkbank.',
        sources: [source.ssb, source.oslo],
      },
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
          template: 'boxPlot',
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
