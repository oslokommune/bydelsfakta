import { baseUrl } from '../../util/config';

export default {
  text: 'Bygningstyper',
  value: 'bygningstyper',
  production: null,
  cards: [
    {
      size: 'large',
      heading: '',
      map: {
        labels: ['', ''],
        url: ``,
      },
      production: null,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'eierform_totalt_status',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
          production: null,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'eierform_totalt_historisk',
          template: 'b',
          url: `${baseUrl}/mockDataB.json`,
          production: null,
        },
        {
          active: false,
          label: 'Matrise',
          id: 'eierform_totalt_matrise',
          method: 'ratio',
          template: 'i',
          url: `${baseUrl}/mockDataI.json`,
          production: null,
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
      production: null,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'blokkleilighet_status',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
          production: null,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'blokkleilighet_historisk',
          template: 'b',
          url: `${baseUrl}/mockDataB.json`,
          production: null,
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
      production: null,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eierform_blokk_andel',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
          production: null,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eierform_blokk_antall',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
          production: null,
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
      production: null,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eierform_rekkehus_andel',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
          production: null,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eierform_rekkehus_antall',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
          production: null,
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
      production: null,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eierform_enebolig_andel',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
          production: null,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eierform_enebolig_antall',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/mockDataAinnvandrer3.json`,
          production: null,
        },
      ],
    },
  ],
  options: {
    kategori: 'Bomiljø',
    tema: 'Bygningstyper',
    bgImage: `${baseUrl}/img/bygningstyper`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['husholdninger', 'trangboddhet', 'boligpriser'],
};
