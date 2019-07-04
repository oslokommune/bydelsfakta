import { baseUrl, apiUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Eierform',
  value: 'eierform',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Eierform',
      about:
        'Statistikken er basert på SSB sin husholdningsstatistikk per 1.1. Eierstatus viser husholdningens eierforhold til boligen. Som eiere av boliger regnes både selveiere og eiere gjennom borettslag eller boligaksjeselskap. Husholdningen eier boligen dersom minst en av personene i husholdningen står som eier av boligen. Når ingen av de bosatte står som eier, regnes husholdningen å ha et leieforhold til boligen.',
      sources: [source.ssb],
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/eieform-status`,
        heading: 'Leier',
        method: 'ratio',
        scale: [0.08, 0.6],
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eieform_status',
          heading: 'Husholdning etter eie-/leieforhold',
          template: 'a',
          method: 'ratio',
          url: `${API}/eieform-status`,
          production: true,
        },
        {
          active: false,
          label: 'Matrise',
          id: 'eieform_status',
          heading: 'Husholdning etter eie-/leieforhold',
          template: 'i',
          method: 'ratio',
          url: `${API}/eieform-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'eieform_historisk',
          heading: 'Husholdning etter eie-/leieforhold',
          template: 'c',
          method: 'ratio',
          url: `${API}/eieform-historisk`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Boforhold',
    tema: 'Eierform',
    bgImage: `${baseUrl}/img/eieform`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['boligpriser', 'trangboddhet', 'bygningstyper'],
};
