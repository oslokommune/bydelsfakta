import { baseUrl } from '../../util/config';

export default {
  text: 'Folkemengde',
  value: 'folkemengde',
  show: null,
  cards: [
    {
      size: 'large',
      heading: '',
      map: {
        labels: ['', ''],
        url: ``,
      },
      show: null,
      tabs: [
        {
          active: false,
          label: 'Historisk',
          id: 'folkemengde_utvikling_historisk',
          template: 'h',
          url: `${baseUrl}/mockDataH.json`,
          show: null,
        },
        {
          active: false,
          label: 'Historisk (prosent)',
          id: 'folkemengde_utvikling_historisk-prosent',
          template: 'b',
          url: `${baseUrl}/mockDataB.json`,
          show: null,
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
      show: null,
      tabs: [
        {
          active: false,
          label: 'Historisk',
          id: 'folkemengde_utvikling_historisk',
          template: 'b',
          url: `${baseUrl}/mockDataB.json`,
          show: null,
        },
        {
          active: false,
          label: 'Historisk (prosent)',
          id: 'folkemengde_utvikling_historisk-prosent',
          template: 'b',
          method: 'ratio',
          url: `${baseUrl}/mockDataB.json`,
          show: null,
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
      show: null,
      tabs: [
        {
          active: false,
          label: 'Nøkkeltall',
          id: 'folkemengde_nokkeltall',
          template: 'g',
          url: `${baseUrl}/mockDataG.json`,
          show: null,
        },
      ],
    },
  ],
  related: ['alder', 'innvandrerbefolkningen', 'befolkningsendringer'],
  options: {
    kategori: 'Befolkning',
    tema: 'Folkemengde',
    bgImage: `${baseUrl}/img/folkemengde`,
    txtColor: 'rgb(245, 173, 165)',
  },
};
