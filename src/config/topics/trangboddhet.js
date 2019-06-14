import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Trangboddhet',
  value: 'trangboddhet',
  production: true,
  cards: [
    {
      size: 'large',
      heading: 'Trangbodde husholdninger',
      production: true,
      tabs: [
        {
          active: false,
          label: 'Status',
          template: 'j',
          heading: 'Husholdninger fordelt etter antall rom per person',
          url: `${API}/trangboddhet-alle-status`,
          method: 'ratio',
          production: true,
        },

        {
          active: false,
          label: 'Historisk (andel)',
          template: 'c',
          heading: 'Husholdninger fordelt etter antall rom per person',
          url: `${API}/trangboddhet-alle-historisk`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          template: 'c',
          heading: 'Husholdninger fordelt etter antall rom per person',
          url: `${API}/trangboddhet-alle-historisk`,
          method: 'value',
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Under 0,5 rom per person',
      map: {
        labels: ['Lav andel', 'Høy andel'],
        method: 'ratio',
        heading: 'Husstander med under 0,5 rom per person',
        reverse: true,
        scale: [0.018, 0.14],
        url: `${API}/trangboddhet-under-0-5-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          template: 'a',
          heading: 'Husholdninger med under 0,5 rom per person',
          url: `${API}/trangboddhet-under-0-5-status`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          template: 'a',
          heading: 'Husholdninger med under 0,5 rom per person',
          url: `${API}/trangboddhet-under-0-5-status`,
          method: 'value',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          template: 'b',
          heading: 'Husholdninger med under 0,5 rom per person',
          url: `${API}/trangboddhet-under-0-5-historisk`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          template: 'b',
          heading: 'Husholdninger med under 0,5 rom per person',
          url: `${API}/trangboddhet-under-0-5-historisk`,
          method: 'value',
          production: true,
        },
      ],
    },

    {
      size: 'small',
      heading: '0,5–0,9 rom per person',
      map: {
        labels: ['Lav andel', 'Høy andel'],
        method: 'ratio',
        reverse: true,
        scale: [0.035, 0.21],
        url: `${API}/trangboddhet-0-5-0-9-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          template: 'a',
          heading: 'Husholdninger med 0,5–0,9 rom per person',
          url: `${API}/trangboddhet-0-5-0-9-status`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          template: 'a',
          heading: 'Husholdninger med 0,5–0,9 rom per person',
          url: `${API}/trangboddhet-0-5-0-9-status`,
          method: 'value',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          template: 'b',
          heading: 'Husholdninger med 0,5–0,9 rom per person',
          url: `${API}/trangboddhet-0-5-0-9-historisk`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          template: 'b',
          heading: 'Husholdninger med 0,5–0,9 rom per person',
          url: `${API}/trangboddhet-0-5-0-9-historisk`,
          method: 'value',
          production: true,
        },
      ],
    },

    {
      size: 'small',
      heading: '1–1,9 rom per person',
      map: {
        labels: ['Lav andel', 'Høy andel'],
        method: 'ratio',
        reverse: true,
        scale: [0.268, 0.475],
        url: `${API}/trangboddhet-1-0-1-9-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          template: 'a',
          heading: 'Husholdninger med 1–1,9 rom per person',
          url: `${API}/trangboddhet-1-0-1-9-status`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          template: 'a',
          heading: 'Husholdninger med 1–1,9 rom per person',
          url: `${API}/trangboddhet-1-0-1-9-status`,
          method: 'value',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          template: 'b',
          heading: 'Husholdninger med 1–1,9 rom per person',
          url: `${API}/trangboddhet-1-0-1-9-historisk`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          template: 'b',
          heading: 'Husholdninger med 1–1,9 rom per person',
          url: `${API}/trangboddhet-1-0-1-9-historisk`,
          method: 'value',
          production: true,
        },
      ],
    },

    {
      size: 'small',
      heading: '2 rom eller flere per person',
      map: {
        labels: ['Lav andel', 'Høy andel'],
        method: 'ratio',
        reverse: true,
        scale: [0.34, 0.6],
        url: `${API}/trangboddhet-over-2-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          template: 'a',
          heading: 'Husholdninger med 2 rom eller flere per person',
          url: `${API}/trangboddhet-over-2-status`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          template: 'a',
          heading: 'Husholdninger med 2 rom eller flere per person',
          url: `${API}/trangboddhet-over-2-status`,
          method: 'value',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          template: 'b',
          heading: 'Husholdninger med 2 rom eller flere per person',
          url: `${API}/trangboddhet-over-2-historisk`,
          method: 'ratio',
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          template: 'b',
          heading: 'Husholdninger med 2 rom eller flere per person',
          url: `${API}/trangboddhet-over-2-historisk`,
          method: 'value',
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Boforhold',
    tema: 'Trangboddhet',
    bgImage: `${baseUrl}/img/trangboddhet`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['boligpriser', 'levekaar', 'eierform'],
};
