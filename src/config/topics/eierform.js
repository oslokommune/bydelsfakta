import { baseUrl, apiUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Eierform',
  value: 'eierform',
  cards: [
    {
      size: 'large',
      heading: 'Eierform',
      about: {
        info: 'Statistikken er basert på SSB sin husholdningsstatistikk per 1.1. Eierstatus viser husholdningens eierforhold til boligen. Som eiere av boliger regnes både selveiere og eiere gjennom borettslag eller boligaksjeselskap. Husholdningen eier boligen dersom minst en av personene i husholdningen står som eier av boligen. Når ingen av de bosatte står som eier, regnes husholdningen å ha et leieforhold til boligen.',
        sources: [source.ssb],
        externalInfo:
          'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Husholdninger%20og%20boforhold/OK-BOF001.px',
      },
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/eieform-status`,
        heading: 'Leietakere',
        method: 'ratio',
      },
      tabs: [
        {
          label: 'Andel',
          id: 'eieform_status_antall',
          heading: 'Husholdning etter eie-/leieforhold',
          template: 'bars',
          method: 'ratio',
          url: `${API}/eieform-status`,
        },
        {
          label: 'Matrise',
          id: 'eieform_status_andel',
          heading: 'Husholdning etter eie-/leieforhold',
          template: 'ternaryPlot',
          method: 'ratio',
          url: `${API}/eieform-status`,
        },
        {
          label: 'Historisk',
          id: 'eieform_historisk_andel',
          heading: 'Husholdning etter eie-/leieforhold',
          template: 'linesMulti',
          method: 'ratio',
          url: `${API}/eieform-historisk`,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Kommunale boliger',
      about: {
        info: '<p>Tabellen omfatter kommunale boliger i Oslo per 1.1. Omsorg pluss boliger er med, men ikke presteboliger. Oslo kommune er selv eier av de fleste kommunale boliger.</p></p>I sameier, borettslag og aksjeselskap eier Oslo kommune en eller flere boliger, mens i kommunale eiendommer eier Oslo kommune både bygning og alle boligene.</p>',
        sources: [source.ssb, source.oslo],
        externalInfo:
          'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Boliger%20og%20byggevirksomhet__Kommunale%20boliger/',
      },
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/kommunale-boliger-av-boligmassen-i-alt-status`,
        method: 'ratio',
        heading: 'Kommunale boliger',
        reverse: true,
      },
      tabs: [
        {
          label: 'Andel',
          id: 'kommunelage_boliger_status_andel',
          heading: 'Kommunale boliger',
          template: 'bars',
          method: 'ratio',
          url: `${API}/kommunale-boliger-av-boligmassen-i-alt-status`,
        },
        {
          label: 'Antall',
          id: 'kommunelage_boliger_status_antall',
          heading: 'Kommunale boliger',
          template: 'bars',
          method: 'value',
          url: `${API}/kommunale-boliger-av-boligmassen-i-alt-status`,
        },
        {
          label: 'Historisk (andel)',
          id: 'kommunelage_boliger_historisk_andel',
          heading: 'Kommunale boliger',
          template: 'lines',
          method: 'ratio',
          url: `${API}/kommunale-boliger-av-boligmassen-i-alt-historisk`,
        },
        {
          label: 'Historisk (antall)',
          id: 'kommunelage_boliger_historisk_antall',
          heading: 'Kommunale boliger',
          template: 'lines',
          method: 'value',
          url: `${API}/kommunale-boliger-av-boligmassen-i-alt-historisk`,
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
