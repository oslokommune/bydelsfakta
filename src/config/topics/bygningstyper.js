import { baseUrl, apiUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Bygningstyper',
  value: 'bygningstyper',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Boliger etter bygningstype',
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eieform_totalt_status',
          template: 'a',
          method: 'ratio',
          url: `${API}/bygningstyper-totalt-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eieform_totalt_status',
          template: 'a',
          method: 'value',
          url: `${API}/bygningstyper-totalt-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'eieform_totalt_historisk',
          template: 'c',
          method: 'ratio',
          url: `${API}/bygningstyper-totalt-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'eieform_totalt_historisk',
          template: 'c',
          method: 'value',
          url: `${API}/bygningstyper-totalt-historisk`,
          production: true,
        },
      ],
    },

    {
      size: 'small',
      heading: 'Blokkbebyggelse',
      map: {
        labels: ['Mindre', 'Mer'],
        url: `${API}/bygningstyper-blokk-status`,
        method: 'ratio',
        heading: 'Blokkbebyggelse',
        scale: [0.12, 1],
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eieform_blokk_andel',
          heading: 'Blokkbebyggelse',
          template: 'a',
          method: 'ratio',
          url: `${API}/bygningstyper-blokk-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eieform_blokk_antall',
          heading: 'Blokkbebyggelse',
          template: 'a',
          method: 'value',
          url: `${API}/bygningstyper-blokk-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'eieform_blokk_historisk',
          heading: 'Blokkbebyggelse',
          template: 'b',
          method: 'ratio',
          url: `${API}/bygningstyper-blokk-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'eieform_blokk_historisk',
          heading: 'Blokkbebyggelse',
          template: 'b',
          method: 'value',
          url: `${API}/bygningstyper-blokk-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Rekkehus og tomannsboliger',
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Rekkehus og tomannsboliger',
        url: `${API}/bygningstyper-rekkehus-status`,
        method: 'ratio',
        scale: [0, 0.5],
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eieform_rekkehus_andel',
          template: 'a',
          method: 'ratio',
          url: `${API}/bygningstyper-rekkehus-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eieform_rekkehus_antall',
          template: 'a',
          method: 'value',
          url: `${API}/bygningstyper-rekkehus-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'eieform_rekkehus_historisk',
          template: 'b',
          method: 'ratio',
          url: `${API}/bygningstyper-rekkehus-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'eieform_rekkehus_historisk',
          template: 'b',
          method: 'value',
          url: `${API}/bygningstyper-rekkehus-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Eneboliger',
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Eneboliger',
        url: `${API}/bygningstyper-enebolig-status`,
        method: 'ratio',
        scale: [0, 0.4],
        reverse: true,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eieform_enebolig_andel',
          template: 'a',
          method: 'ratio',
          url: `${API}/bygningstyper-enebolig-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eieform_enebolig_antall',
          template: 'a',
          method: 'value',
          url: `${API}/bygningstyper-enebolig-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'eieform_enebolig_historisk',
          template: 'b',
          method: 'ratio',
          url: `${API}/bygningstyper-enebolig-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'eieform_enebolig_historisk',
          template: 'b',
          method: 'value',
          url: `${API}/bygningstyper-enebolig-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Kommunale boliger',
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
    tema: 'Bygningstyper',
    bgImage: `${baseUrl}/img/bygningstyper`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['husholdninger', 'trangboddhet', 'boligpriser'],
};
