import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Alder',
  value: 'alder',
  cards: [
    {
      size: 'large',
      heading: 'Aldersdistribusjon',
      map: false,
      tabs: [
        {
          active: false,
          label: 'Antall',
          id: 'alder_segment_antall',
          template: 'd',
          url: `${API}/Alder-distribusjon-status-TqWvs`,
          method: 'value',
          help: 'Dette er hjelp',
        },
        {
          active: false,
          label: 'Andel',
          id: 'alder_segment_andel',
          template: 'd',
          url: `${API}/Alder-distribusjon-status-TqWvs`,
          method: 'ratio',
        },
      ],
    },
    {
      size: 'large',
      heading: 'Populasjonspyramide',
      map: false,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'alder_distribusjon_status',
          template: 'e',
          method: 'value',
          url: `${API}/Alder-distribusjon-status-TqWvs`,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Gjennomsnitt- og medianalder',
      map: {
        labels: ['Lavere gjennomsnittsalder', 'Høyere gjennomsnittsalder'],
        scale: [32, 43],
        reverse: true,
        method: 'avg',
        url: `${API}/Alder-distribusjon-status-TqWvs`,
      },
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'alder_medianalder_status',
          method: 'total',
          template: 'f',
          help:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum malesuada arcu id pulvinar. Donec congue quam nec elit molestie, vel feugiat lorem euismod. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer feugiat urna risus, nec interdum risus laoreet id.',
          url: `${API}/Alder-distribusjon-status-TqWvs`,
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
