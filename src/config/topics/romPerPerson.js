import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Rom per person',
  value: 'rom-per-person',
  cards: [
    {
      size: 'large',
      heading: 'Rom per person',
      about: {
        info: 'Statistikken viser husholdninger i Oslo per 1.1. fordelt på antall rom per person. Studenthusholdninger er utelatt fra statistikken. (Studenthusholdning: Husholdning der hovedinntektstaker er student i hht definisjonen under. Student: Person som verken er yrkesaktiv (ikke yrkesinntekt over 2G) eller trygdemottaker (ytelser fra folketrygden utgjør over halvparten av den samlede inntekten), og som mottar studielån)',
        sources: [source.ssb],
      },
      tabs: [
        {
          label: 'Andel',
          template: 'stackedBars',
          heading: 'Husholdninger fordelt etter antall rom per person',
          url: `${API}/trangboddhet-alle-status`,
          method: 'ratio',
          id: 'rom_per_pers_alle_status_andel',
        },
        {
          label: 'Antall',
          template: 'stackedBars',
          heading: 'Husholdninger fordelt etter antall rom per person',
          url: `${API}/trangboddhet-alle-status`,
          method: 'value',
          id: 'rom_per_pers_alle_status_antall',
        },

        {
          label: 'Historisk (andel)',
          template: 'linesMulti',
          heading: 'Husholdninger fordelt etter antall rom per person',
          url: `${API}/trangboddhet-alle-historisk`,
          method: 'ratio',
          id: 'rom_per_pers_alle_historisk_andel',
        },
        {
          label: 'Historisk (antall)',
          template: 'linesMulti',
          heading: 'Husholdninger fordelt etter antall rom per person',
          url: `${API}/trangboddhet-alle-historisk`,
          method: 'value',
          id: 'rom_per_pers_alle_historisk_antall',
        },
      ],
    },
    {
      size: 'small',
      heading: 'Under 0,5 rom per person',
      about: {
        info: 'Statistikken viser husholdninger i Oslo per 1.1. fordelt på antall rom per person. Studenthusholdninger er utelatt fra statistikken. (Studenthusholdning: Husholdning der hovedinntektstaker er student i hht definisjonen under. Student: Person som verken er yrkesaktiv (ikke yrkesinntekt over 2G) eller trygdemottaker (ytelser fra folketrygden utgjør over halvparten av den samlede inntekten), og som mottar studielån)',
        sources: [source.ssb],
      },
      map: {
        labels: ['Lav andel', 'Høy andel'],
        method: 'ratio',
        heading: 'Husstander med under 0,5 rom per person',
        reverse: true,
        url: `${API}/trangboddhet-under-0-5-status`,
      },
      tabs: [
        {
          label: 'Andel',
          template: 'bars',
          heading: 'Husholdninger med under 0,5 rom per person',
          url: `${API}/trangboddhet-under-0-5-status`,
          method: 'ratio',
          id: 'husholdninger_under_0_5_per_pers_status_andel',
        },
        {
          label: 'Antall',
          template: 'bars',
          heading: 'Husholdninger med under 0,5 rom per person',
          url: `${API}/trangboddhet-under-0-5-status`,
          method: 'value',
          id: 'husholdninger_under_0_5_per_pers_status_antall',
        },
        {
          label: 'Historisk (andel)',
          template: 'lines',
          heading: 'Husholdninger med under 0,5 rom per person',
          url: `${API}/trangboddhet-under-0-5-historisk`,
          method: 'ratio',
          id: 'husholdninger_0_5_per_pers_historisk_andel',
        },
        {
          label: 'Historisk (antall)',
          template: 'lines',
          heading: 'Husholdninger med under 0,5 rom per person',
          url: `${API}/trangboddhet-under-0-5-historisk`,
          method: 'value',
          id: 'husholdninger_under_0_5_per_pers_hitorisk_antall',
        },
      ],
    },

    {
      size: 'small',
      heading: '0,5–0,9 rom per person',
      about: {
        info: 'Statistikken viser husholdninger i Oslo per 1.1. fordelt på antall rom per person. Studenthusholdninger er utelatt fra statistikken. (Studenthusholdning: Husholdning der hovedinntektstaker er student i hht definisjonen under. Student: Person som verken er yrkesaktiv (ikke yrkesinntekt over 2G) eller trygdemottaker (ytelser fra folketrygden utgjør over halvparten av den samlede inntekten), og som mottar studielån)',
        sources: [source.ssb],
      },
      map: {
        labels: ['Lav andel', 'Høy andel'],
        method: 'ratio',
        heading: 'Husholdninger med 0,5–0,9 rom per person',
        reverse: true,
        url: `${API}/trangboddhet-0-5-0-9-status`,
      },
      tabs: [
        {
          label: 'Andel',
          template: 'bars',
          heading: 'Husholdninger med 0,5–0,9 rom per person',
          url: `${API}/trangboddhet-0-5-0-9-status`,
          method: 'ratio',
          id: 'husholdninger_0_5_til_0_9_per_pers_status_andel',
        },
        {
          label: 'Antall',
          template: 'bars',
          heading: 'Husholdninger med 0,5–0,9 rom per person',
          url: `${API}/trangboddhet-0-5-0-9-status`,
          method: 'value',
          id: 'husholdninger_0_5_til_0_9_per_pers_status_antall',
        },
        {
          label: 'Historisk (andel)',
          template: 'lines',
          heading: 'Husholdninger med 0,5–0,9 rom per person',
          url: `${API}/trangboddhet-0-5-0-9-historisk`,
          method: 'ratio',
          id: 'husholdninger_0_5_til_0_9_per_pers_historisk_andel',
        },
        {
          label: 'Historisk (antall)',
          template: 'lines',
          heading: 'Husholdninger med 0,5–0,9 rom per person',
          url: `${API}/trangboddhet-0-5-0-9-historisk`,
          method: 'value',
          id: 'husholdninger_0_5_til_0_9_per_pers_status_antall',
        },
      ],
    },

    {
      size: 'small',
      heading: '1–1,9 rom per person',
      about: {
        info: 'Statistikken viser husholdninger i Oslo per 1.1. fordelt på antall rom per person. Studenthusholdninger er utelatt fra statistikken. (Studenthusholdning: Husholdning der hovedinntektstaker er student i hht definisjonen under. Student: Person som verken er yrkesaktiv (ikke yrkesinntekt over 2G) eller trygdemottaker (ytelser fra folketrygden utgjør over halvparten av den samlede inntekten), og som mottar studielån)',
        sources: [source.ssb],
      },
      map: {
        labels: ['Lav andel', 'Høy andel'],
        method: 'ratio',
        heading: 'Husholdninger med 1–1,9 rom per person',
        reverse: true,
        url: `${API}/trangboddhet-1-0-1-9-status`,
      },
      tabs: [
        {
          label: 'Andel',
          template: 'bars',
          heading: 'Husholdninger med 1–1,9 rom per person',
          url: `${API}/trangboddhet-1-0-1-9-status`,
          method: 'ratio',
          id: 'husholdninger_1_til_1_9_per_pers_status_andel',
        },
        {
          label: 'Antall',
          template: 'bars',
          heading: 'Husholdninger med 1–1,9 rom per person',
          url: `${API}/trangboddhet-1-0-1-9-status`,
          method: 'value',
          id: 'husholdninger_1_til_1_9_per_pers_status_antall',
        },
        {
          label: 'Historisk (andel)',
          template: 'lines',
          heading: 'Husholdninger med 1–1,9 rom per person',
          url: `${API}/trangboddhet-1-0-1-9-historisk`,
          method: 'ratio',
          id: 'husholdninger_1_til_1_9_per_pers_historisk_andel',
        },
        {
          label: 'Historisk (antall)',
          template: 'lines',
          heading: 'Husholdninger med 1–1,9 rom per person',
          url: `${API}/trangboddhet-1-0-1-9-historisk`,
          id: 'husholdninger_1_til_1_9_per_pers_historisk_antall',
          method: 'value',
        },
      ],
    },

    {
      size: 'small',
      heading: '2 rom eller flere per person',
      about: {
        info: 'Statistikken viser husholdninger i Oslo per 1.1. fordelt på antall rom per person. Studenthusholdninger er utelatt fra statistikken. (Studenthusholdning: Husholdning der hovedinntektstaker er student i hht definisjonen under. Student: Person som verken er yrkesaktiv (ikke yrkesinntekt over 2G) eller trygdemottaker (ytelser fra folketrygden utgjør over halvparten av den samlede inntekten), og som mottar studielån)',
        sources: [source.ssb],
      },
      map: {
        labels: ['Lav andel', 'Høy andel'],
        method: 'ratio',
        heading: 'Husholdninger med 2 rom eller flere per person',
        reverse: true,
        url: `${API}/trangboddhet-over-2-status`,
      },
      tabs: [
        {
          label: 'Andel',
          template: 'bars',
          heading: 'Husholdninger med 2 rom eller flere per person',
          url: `${API}/trangboddhet-over-2-status`,
          method: 'ratio',
          id: 'husholdninger_2_eller_flere_per_pers_status_andel',
        },
        {
          label: 'Antall',
          template: 'bars',
          heading: 'Husholdninger med 2 rom eller flere per person',
          url: `${API}/trangboddhet-over-2-status`,
          method: 'value',
          id: 'husholdninger_2_eller_flere_per_pers_status_antall',
        },
        {
          label: 'Historisk (andel)',
          template: 'lines',
          heading: 'Husholdninger med 2 rom eller flere per person',
          url: `${API}/trangboddhet-over-2-historisk`,
          method: 'ratio',
          id: 'husholdninger_2_eller_flere_per_pers_historisk_andel',
        },
        {
          label: 'Historisk (antall)',
          template: 'lines',
          heading: 'Husholdninger med 2 rom eller flere per person',
          url: `${API}/trangboddhet-over-2-historisk`,
          method: 'value',
          id: 'husholdninger_2_eller_flere_per_pers_historisk_antall',
        },
      ],
    },
  ],
  options: {
    kategori: 'Boforhold',
    tema: 'Rom per person',
    bgImage: `${baseUrl}/img/trangboddhet`,
    txtColor: 'rgb(199, 247, 201)',
  },
  related: ['boligpriser', 'levekaar', 'eierform'],
};
