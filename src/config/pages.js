import baseUrl from '../util/config';

export const page = {
  folkemengde: {},
  alder: {
    name: 'alder',
    aldersgrupper: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Antall',
            id: 'alder_segment_antall',
            template: 'd',
            url: `${baseUrl()}/mockDataD2.json`,
            method: 'value',
          },
          {
            active: false,
            label: 'Andel',
            id: 'alder_segment_andel',
            template: 'd',
            url: `${baseUrl()}/mockDataD2.json`,
            method: 'ratio',
          },
        ],
      },
    ],
    populasjonspyramide: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'alder_distribusjon_status',
            template: 'e',
            url: `${baseUrl()}/mockDataD2.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'alder_distribusjon_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
    median: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'alder_medianalder_status',
            template: 'f',
            url: `${baseUrl()}/mockDataD2.json`,
          },
        ],
      },
    ],
  },
  innvandring: {},
  eierform: {},
  boligpriser: {},
  trangboddhet: {},
  kommunale_boliger: {},
  flytting: {},
  bygningstyper: {},
  husholdninger: {},
  levekaar: {},
};

export const pages = [
  {
    name: 'folkemengde',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'folkemengde_fremskriving_status',
            template: '?',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'folkemengde_fremskriving_historisk',
            template: 'h',
            url: '',
          },
        ],
      },
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Historisk',
            id: 'folkemengde_utvikling_historisk',
            template: 'b',
            url: '',
          },
          {
            active: false,
            label: 'Historisk (prosent)',
            id: 'folkemengde_utvikling_historisk-prosent',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Nøkkeltall',
            id: 'folkemengde_nokkeltall',
            template: 'g',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'innvandring',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_befolkning_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_befolkning_historisk',
            template: 'c',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_under16-totalt_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_under16-totalt_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_under16-en-innvandrerforelder_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_under16-en-innvandrerforelder_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_under16-to-innvandrerforeldre_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_under16-to-innvandrerforeldre_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'eierform',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'eierform_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Matrise',
            id: 'eierform_matrise',
            template: 'i',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'eierform_historisk',
            template: 'c',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'boligpriser',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'boligpriser_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'boligpriser_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'trangboddhet',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_alle_status',
            template: 'j',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_alle_historisk',
            template: 'c',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        cards: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_under0.5_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_under0.5_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        cards: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_0.5-0.9_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_0.5-0.9_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        cards: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_1.0-1.9_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_1.0-1.9_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        cards: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_over2_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_over2_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'kommunale_boliger',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'blokkleilighet_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'blokkleilighet_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'flytting',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'flyttehyppighet_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'flyttehyppighet_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'bygningstyper',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'eierform_totalt_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'eierform_totalt_historisk',
            template: 'c',
            url: '',
          },
          {
            active: false,
            label: 'Matrise',
            id: 'eierform_totalt_matrise',
            template: 'i',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'eierform_blokk_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Antall',
            id: 'eierform_blokk_antall',
            template: 'a',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'eierform_rekkehus_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Antall',
            id: 'eierform_rekkehus_antall',
            template: 'a',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'eierform_enebolig_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Antall',
            id: 'eierform_enebolig_antall',
            template: 'a',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'husholdninger',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'husholdning_totalt_status',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'husholdning_totalt_historisk',
            template: 'c',
            url: '',
          },
          {
            active: false,
            label: 'Matrise',
            id: 'husholdning_totalt_matrise',
            template: 'i',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'husholdning_1-barn_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Antall',
            id: 'husholdning_1-barn_antall',
            template: 'a',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'husholdning_2-barn_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Antall',
            id: 'husholdning_2-barn_antall',
            template: 'a',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'husholdning_3-barn_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Antall',
            id: 'husholdning_3-barn_antall',
            template: 'a',
            url: '',
          },
        ],
      },
    ],
  },
  {
    name: 'levekaar',
    cards: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'levekar_totalt_status',
            template: 'k',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_funksjonsevne_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_funksjonsevne_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_lav-utdanning_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_lav-utdanning_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_fattige_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_fattige_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_ikke-sysselsatte_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_ikke-sysselsatte_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_vgs_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_vgs_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_dodsrate_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_dodsrate_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_trangbodde_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_trangbodde_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_innvandrere_andel',
            template: 'a',
            url: '',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_innvandrere_historisk',
            template: 'b',
            url: '',
          },
        ],
      },
    ],
  },
];
