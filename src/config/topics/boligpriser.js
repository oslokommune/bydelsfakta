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
        info: '<p>Statistikken viser gjennomsnittlig kvadratmeterpris på omsatte boliger* via FINN.no i tillegg til salg registrert i grunnboken. Pris er kjøpesummen oppgitt i kjøpekontrakten. For borettslagsboliger er både innskudd og andel av fellesgjeld inkludert i prisen. Arealbegrepet som benyttes i statistikken er BRA/BRA-i. Ettersom små boliger gjerne har høyere kvadratmeterpris enn store boliger, er det kun blokkleiligheter som benyttes i dette materialet. For delbydeler med få omsatte leiligheter er dette et mindre robust mål enn der hvor det er mange omsatte leiligheter. Kvadratmeterpriser er produsert av Virdi AS.</p><p>Statistikken er tilgjengelig i statistikkbanken som tabell BOL018, og har data tilbake til 2018. F.o.m. april 2026 har denne tabellen erstattet den tidligere tabellen BOL012, som er overført til «avsluttet tidsserie». Endringen skyldes at bransjestandarden for arealmåling er endret fra P-ROM til BRA/BRA-i. I motsetning til P-ROM inkluderer BRA/BRA-i bod i leilighet som en del av det innvendige arealet. Dette gjør at arealet for enkelte boliger vil være litt høyere etter ny standard, som igjen kan gi noe lavere pris per kvadratmeter sammenlignet med gammel arealdefinisjon.</p><p>*Omsatte boliger inkluderer:</p><ol><li>Alle salg via FINN.no, og</li><li>Alle salg via grunnboken som:</li><li>står oppført som et fritt salg (i motsetning til arv e.l.)</li><li>hvor kjøper og selger ikke er samme person</li><li>salget er fullstendig (100% av eiendommen er solgt)</li><li>det er kun en enhet som er solgt (ikke en boligblokk e.l.)</li></ol><p>Gjennomsnittlig kvadratmeterpris:</p><ul><li>Pris er kjøpesummen oppgitt i kjøpekontrakten. For borettslagsboliger er både innskudd og andel av fellesgjeld inkludert i prisen.</li><li>Arealbegrepet som benyttes i statistikken er BRA/BRA-i. BRA/BRA-i måles som bruksarealet innenfor boligens omsluttende vegger, og inkluderer – i motsetning til P-ROM – bod i leilighet som en del av det innvendige arealet.</li></ul><p>Boligtype:</p><ul><li>Blokkleielighet (leiligheter i boligblokk med to etasjer eller flere)</li><li>Småhus, annet (eneboliger, rekkehus, tomannsboliger og annet)</li></ul>',
        sources: [source.ssb, source.boligmappa],
        externalInfo:
          'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Boliger%20og%20byggevirksomhet__Boligpriser',
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
        info: '<p>Statistikken viser median totalpris på omsatte boliger via FINN.no i tillegg til salg registrert i grunnboken. Pris er kjøpesummen oppgitt i kjøpekontrakten. For borettslagsboliger er både innskudd og andel av fellesgjeld inkludert i prisen.</p><p>Omsatte boliger inkluderer:</p><ol><li>Alle salg via FINN.no, og</li><li>Alle salg via grunnboken som:</li><ul><li>står oppført som et fritt salg (i motsetning til arv e.l.)</li><li>hvor kjøper og selger ikke er samme person</li><li>salget er fullstendig (100% av eiendommen er solgt)</li><li>det er kun en enhet som er solgt (ikke en boligblokk e.l.)</ul></ol><p>Totalpris = Salgspris + fellesgjeld<br>Median totalpris = Totalpris på boligen som er midt i rekken hvis salgene sorteres etter pris.</p>',
        sources: [source.boligmappa],
        externalInfo:
          'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Boliger%20og%20byggevirksomhet__Boligpriser',
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
