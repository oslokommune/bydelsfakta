import { apiUrl, baseUrl } from '../util/config';

// Base URL to API
const API = `${apiUrl}/api/dataset`;

export const topicNames = [
  'folkemengde',
  'befolkningsendringer',
  'alder',
  'innvandrerbefolkningen',
  'husholdninger',
  'levekaar',
  'eierform',
  'bygningstyper',
  'boligpriser',
  'trangboddhet',
];

export const disabledTopics = [
  'folkemengde',
  'befolkningsendringer',
  // 'alder',
  'innvandrerbefolkningen',
  // 'levekaar',
  'eierform',
  'bygningstyper',
  'trangboddhet',
];

export const categories = [
  {
    kategori: 'Befolkning',
    color: 'rgb(182, 63, 50)',
    links: ['folkemengde', 'befolkningsendringer', 'alder', 'innvandrerbefolkningen', 'husholdninger'],
  },
  {
    kategori: 'Bomiljø',
    color: 'rgb(27, 173, 120)',
    links: ['trangboddhet', 'eierform', 'bygningstyper', 'boligpriser'],
  },
  {
    kategori: 'Levekår',
    color: 'rgb(219, 160, 52)',
    links: ['levekaar'],
  },
];

export const topics = {
  folkemengde: {
    text: 'Folkemengde',
    value: 'folkemengde',
    cards: [
      {
        size: 'large',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Historisk',
            id: 'folkemengde_utvikling_historisk',
            template: 'h',
            url: `${baseUrl}/mockDataH.json`,
          },
          {
            active: false,
            label: 'Historisk (prosent)',
            id: 'folkemengde_utvikling_historisk-prosent',
            template: 'b',
            url: `${baseUrl}/mockDataB.json`,
          },
        ],
      },
      {
        size: 'large',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Historisk',
            id: 'folkemengde_utvikling_historisk',
            template: 'b',
            url: `${baseUrl}/mockDataB.json`,
          },
          {
            active: false,
            label: 'Historisk (prosent)',
            id: 'folkemengde_utvikling_historisk-prosent',
            template: 'b',
            method: 'ratio',
            url: `${baseUrl}/mockDataB.json`,
          },
        ],
      },
      {
        size: 'large',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Nøkkeltall',
            id: 'folkemengde_nokkeltall',
            template: 'g',
            url: `${baseUrl}/mockDataG.json`,
          },
        ],
      },
    ],
    related: ['alder', 'innvandrerbefolkningen', 'befolkningsendringer'],
    options: {
      kategori: 'Befolkning',
      tema: 'Folkemengde',
      bgImage: `${baseUrl}/img/folkemengde`,
      bgColor: 'rgb(255, 129, 116)',
      txtColor: 'rgb(245, 173, 165)',
    },
  },

  befolkningsendringer: {
    text: 'Befolkningsendringer',
    value: 'befolkningsendringer',
    cards: [],
    options: {
      kategori: 'Befolkning',
      tema: 'Befolknings&shy;endringer',
      bgImage: `${baseUrl}/img/folkemengde`,
      bgColor: 'rgb(255, 129, 116)',
      txtColor: 'rgb(245, 173, 165)',
    },
    related: ['alder', 'folkemengde', 'innvandrerbefolkningen'],
  },

  alder: {
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
      bgColor: 'rgb(255, 129, 116)',
      txtColor: 'rgb(245, 173, 165)',
    },
    related: ['folkemengde', 'husholdninger', 'levekaar'],
  },
  innvandrerbefolkningen: {
    text: 'Personer med innvandrerbakgrunn',
    value: 'innvandrerbefolkningen',
    cards: [
      {
        size: 'large',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_befolkning_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataA2.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_befolkning_historisk',
            template: 'c',
            url: `${baseUrl}/mockDataC.json`,
          },
        ],
      },
      {
        size: 'small',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_under16-totalt_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer1.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_under16-totalt_historisk',
            template: 'b',
            url: `${baseUrl}/mockDataB.json`,
          },
        ],
      },
      {
        size: 'small',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_under16-en-innvandrerforelder_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer2.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_under16-en-innvandrerforelder_historisk',
            template: 'b',
            url: `${baseUrl}/mockDataB.json`,
          },
        ],
      },
      {
        size: 'small',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_under16-to-innvandrerforeldre_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_under16-to-innvandrerforeldre_historisk',
            template: 'b',
            url: `${baseUrl}/mockDataB.json`,
          },
        ],
      },
    ],
    options: {
      kategori: 'Befolkning',
      tema: 'Personer med innvandrer&shy;bakgrunn',
      bgImage: `${baseUrl}/img/innvandring`,
      bgColor: 'rgb(255, 129, 116)',
      txtColor: 'rgb(245, 173, 165)',
    },
    related: ['folkemengde', 'befolkningsendringer', 'boligpriser'],
  },
  eierform: {
    text: 'Eierform',
    value: 'eierform',
    cards: [
      {
        size: 'large',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'eierform_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Matrise',
            id: 'eierform_matrise',
            template: 'i',
            method: 'ratio',
            url: `${baseUrl}/mockDataI.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'eierform_historisk',
            template: 'b',
            url: `${baseUrl}/mockDataB.json`,
          },
        ],
      },
    ],
    options: {
      kategori: 'Bomiljø',
      tema: 'Eierform',
      bgImage: `${baseUrl}/img/eierform`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['boligpriser', 'trangboddhet', 'bygningstyper'],
  },
  boligpriser: {
    text: 'Boligpriser',
    value: 'boligpriser',
    cards: [
      {
        size: 'large',
        heading: 'Blokkleiligheter',
        map: {
          labels: ['Lavere boligpriser', 'Høyere boligpriser'],
          scale: [40000, 95000],
          method: 'value',
          url: `${API}/boligpriser_status-pD7ZV`,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'boligpriser_status',
            method: 'value',
            template: 'a',
            url: `${API}/boligpriser_status-pD7ZV`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'boligpriser_historisk',
            method: 'value',
            template: 'c',
            url: `${API}/boligpriser_historic-4owcY`,
          },
        ],
      },
    ],
    options: {
      kategori: 'Bomiljø',
      tema: 'Boligpriser',
      bgImage: `${baseUrl}/img/boligpriser`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['trangboddhet', 'eierform', 'befolkningsendringer'],
  },
  trangboddhet: {
    text: 'Trangboddhet',
    value: 'trangboddhet',
    cards: [
      {
        size: 'large',
        heading: 'Trangbodde husstander',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_alle_status',
            template: 'j',
            url: `${baseUrl}/mockDataJ.json`,
            method: 'ratio',
          },
          {
            active: false,
            label: 'Status0',
            id: 'trangboddhet_alle_status',
            template: 'j',
            url: `${baseUrl}/mockDataJ.json`,
            method: 'value',
          },
          {
            active: false,
            label: 'Status2',
            id: 'trangboddhet_alle_status',
            template: 'a',
            url: `${baseUrl}/mockDataJ.json`,
            method: 'ratio',
          },
          {
            active: false,
            label: 'Status3',
            id: 'trangboddhet_alle_status',
            template: 'a',
            url: `${baseUrl}/mockDataJ.json`,
            method: 'value',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_alle_historisk',
            template: 'c',
            method: 'ratio',
            url: `${baseUrl}/trangboddhet_historisk.json`,
          },
          {
            active: false,
            label: 'Historisk2',
            id: 'trangboddhet_alle_historisk',
            template: 'c',
            method: 'value',
            url: `${baseUrl}/trangboddhet_historisk.json`,
          },
        ],
      },
      {
        size: 'small',
        heading: 'Under 0.5 rom per person',
        map: {
          labels: ['Færre', 'Flere'],
          method: 'ratio',
          scale: [0.01, 0.06],
          url: `${baseUrl}/trangboddhet_05.json`,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_alle_status',
            template: 'a',
            url: `${baseUrl}/trangboddhet_05.json`,
            method: 'ratio',
          },
        ],
      },
      // {
      //   name: 'spesifikk',
      //   title: 'Mellomtittel test',
      //   graphs: [
      //     {
      //       size: 'small',
      //       tabs: [
      //         {
      //           active: false,
      //           label: 'Status',
      //           id: 'trangboddhet_under0.5_status',
      //           method: 'ratio',
      //           template: 'a',
      //           url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //         },
      //         {
      //           active: false,
      //           label: 'Historisk',
      //           id: 'trangboddhet_under0.5_historisk',
      //           template: 'b',
      //           url: `${baseUrl}/mockDataB.json`,
      //         },
      //       ],
      //     },
      //     {
      //       size: 'small',
      //       tabs: [
      //         {
      //           active: false,
      //           label: 'Status',
      //           id: 'trangboddhet_0.5-0.9_status',
      //           template: 'a',
      //           method: 'ratio',
      //           url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //         },
      //         {
      //           active: false,
      //           label: 'Historisk',
      //           id: 'trangboddhet_0.5-0.9_historisk',
      //           template: 'b',
      //           url: `${baseUrl}/mockDataB.json`,
      //         },
      //       ],
      //     },
      //     {
      //       size: 'small',
      //       tabs: [
      //         {
      //           active: false,
      //           label: 'Status',
      //           id: 'trangboddhet_1.0-1.9_status',
      //           template: 'a',
      //           method: 'ratio',
      //           url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //         },
      //         {
      //           active: false,
      //           label: 'Historisk',
      //           id: 'trangboddhet_1.0-1.9_historisk',
      //           template: 'b',
      //           url: `${baseUrl}/mockDataB.json`,
      //         },
      //       ],
      //     },
      //     {
      //       size: 'small',
      //       tabs: [
      //         {
      //           active: false,
      //           label: 'Status',
      //           id: 'trangboddhet_over2_status',
      //           template: 'a',
      //           method: 'ratio',
      //           url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //         },
      //         {
      //           active: false,
      //           label: 'Historisk',
      //           id: 'trangboddhet_over2_historisk',
      //           template: 'b',
      //           url: `${baseUrl}/mockDataB.json`,
      //         },
      //       ],
      //     },
      //   ],
      // },
    ],
    options: {
      kategori: 'Bomiljø',
      tema: 'Trangboddhet',
      bgImage: `${baseUrl}/img/trangboddhet`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['boligpriser', 'levekaar', 'eierform'],
  },
  bygningstyper: {
    text: 'Bygningstyper',
    value: 'bygningstyper',
    cards: [
      {
        size: 'large',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'eierform_totalt_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'eierform_totalt_historisk',
            template: 'b',
            url: `${baseUrl}/mockDataB.json`,
          },
          {
            active: false,
            label: 'Matrise',
            id: 'eierform_totalt_matrise',
            method: 'ratio',
            template: 'i',
            url: `${baseUrl}/mockDataI.json`,
          },
        ],
      },

      {
        size: 'large',
        heading: 'Kommunale boliger',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'blokkleilighet_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'blokkleilighet_historisk',
            template: 'b',
            url: `${baseUrl}/mockDataB.json`,
          },
        ],
      },

      {
        size: 'small',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'eierform_blokk_andel',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Antall',
            id: 'eierform_blokk_antall',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
        ],
      },
      {
        size: 'small',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'eierform_rekkehus_andel',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Antall',
            id: 'eierform_rekkehus_antall',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
        ],
      },
      {
        size: 'small',
        heading: '',
        map: {
          labels: ['', ''],
          url: ``,
        },
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'eierform_enebolig_andel',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Antall',
            id: 'eierform_enebolig_antall',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl}/mockDataAinnvandrer3.json`,
          },
        ],
      },
    ],
    options: {
      kategori: 'Bomiljø',
      tema: 'Bygningstyper',
      bgImage: `${baseUrl}/img/bygningstyper`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['husholdninger', 'trangboddhet', 'boligpriser'],
  },
  husholdninger: {
    text: 'Husholdninger',
    value: 'husholdninger',
    cards: [
      {
        size: 'large',
        heading: 'Husholdningstyper',
        map: {
          labels: ['Færre aleneboende', 'Flere aleneboende'],
          url: `${API}/Husholdning-totalt-status-FzFf5`,
          method: 'ratio',
          series: 0,
          scale: [0.25, 0.6],
        },
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'husholdning_totalt_status',
            template: 'a',
            method: 'ratio',
            url: `${API}/Husholdning-totalt-status-FzFf5`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'husholdning_totalt_historisk',
            template: 'c',
            url: `${API}/Husholdning-totalt-historisk-NZrxf`,
            method: 'ratio',
          },
          {
            active: false,
            label: 'Matrise',
            id: 'husholdning_totalt_matrise',
            method: 'ratio',
            template: 'i',
            url: `${API}/Husholdning-totalt-matrise-e9w4m`,
          },
        ],
      },
    ],
    options: {
      kategori: 'Befolkning',
      tema: 'Husholdninger',
      bgImage: `${baseUrl}/img/husholdninger`,
      bgColor: 'rgb(255, 129, 116)',
      txtColor: 'rgb(245, 173, 165)',
    },
    related: ['trangboddhet', 'eierform', 'bygningstyper'],
  },
  levekaar: {
    text: 'Levekårsindikatorer',
    value: 'levekaar',
    cards: [
      // {
      //   size: 'small',
      //   heading: '',
      //   map: {
      //     labels: ['', ''],
      //     url: ``,
      //   },
      //   tabs: [
      //     {
      //       active: false,
      //       label: 'Andel',
      //       id: 'levekar_funksjonsevne_andel',
      //       template: 'a',
      //       method: 'ratio',
      //       url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //     },
      //     {
      //       active: false,
      //       label: 'Historisk',
      //       id: 'levekar_funksjonsevne_historisk',
      //       template: 'b',
      //       url: `${baseUrl}/mockDataB.json`,
      //     },
      //   ],
      // },
      {
        size: 'small',
        heading: 'Personer med lav utdanning',
        map: {
          labels: ['Flere', 'Færre'],
          url: `${API}/Lav_utdanning_status-fYdyK`,
          scale: [0.5, 0],
          method: 'ratio',
        },
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_lav-utdanning_andel',
            template: 'a',
            method: 'ratio',
            url: `${API}/Lav_utdanning_status-fYdyK`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_lav-utdanning_historisk',
            method: 'ratio',
            template: 'b',
            url: `${API}/Lav_utdanning_historisk-qBXzf`,
          },
        ],
      },
      // {
      //   size: 'small',
      //   heading: '',
      //   map: {
      //     labels: ['', ''],
      //     url: ``,
      //   },
      //   tabs: [
      //     {
      //       active: false,
      //       label: 'Andel',
      //       id: 'levekar_fattige_andel',
      //       template: 'a',
      //       method: 'ratio',
      //       url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //     },
      //     {
      //       active: false,
      //       label: 'Historisk',
      //       id: 'levekar_fattige_historisk',
      //       template: 'b',
      //       url: `${baseUrl}/mockDataB.json`,
      //     },
      //   ],
      // },
      // {
      //   size: 'small',
      //   heading: '',
      //   map: {
      //     labels: ['', ''],
      //     url: ``,
      //   },
      //   tabs: [
      //     {
      //       active: false,
      //       label: 'Andel',
      //       id: 'levekar_ikke-sysselsatte_andel',
      //       template: 'a',
      //       method: 'ratio',
      //       url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //     },
      //     {
      //       active: false,
      //       label: 'Historisk',
      //       id: 'levekar_ikke-sysselsatte_historisk',
      //       template: 'b',
      //       url: `${baseUrl}/mockDataB.json`,
      //     },
      //   ],
      // },
      // {
      //   size: 'small',
      //   heading: '',
      //   map: {
      //     labels: ['', ''],
      //     url: ``,
      //   },
      //   tabs: [
      //     {
      //       active: false,
      //       label: 'Andel',
      //       id: 'levekar_vgs_andel',
      //       template: 'a',
      //       method: 'ratio',
      //       url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //     },
      //     {
      //       active: false,
      //       label: 'Historisk',
      //       id: 'levekar_vgs_historisk',
      //       template: 'b',
      //       url: `${baseUrl}/mockDataB.json`,
      //     },
      //   ],
      // },
      // {
      //   size: 'small',
      //   heading: '',
      //   map: {
      //     labels: ['', ''],
      //     url: ``,
      //   },
      //   tabs: [
      //     {
      //       active: false,
      //       label: 'Andel',
      //       id: 'levekar_dodsrate_andel',
      //       template: 'a',
      //       method: 'ratio',
      //       url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //     },
      //     {
      //       active: false,
      //       label: 'Historisk',
      //       id: 'levekar_dodsrate_historisk',
      //       template: 'b',
      //       url: `${baseUrl}/mockDataB.json`,
      //     },
      //   ],
      // },
      // {
      //   size: 'small',
      //   heading: '',
      //   map: {
      //     labels: ['', ''],
      //     url: ``,
      //   },
      //   tabs: [
      //     {
      //       active: false,
      //       label: 'Andel',
      //       id: 'levekar_trangbodde_andel',
      //       template: 'a',
      //       method: 'ratio',
      //       url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //     },
      //     {
      //       active: false,
      //       label: 'Historisk',
      //       id: 'levekar_trangbodde_historisk',
      //       template: 'b',
      //       url: `${baseUrl}/mockDataB.json`,
      //     },
      //   ],
      // },
      // {
      //   size: 'small',
      //   heading: '',
      //   map: {
      //     labels: ['', ''],
      //     url: ``,
      //   },
      //   tabs: [
      //     {
      //       active: false,
      //       label: 'Andel',
      //       id: 'levekar_innvandrere_andel',
      //       template: 'a',
      //       method: 'ratio',
      //       url: `${baseUrl}/mockDataAinnvandrer3.json`,
      //     },
      //     {
      //       active: false,
      //       label: 'Historisk',
      //       id: 'levekar_innvandrere_historisk',
      //       template: 'b',
      //       url: `${baseUrl}/mockDataB.json`,
      //     },
      //   ],
      // },
    ],
    options: {
      kategori: 'Levekår',
      tema: 'Levekårs&shy;indikatorer',
      bgImage: `${baseUrl}/img/levekaar`,
      bgColor: 'rgb(248, 198, 107)',
      txtColor: 'rgb(244, 206, 138)',
    },
    related: ['husholdninger', 'innvandrerbefolkningen', 'trangboddhet'],
  },
};
