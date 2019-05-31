import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Alder',
  value: 'alder',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Befolkningen etter alder',
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
      map: false,
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'alder_distribusjon_status',
          template: 'e',
          heading: 'Aldersdistribusjon fordelt på kjønn',
          method: 'value',
          url: `${API}/alder-distribusjon-status`,
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Gjennomsnitt- og medianalder',
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
          heading: 'Gjennomsnittsaldre',
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
    tema: 'Alder',
    bgImage: `${baseUrl}/img/alder`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['folkemengde', 'husholdninger', 'levekaar'],
};
