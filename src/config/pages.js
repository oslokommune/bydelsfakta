import baseUrl from '../util/config';

export const pages = {
  folkemengde: {
    name: 'folkemengde',
    subpages: [
      {
        name: 'fremskriving',
        title: 'Befolkningsutvikling og fremskriving',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Historisk',
                id: 'folkemengde_utvikling_historisk',
                template: 'h',
                url: `${baseUrl()}/mockDataH.json`,
              },
              {
                active: false,
                label: 'Historisk (prosent)',
                id: 'folkemengde_utvikling_historisk-prosent',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
        ],
      },
      {
        name: 'Utvikling',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Historisk',
                id: 'folkemengde_utvikling_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
              {
                active: false,
                label: 'Historisk (prosent)',
                id: 'folkemengde_utvikling_historisk-prosent',
                template: 'b',
                method: 'ratio',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
        ],
      },
      {
        name: 'Nøkkeltall',
        title: 'Nøkkeltall for delbydelene',
        graphs: [
          {
            size: 'large',
            title: 'Nøkkeltall for delbydelene',
            tabs: [
              {
                active: false,
                label: 'Nøkkeltall',
                id: 'folkemengde_nokkeltall',
                template: 'g',
                url: `${baseUrl()}/mockDataG.json`,
              },
            ],
          },
        ],
      },
    ],
  },
  alder: {
    name: 'alder',
    subpages: [
      {
        name: 'aldersgrupper',
        title: 'Utvalgte aldersgrupper',
        graphs: [
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
      },
      {
        name: 'populasjonsgrupper',
        title: 'Populasjonspyramide',
        graphs: [
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
      },
      {
        name: 'median',
        title: 'Medianalder i Bydel BYDELSNAVN',
        graphs: [
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
    ],
  },
  innvandrerbefolkningen: {
    name: 'innvandrerbefolkningen',
    subpages: [
      {
        name: 'befolkning',
        title: 'Innvandrerbefolkningen i bydelene',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'innvandring_befolkning_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataA2.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'innvandring_befolkning_historisk',
                template: 'c',
                url: `${baseUrl()}/mockDataC.json`,
              },
            ],
          },
        ],
      },
      {
        name: 'under16',
        title: 'Befolkning under 16 år fordelt på innvandrerbakgrunn',
        graphs: [
          {
            size: 'small',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'innvandring_under16-totalt_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer1.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'innvandring_under16-totalt_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer2.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'innvandring_under16-en-innvandrerforelder_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'innvandring_under16-to-innvandrerforeldre_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
        ],
      },
    ],
  },
  eierform: {
    name: 'eierform',
    subpages: [
      {
        name: 'eierform',
        title: 'Eierform',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'eierform_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Matrise',
                id: 'eierform_matrise',
                template: 'i',
                url: `${baseUrl()}/mockDataI.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'eierform_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
        ],
      },
    ],
  },
  boligpriser: {
    name: 'boligpriser',
    subpages: [
      {
        name: 'boligpriser',
        title: 'Blokkleilighet',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'boligpriser_status',
                method: 'value',
                template: 'a',
                url: `${baseUrl()}/boligpriser/Oslo_i_alt-status.json`,
              },
              {
                active: false,
                label: 'Status',
                id: 'boligpriser_status',
                method: 'value',
                template: 'a',
                url: `${baseUrl()}/boligpriser/Frogner-status.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'boligpriser_historisk',
                template: 'b',
                url: `${baseUrl()}/boligpriser/Oslo_i_alt-historic.json`,
              },
              {
                active: false,
                label: 'Historisk2',
                id: 'boligpriser_historisk2',
                template: 'b',
                url: `${baseUrl()}/boligpriser/Frogner-historic.json`,
              },
            ],
          },
        ],
      },
    ],
  },
  trangboddhet: {
    name: 'trangboddhet',
    subpages: [
      {
        name: 'helhet',
        title: 'Trangboddhet i Bydel BYDELSNAVN',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'trangboddhet_alle_status',
                template: 'j',
                url: `${baseUrl()}/mockDataJ.json`,
                method: 'ratio',
              },
              {
                active: false,
                label: 'Historisk',
                id: 'trangboddhet_alle_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
        ],
      },
      {
        name: 'spesifikk',
        title: 'Mellomtittel test',
        graphs: [
          {
            size: 'small',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'trangboddhet_under0.5_status',
                method: 'ratio',
                template: 'a',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'trangboddhet_under0.5_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
          {
            size: 'small',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'trangboddhet_0.5-0.9_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'trangboddhet_0.5-0.9_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
          {
            size: 'small',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'trangboddhet_1.0-1.9_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'trangboddhet_1.0-1.9_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
          {
            size: 'small',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'trangboddhet_over2_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'trangboddhet_over2_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
        ],
      },
    ],
  },
  kommunaleboliger: {
    name: 'kommunaleboliger',
    subpages: [
      {
        name: 'blokk',
        title: 'Blokkleilighet',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'blokkleilighet_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'blokkleilighet_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
        ],
      },
    ],
  },
  flytting: {
    name: 'flytting',
    subpages: [
      {
        name: 'hyppighet',
        title: 'Flyttehyppighet',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'flyttehyppighet_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'flyttehyppighet_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
        ],
      },
    ],
  },
  bygningstyper: {
    name: 'bygningstyper',
    subpages: [
      {
        name: 'totalt',
        title: 'Eierform',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'eierform_totalt_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'eierform_totalt_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
              {
                active: false,
                label: 'Matrise',
                id: 'eierform_totalt_matrise',
                template: 'i',
                url: `${baseUrl()}/mockDataI.json`,
              },
            ],
          },
        ],
      },
      {
        name: 'spesifikk',
        graphs: [
          {
            size: 'small',
            tabs: [
              {
                active: false,
                label: 'Andel',
                id: 'eierform_blokk_andel',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Antall',
                id: 'eierform_blokk_antall',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Antall',
                id: 'eierform_rekkehus_antall',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Antall',
                id: 'eierform_enebolig_antall',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
            ],
          },
        ],
      },
    ],
  },
  husholdninger: {
    name: 'husholdninger',
    subpages: [
      {
        name: 'totalt',
        title: 'Husholdningstype',
        graphs: [
          {
            size: 'large',
            tabs: [
              {
                active: false,
                label: 'Status',
                id: 'husholdning_totalt_status',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataA.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'husholdning_totalt_historisk',
                template: 'c',
                url: `${baseUrl()}/mockDataC.json`,
              },
              {
                active: false,
                label: 'Matrise',
                id: 'husholdning_totalt_matrise',
                template: 'i',
                url: `${baseUrl()}/mockDataI.json`,
              },
            ],
          },
        ],
      },
      {
        name: 'spesifikk',
        graphs: [
          {
            size: 'small',
            tabs: [
              {
                active: false,
                label: 'Andel',
                id: 'husholdning_1-barn_andel',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer1.json`,
              },
              {
                active: false,
                label: 'Antall',
                id: 'husholdning_1-barn_antall',
                template: 'a',
                method: 'value',
                url: `${baseUrl()}/mockDataAinnvandrer1.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Antall',
                id: 'husholdning_2-barn_antall',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Antall',
                id: 'husholdning_3-barn_antall',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
            ],
          },
        ],
      },
    ],
  },
  levekaar: {
    name: 'levekaar',
    subpages: [
      {
        name: 'spesifikk',
        graphs: [
          {
            size: 'small',
            tabs: [
              {
                active: false,
                label: 'Andel',
                id: 'levekar_funksjonsevne_andel',
                template: 'a',
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'levekar_funksjonsevne_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'levekar_lav-utdanning_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'levekar_fattige_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'levekar_ikke-sysselsatte_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'levekar_vgs_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'levekar_dodsrate_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'levekar_trangbodde_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
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
                method: 'ratio',
                url: `${baseUrl()}/mockDataAinnvandrer3.json`,
              },
              {
                active: false,
                label: 'Historisk',
                id: 'levekar_innvandrere_historisk',
                template: 'b',
                url: `${baseUrl()}/mockDataB.json`,
              },
            ],
          },
        ],
      },
    ],
  },
};

export const page = {
  folkemengde: {
    name: 'folkemengde',
    fremskriving: [
      {
        size: 'large',
        title: 'Befolkningsutvikling og fremskriving',
        tabs: [
          {
            active: false,
            label: 'Historisk',
            id: 'folkemengde_utvikling_historisk',
            template: 'h',
            url: `${baseUrl()}/mockDataH.json`,
          },
          {
            active: false,
            label: 'Historisk (prosent)',
            id: 'folkemengde_utvikling_historisk-prosent',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
    utvikling: [
      {
        size: 'large',
        title: '',
        tabs: [
          {
            active: false,
            label: 'Historisk',
            id: 'folkemengde_utvikling_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
          {
            active: false,
            label: 'Historisk (prosent)',
            id: 'folkemengde_utvikling_historisk-prosent',
            template: 'b',
            method: 'ratio',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
    nokkeltall: [
      {
        size: 'large',
        title: 'Nøkkeltall for delbydelene',
        tabs: [
          {
            active: false,
            label: 'Nøkkeltall',
            id: 'folkemengde_nokkeltall',
            template: 'g',
            url: `${baseUrl()}/mockDataG.json`,
          },
        ],
      },
    ],
  },
  alder: {
    name: 'alder',
    aldersgrupper: [
      {
        size: 'large',
        title: 'Utvalgte aldersgrupper',
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
  innvandrerbefolkningen: {
    name: 'innvandrerbefolkningen',
    befolkning: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_befolkning_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataA2.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_befolkning_historisk',
            template: 'c',
            url: `${baseUrl()}/mockDataC.json`,
          },
        ],
      },
    ],
    under16: [
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'innvandring_under16-totalt_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer1.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_under16-totalt_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer2.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_under16-en-innvandrerforelder_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'innvandring_under16-to-innvandrerforeldre_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
  },
  eierform: {
    name: 'eierform',
    eierform: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'eierform_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Matrise',
            id: 'eierform_matrise',
            template: 'i',
            url: `${baseUrl()}/mockDataI.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'eierform_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
  },
  boligpriser: {
    name: 'boligpriser',
    boligpriser: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'boligpriser_status',
            method: 'value',
            template: 'a',
            url: `${baseUrl()}/boligpriser/Oslo_i_alt-status.json`,
          },
          {
            active: false,
            label: 'Status',
            id: 'boligpriser_status',
            method: 'value',
            template: 'a',
            url: `${baseUrl()}/boligpriser/Frogner-status.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'boligpriser_historisk',
            template: 'b',
            url: `${baseUrl()}/boligpriser/Oslo_i_alt-historic.json`,
          },
          {
            active: false,
            label: 'Historisk2',
            id: 'boligpriser_historisk2',
            template: 'b',
            url: `${baseUrl()}/boligpriser/Frogner-historic.json`,
          },
        ],
      },
    ],
  },
  trangboddhet: {
    name: 'trangboddhet',
    helhet: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_alle_status',
            template: 'j',
            url: `${baseUrl()}/mockDataJ.json`,
            method: 'ratio',
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_alle_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
    spesifikk: [
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_under0.5_status',
            method: 'ratio',
            template: 'a',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_under0.5_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_0.5-0.9_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_0.5-0.9_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_1.0-1.9_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_1.0-1.9_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'trangboddhet_over2_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'trangboddhet_over2_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
  },
  kommunaleboliger: {
    name: 'kommunaleboliger',
    blokk: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'blokkleilighet_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'blokkleilighet_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
  },
  flytting: {
    name: 'flytting',
    hyppighet: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'flyttehyppighet_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'flyttehyppighet_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
  },
  bygningstyper: {
    name: 'bygningstyper',
    totalt: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'eierform_totalt_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'eierform_totalt_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
          {
            active: false,
            label: 'Matrise',
            id: 'eierform_totalt_matrise',
            template: 'i',
            url: `${baseUrl()}/mockDataI.json`,
          },
        ],
      },
    ],
    spesifikk: [
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'eierform_blokk_andel',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Antall',
            id: 'eierform_blokk_antall',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Antall',
            id: 'eierform_rekkehus_antall',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Antall',
            id: 'eierform_enebolig_antall',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
        ],
      },
    ],
  },
  husholdninger: {
    name: 'husholdninger',
    totalt: [
      {
        size: 'large',
        tabs: [
          {
            active: false,
            label: 'Status',
            id: 'husholdning_totalt_status',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataA.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'husholdning_totalt_historisk',
            template: 'c',
            url: `${baseUrl()}/mockDataC.json`,
          },
          {
            active: false,
            label: 'Matrise',
            id: 'husholdning_totalt_matrise',
            template: 'i',
            url: `${baseUrl()}/mockDataI.json`,
          },
        ],
      },
    ],
    spesifikk: [
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'husholdning_1-barn_andel',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer1.json`,
          },
          {
            active: false,
            label: 'Antall',
            id: 'husholdning_1-barn_antall',
            template: 'a',
            method: 'value',
            url: `${baseUrl()}/mockDataAinnvandrer1.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Antall',
            id: 'husholdning_2-barn_antall',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Antall',
            id: 'husholdning_3-barn_antall',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
        ],
      },
    ],
  },
  levekaar: {
    name: 'levekaar',
    spesifikk: [
      {
        size: 'small',
        tabs: [
          {
            active: false,
            label: 'Andel',
            id: 'levekar_funksjonsevne_andel',
            template: 'a',
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_funksjonsevne_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_lav-utdanning_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_fattige_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_ikke-sysselsatte_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_vgs_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_dodsrate_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_trangbodde_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
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
            method: 'ratio',
            url: `${baseUrl()}/mockDataAinnvandrer3.json`,
          },
          {
            active: false,
            label: 'Historisk',
            id: 'levekar_innvandrere_historisk',
            template: 'b',
            url: `${baseUrl()}/mockDataB.json`,
          },
        ],
      },
    ],
  },
};
