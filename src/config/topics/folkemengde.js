import { baseUrl } from '../../util/config';

export default {
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
    txtColor: 'rgb(245, 173, 165)',
  },
};
