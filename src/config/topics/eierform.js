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
        heading: 'Leietakere',
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
    {
      size: 'large',
      heading: 'Kommunale boliger',
      about:
        '<p>Statistikken viser boliger i Oslo per 1.1. Fordelingen av boliger etter bygningstype fordeles her i tre kategorier: </p><ul><li>Eneboliger (frittliggende enebolig eller våningshus)</li><li>Rekkehus, tomannsboliger o.l. (Dette inkluderer horisontaldelt tomannsbolig eller annet boligbygg med mindre enn tre etasjer, hus i kjede, rekke-/terassehus, vertikaldelttomannsbolig)</li><li>Blokk, leiegård e.l. (inkluderer også boliger i forretningsgård og bygg for felleshusholdninger)</li></ul>',
      sources: [source.ssb, source.oslo],
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/kommunale-boliger-av-boligmassen-i-alt-status`,
        method: 'ratio',
        heading: 'Kommunale boliger',
        scale: [0, 0.14],
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'kommunelage_boliger_status_andel',
          heading: 'Kommunale boliger',
          template: 'a',
          method: 'ratio',
          url: `${API}/kommunale-boliger-av-boligmassen-i-alt-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'kommunelage_boliger_status_antall',
          heading: 'Kommunale boliger',
          template: 'a',
          method: 'value',
          url: `${API}/kommunale-boliger-av-boligmassen-i-alt-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'kommunelage_boliger_historisk_andel',
          heading: 'Kommunale boliger',
          template: 'b',
          method: 'ratio',
          url: `${API}/kommunale-boliger-av-boligmassen-i-alt-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'kommunelage_boliger_historisk_antall',
          heading: 'Kommunale boliger',
          template: 'b',
          method: 'value',
          url: `${API}/kommunale-boliger-av-boligmassen-i-alt-historisk`,
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
  related: ['boligpriser', 'rom-per-person', 'bygningstyper'],
};
