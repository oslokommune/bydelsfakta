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
        info: '<p>Statistikken viser gjennomsnittlig kvadratmeterpris på omsatte boliger* via FINN.no i tillegg til salg registrert i grunnboken. Pris er kjøpesummen oppgitt i kjøpekontrakten. For borettslagsboliger er både innskudd og andel av fellesgjeld inkludert i prisen. Arealbegrepet som benyttes i statistikken er P-ROM. Ettersom små boliger gjerne har høyere kvadratmeterpris enn store boliger, er det kun blokkleiligheter som benyttes i dette materialet. For delbydeler med få omsatte leiligheter er dette et mindre robust mål enn der hvor det er mange omsatte leiligheter. Kvadratmeterpriser for 2018 og nyere er produsert av Virdi AS.</p> <p>*Omsatte boliger inkluderer:</p> <ol><li>Alle salg via FINN.no, og</li><li>Alle salg via grunnboken som:</li><li>står oppført som et fritt salg (i motsetning til arv e.l.)</li><li>hvor kjøper og selger ikke er samme person</li><li>salget er fullstendig (100% av eiendommen er solgt)</li><li>det er kun en enhet som er solgt (ikke en boligblokk e.l.)</li></ol><p>Kvadratmeterpriser for årene 2004-2017 er produsert av SSB. Denne statistikken er basert på finn.no sitt prisregister over omsatte boliger. I tillegg supplerer SSB boligomsetningene med data fra Matrikkelen.Statistikken for 2018 og nyere er produsert av Virdi AS. Dette medfører et brudd i tidsserien. Vi anser imidlertid sammenlignbarheten mellom de to statistikkene som temmelig god. Begge produsentene henter salgsdata fra FINN.no, men Virdi AS supplerer datagrunnlaget med salg fra grunnboken og har i så måte et litt større datagrunnlag enn SSB. I statistikkbanken til Oslo kommune er det tilgjengeliggjort statistikk fra både SSB og Virdi AS for årene 2018 og 2019. Gjennomsnittlig kvadratmeterpris i de to tabellene for de to overlappende årene, er ikke identiske, men avvikene er små og går i begge retninger.</p>',
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
    {
      size: 'large',
      heading: 'Median totalpris',
      about: {
        info: '<p>Statistikken viser median totalpris på omsatte boliger via FINN.no i tillegg til salg registrert i grunnboken. Pris er kjøpesummen oppgitt i kjøpekontrakten. For borettslagsboliger er både innskudd og andel av fellesgjeld inkludert i prisen.</p><p>Omsatte boliger inkluderer:</p><ol><li>Alle salg via FINN.no, og</li><li>Alle salg via grunnboken som:<ul><li>står oppført som et fritt salg (i motsetning til arv e.l.)</li><li>hvor kjøper og selger ikke er samme person</li><li>salget er fullstendig (100% av eiendommen er solgt)</li><li>det er kun en enhet som er solgt (ikke en boligblokk e.l.)</ul></ol><p>Totalpris = Salgspris + fellesgjeld<br>Median totalpris = Totalpris på boligen som er midt i rekken hvis salgene sorteres etter pris.</p>',
        sources: [source.virdi],
      },
      map: {
        labels: ['Lavere boligpriser', 'Høyere boligpriser'],
        heading: 'Median totalpris',
        method: 'value',
        url: `${API}/median-totalpris-status`,
      },
      tabs: [
        {
          label: 'Status',
          id: 'median_totalpris_status',
          heading: 'Median totalpris for boliger',
          method: 'value',
          template: 'bars',
          url: `${API}/median-totalpris-status`,
        },
        {
          label: 'Historisk',
          id: 'median_totalpris_historisk',
          heading: 'Median totalpris for boliger',
          method: 'value',
          template: 'lines',
          url: `${API}/median-totalpris-historisk`,
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
