import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
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
        labels: ['Færre', 'Flere'],
        url: `${API}/Lav_utdanning_status-fYdyK`,
        scale: [0, 0.5],
        reverse: true,
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
          label: 'Antall',
          id: 'levekar_lav-utdanning_andel',
          template: 'a',
          method: 'value',
          url: `${API}/Lav_utdanning_status-fYdyK`,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_lav-utdanning_historisk',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2014 og 2015.',
          method: 'ratio',
          template: 'b',
          url: `${API}/Lav_utdanning_historisk-qBXzf`,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_lav-utdanning_historisk',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2014 og 2015.',
          method: 'value',
          template: 'b',
          url: `${API}/Lav_utdanning_historisk-qBXzf`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Fattige barnehusholdninger',
      map: {
        labels: ['Færre', 'Flere'],
        reverse: true,
        scale: [0, 0.3],
        method: 'ratio',
        url: `${API}/Fattige_barnehusholdninger_sta-EmecB`,
      },
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_fattige_andel',
          template: 'a',
          method: 'ratio',
          url: `${API}/Fattige_barnehusholdninger_sta-EmecB`,
        },
        {
          active: false,
          label: 'Antall',
          id: 'levekar_fattige_andel',
          template: 'a',
          method: 'value',
          url: `${API}/Fattige_barnehusholdninger_sta-EmecB`,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_fattige_historisk',
          method: 'ratio',
          template: 'b',
          url: `${API}/Fattige_barnehusholdninger_his-GoaU8`,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'levekar_fattige_historisk',
          method: 'value',
          template: 'b',
          url: `${API}/Fattige_barnehusholdninger_his-GoaU8`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Ikke-fullført vgs',
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/Levekar-vgs-historisk-t2ZTn`,
        method: 'ratio',
        scale: [0.1, 0.5],
        reverse: true,
      },
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'levekar_vgs_andel',
          template: 'a',
          method: 'ratio',
          url: `${API}/Levekar-vgs-status-vFLio`,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'levekar_vgs-historisk',
          template: 'b',
          method: 'ratio',
          url: `${API}/Levekar-vgs-historisk-t2ZTn`,
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
    txtColor: 'rgb(244, 206, 138)',
  },
  related: ['husholdninger', 'innvandrerbefolkningen', 'trangboddhet'],
};
