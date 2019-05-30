import { baseUrl } from '../../util/config';

export default {
  text: 'Bygningstyper',
  value: 'bygningstyper',
  production: true,
  cards: [
    {
      size: 'large',
      heading: '',
      map: {
        labels: ['', ''],
        url: ``,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'eieform_totalt_status',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/totalt_status.json`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'eieform_totalt_historisk',
          template: 'c',
          method: 'ratio',
          url: `${baseUrl}/bygningstyper_totalt_historisk.json`,
          production: true,
        },
        {
          active: false,
          label: 'Matrise',
          id: 'eieform_totalt_matrise',
          method: 'ratio',
          template: 'i',
          url: `${baseUrl}/totalt_status.json`,
          production: true,
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
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          id: 'blokkleilighet_status',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/blokk_status.json`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'blokkleilighet_historisk',
          template: 'b',
          url: `${baseUrl}/blokk_historisk.json`,
          production: true,
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
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eieform_blokk_andel',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/blokk_status.json`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eieform_blokk_antall',
          template: 'a',
          method: 'value',
          url: `${baseUrl}/blokk_status.json`,
          production: true,
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
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eieform_rekkehus_andel',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/rekkehus_status.json`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eieform_rekkehus_antall',
          template: 'a',
          method: 'value',
          url: `${baseUrl}/rekkehus_status.json`,
          production: true,
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
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'eieform_enebolig_andel',
          template: 'a',
          method: 'ratio',
          url: `${baseUrl}/enebolig_status.json`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'eieform_enebolig_antall',
          template: 'a',
          method: 'value',
          url: `${baseUrl}/enebolig_status.json`,
          production: true,
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
