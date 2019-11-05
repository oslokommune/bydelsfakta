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
      about: {
        info:
          'Statistikken er basert på SSB sin husholdningsstatistikk per 1.1. Eierstatus viser husholdningens eierforhold til boligen. Som eiere av boliger regnes både selveiere og eiere gjennom borettslag eller boligaksjeselskap. Husholdningen eier boligen dersom minst en av personene i husholdningen står som eier av boligen. Når ingen av de bosatte står som eier, regnes husholdningen å ha et leieforhold til boligen.',
        sources: [source.ssb],
      },
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
      about: {
        info:
          '<p>Tabellen omfatter kommunale boliger i Oslo per 1.1. Omsorg pluss boliger er med, men ikke presteboliger. Oslo kommune er selv eier av de fleste kommunale boliger.</p></p>I sameier, borettslag og aksjeselskap eier Oslo kommune en eller flere boliger, mens i kommunale eiendommer eier Oslo kommune både bygning og alle boligene.</p>',
        sources: [source.ssb, source.oslo],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?headers=antall_rom&stubs=omr30va&measure=common&virtualslice=antall_boliger_value&layers=eie_kom_va&layers=areal_grp&layers=r&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FKommunale-boliger-tab1&areal_grpslice=9&mode=cube&v=2&virtualsubset=antall_boliger_value&antall_romsubset=6%2C0+-+5&rsubset=2019&eie_kom_vasubset=6&areal_grpsubset=9&omr30vasubset=30100%2C30101+-+30199&eie_kom_vaslice=6&measuretype=4&rslice=2019&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FKommunale-boliger-tab1_C1&top=yes',
      },
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
  related: ['boligpriser', /*'rom-per-person', TODO: temporary */ 'bygningstyper'],
};
