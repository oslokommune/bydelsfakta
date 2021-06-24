import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Boligpriser',
  value: 'boligpriser',
  cards: [
    {
      size: 'large',
      heading: 'Boligpris for blokkleiligheter',
      about: {
        info: 'Statistikken viser gjennomsnittlig kvadratmeterpris på alle boliger annonsert via finn.no. Pris er kjøpesummen oppgitt i kjøpekontrakten. For borettslagsboliger er både innskudd og andel av fellesgjeld inkludert i prisen. Arealbegrepet som benyttes i statistikken er P-ROM. Ettersom små boliger gjerne har høyere kvadratmeterpris enn store boliger, er det kun blokkleiligheter som benyttes i dette materialet. For delbydeler med få omsatte leiligheter er dette et mindre robust mål enn der hvor det er mange omsatte leiligheter. Statistikken er basert på finn.no sitt prisregister over omsatte boliger. I tillegg supplerer SSB boligomsetningene med data fra Matrikkelen.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?Geografisubset=30100%2C30101+-+30117&headers=r&stubs=Geografi&measure=common&virtualslice=Gjennomsnittligkvadratmeterpris_value&layers=Boligtype&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FNPS-omsatteboliger-kvadratmeterpris&Boligtypesubset=1&mode=cube&v=2&virtualsubset=Gjennomsnittligkvadratmeterpris_value&rsubset=2004+-+2018&Boligtypeslice=1&measuretype=4&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FNPS-omsatteboliger-kvadratmeterpris_C1&top=yes',
      },
      map: {
        labels: ['Lavere boligpriser', 'Høyere boligpriser'],
        heading: 'Gjennomsnittlig kvadratmeterpris blokkleiligheter',
        method: 'value',
        url: `${API}/boligpriser-blokkleiligheter-status`,
      },
      tabs: [
        {
          label: 'Status',
          id: 'boligpriser_status',
          heading: 'Gjennomsnittlig kvadratmeterpris for blokkleiligheter',
          method: 'value',
          template: 'bars',
          url: `${API}/boligpriser-blokkleiligheter-status`,
        },
        {
          label: 'Historisk',
          id: 'boligpriser_historisk',
          heading: 'Gjennomsnittlig kvadratmeterpris for blokkleiligheter',
          method: 'value',
          template: 'lines',
          url: `${API}/boligpriser-blokkleiligheter-historisk`,
        },
      ],
    },
  ],
  options: {
    kategori: 'Boforhold',
    tema: 'Boligpriser',
    bgImage: `${baseUrl}/img/boligpriser`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['rom-per-person', 'eierform', 'fodte-dode-flytting'],
};
