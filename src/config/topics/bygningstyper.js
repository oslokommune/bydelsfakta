import { baseUrl, apiUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Bygningstyper',
  value: 'bygningstyper',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Boliger etter bygningstype',
      about: {
        info: '<p>Statistikken viser boliger i Oslo per 1.1. Fordelingen av boliger etter bygningstype fordeles her i tre kategorier: </p><ul><li>Eneboliger (frittliggende enebolig eller våningshus)</li><li>Rekkehus, tomannsboliger o.l. (Dette inkluderer horisontaldelt tomannsbolig eller annet boligbygg med mindre enn tre etasjer, hus i kjede, rekke-/terassehus, vertikaldelttomannsbolig)</li><li>Blokk, leiegård e.l. (inkluderer også boliger i forretningsgård og bygg for felleshusholdninger)</li></ul>',
        sources: [source.ssb, source.oslo],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?headers=Bygningstyper_num&Bygningstyper_numsubset=6%2C1+-+5&stubs=geografi&measure=common&virtualslice=antall_value&layers=r&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017&mode=cube&v=2&virtualsubset=antall_value&rsubset=2019&geografisubset=30100%2C30101+-+30118&measuretype=4&rslice=2019&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017_C1&top=yes',
      },
      production: true,
      tabs: [
        {
          label: 'Andel',
          id: 'bygningstyper_alle_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/bygningstyper-alle-status`,
        },
        {
          label: 'Antall',
          id: 'bygningstyper_alle_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/bygningstyper-alle-status`,
        },
        {
          label: 'Historisk (andel)',
          id: 'bygningstyper_alle_historisk_andel',
          template: 'linesMulti',
          method: 'ratio',
          url: `${API}/bygningstyper-alle-historisk`,
        },
        {
          label: 'Historisk (antall)',
          id: 'bygningstyper_alle_historisk_antall',
          template: 'linesMulti',
          method: 'value',
          url: `${API}/bygningstyper-alle-historisk`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Boliger totalt',
      about: {
        info: '<p>Statistikken viser boliger i Oslo per 1.1. Fordelingen av boliger etter bygningstype fordeles her i tre kategorier: </p><ul><li>Eneboliger (frittliggende enebolig eller våningshus)</li><li>Rekkehus, tomannsboliger o.l. (Dette inkluderer horisontaldelt tomannsbolig eller annet boligbygg med mindre enn tre etasjer, hus i kjede, rekke-/terassehus, vertikaldelttomannsbolig)</li><li>Blokk, leiegård e.l. (inkluderer også boliger i forretningsgård og bygg for felleshusholdninger)</li></ul>',
        sources: [source.ssb, source.oslo],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?headers=Bygningstyper_num&Bygningstyper_numsubset=6%2C1+-+5&stubs=geografi&measure=common&virtualslice=antall_value&layers=r&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017&mode=cube&v=2&virtualsubset=antall_value&rsubset=2019&geografisubset=30100%2C30101+-+30118&measuretype=4&rslice=2019&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017_C1&top=yes',
      },
      tabs: [
        {
          label: 'Antall',
          id: 'totalt_antall_boliger',
          template: 'bars',
          method: 'value',
          url: `${API}/bygningstyper-totalt-status`,
        },
        {
          label: 'Historisk (antall)',
          id: 'totalt_antall_boliger_historisk',
          template: 'lines',
          method: 'value',
          url: `${API}/bygningstyper-totalt-historisk`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Blokkbebyggelse',
      about: {
        info: '<p>Statistikken viser boliger i Oslo per 1.1. Fordelingen av boliger etter bygningstype fordeles her i tre kategorier: </p><ul><li>Eneboliger (frittliggende enebolig eller våningshus)</li><li>Rekkehus, tomannsboliger o.l. (Dette inkluderer horisontaldelt tomannsbolig eller annet boligbygg med mindre enn tre etasjer, hus i kjede, rekke-/terassehus, vertikaldelttomannsbolig)</li><li>Blokk, leiegård e.l. (inkluderer også boliger i forretningsgård og bygg for felleshusholdninger)</li></ul>',
        sources: [source.ssb, source.oslo],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?headers=Bygningstyper_num&Bygningstyper_numsubset=6%2C1+-+5&stubs=geografi&measure=common&virtualslice=antall_value&layers=r&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017&mode=cube&v=2&virtualsubset=antall_value&rsubset=2019&geografisubset=30100%2C30101+-+30118&measuretype=4&rslice=2019&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017_C1&top=yes',
      },
      map: {
        labels: ['Mindre', 'Mer'],
        url: `${API}/bygningstyper-blokk-status`,
        method: 'ratio',
        heading: 'Blokkbebyggelse',
        reverse: true,
      },
      tabs: [
        {
          label: 'Andel',
          id: 'bygningstyper_blokk_status_andel',
          heading: 'Blokkbebyggelse',
          template: 'bars',
          method: 'ratio',
          url: `${API}/bygningstyper-blokk-status`,
        },
        {
          label: 'Antall',
          id: 'bygningstyper_blokk_status_antall',
          heading: 'Blokkbebyggelse',
          template: 'bars',
          method: 'value',
          url: `${API}/bygningstyper-blokk-status`,
        },
        {
          label: 'Historisk (andel)',
          id: 'bygnignstyper_blokk_historisk_andel',
          heading: 'Blokkbebyggelse',
          template: 'lines',
          method: 'ratio',
          url: `${API}/bygningstyper-blokk-historisk`,
        },
        {
          label: 'Historisk (antall)',
          id: 'bygningstyper_blokk_historisk_antall',
          heading: 'Blokkbebyggelse',
          template: 'lines',
          method: 'value',
          url: `${API}/bygningstyper-blokk-historisk`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Rekkehus og tomannsboliger',
      about: {
        info: '<p>Statistikken viser boliger i Oslo per 1.1. Fordelingen av boliger etter bygningstype fordeles her i tre kategorier: </p><ul><li>Eneboliger (frittliggende enebolig eller våningshus)</li><li>Rekkehus, tomannsboliger o.l. (Dette inkluderer horisontaldelt tomannsbolig eller annet boligbygg med mindre enn tre etasjer, hus i kjede, rekke-/terassehus, vertikaldelttomannsbolig)</li><li>Blokk, leiegård e.l. (inkluderer også boliger i forretningsgård og bygg for felleshusholdninger)</li></ul>',
        sources: [source.ssb, source.oslo],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?headers=Bygningstyper_num&Bygningstyper_numsubset=6%2C1+-+5&stubs=geografi&measure=common&virtualslice=antall_value&layers=r&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017&mode=cube&v=2&virtualsubset=antall_value&rsubset=2019&geografisubset=30100%2C30101+-+30118&measuretype=4&rslice=2019&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017_C1&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Rekkehus og tomannsboliger',
        url: `${API}/bygningstyper-rekkehus-status`,
        method: 'ratio',
        reverse: true,
      },
      tabs: [
        {
          label: 'Andel',
          id: 'bygningstyper_rekkehus_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/bygningstyper-rekkehus-status`,
        },
        {
          label: 'Antall',
          id: 'bygningstyper_rekkehus_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/bygningstyper-rekkehus-status`,
        },
        {
          label: 'Historisk (andel)',
          id: 'bygningstyper_rekkehus_historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/bygningstyper-rekkehus-historisk`,
        },
        {
          label: 'Historisk (antall)',
          id: 'bygningstyper_rekkehus_historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/bygningstyper-rekkehus-historisk`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Eneboliger',
      about: {
        info: '<p>Statistikken viser boliger i Oslo per 1.1. Fordelingen av boliger etter bygningstype fordeles her i tre kategorier: </p><ul><li>Eneboliger (frittliggende enebolig eller våningshus)</li><li>Rekkehus, tomannsboliger o.l. (Dette inkluderer horisontaldelt tomannsbolig eller annet boligbygg med mindre enn tre etasjer, hus i kjede, rekke-/terassehus, vertikaldelttomannsbolig)</li><li>Blokk, leiegård e.l. (inkluderer også boliger i forretningsgård og bygg for felleshusholdninger)</li></ul>',
        sources: [source.ssb, source.oslo],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?headers=Bygningstyper_num&Bygningstyper_numsubset=6%2C1+-+5&stubs=geografi&measure=common&virtualslice=antall_value&layers=r&layers=virtual&study=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfStudy%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017&mode=cube&v=2&virtualsubset=antall_value&rsubset=2019&geografisubset=30100%2C30101+-+30118&measuretype=4&rslice=2019&cube=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCube%2FBygg004-Boligmengden-etter-grunnkrets-delbydel-bydel-bygningstype-2017_C1&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Eneboliger',
        url: `${API}/bygningstyper-enebolig-status`,
        method: 'ratio',
        reverse: true,
      },
      tabs: [
        {
          label: 'Andel',
          id: 'bygningstyper_endebolig_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/bygningstyper-enebolig-status`,
        },
        {
          label: 'Antall',
          id: 'bygningstyper_endebolig_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/bygningstyper-enebolig-status`,
        },
        {
          label: 'Historisk (andel)',
          id: 'bygningstyper_endebolig_historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/bygningstyper-enebolig-historisk`,
        },
        {
          label: 'Historisk (antall)',
          id: 'bygningstyper_endebolig_historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/bygningstyper-enebolig-historisk`,
        },
      ],
    },
  ],
  options: {
    kategori: 'Boforhold',
    tema: 'Bygningstyper',
    bgImage: `${baseUrl}/img/bygningstyper`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['husholdninger', 'rom-per-person', 'boligpriser'],
};
