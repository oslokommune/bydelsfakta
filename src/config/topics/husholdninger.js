import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Husholdninger',
  value: 'husholdninger',
  cards: [
    {
      size: 'large',
      heading: 'Husholdningstyper',
      about: {
        info: 'Statistikken omfatter privathusholdninger i Oslo per 1.1.',
        externalInfo:
          'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Husholdninger%20og%20boforhold',
        sources: [source.ssb],
      },
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/husholdningstyper-status`,
        heading: 'Énpersonshusholdninger',
        method: 'ratio',
        series: 0,
      },
      tabs: [
        {
          label: 'Andel',
          id: 'husholdningstyper_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/husholdningstyper-status`,
        },
        {
          label: 'Antall',
          id: 'husholdningstyper_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/husholdningstyper-status`,
        },
        {
          label: 'Historisk (andel)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdningstyper_historisk_andel',
          template: 'linesMulti',
          url: `${API}/husholdningstyper-historisk`,
          method: 'ratio',
        },
        {
          label: 'Historisk (antall)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdningstyper_historisk_antall',
          template: 'linesMulti',
          url: `${API}/husholdningstyper-historisk`,
          method: 'value',
        },
      ],
    },
    {
      size: 'large',
      heading: 'Husholdninger med barn',
      about: {
        info: 'Statistikken omfatter privathusholdninger i Oslo per 1.1. Husholdninger med barn regnes her som husholdninger med barn under 18 år.',
        sources: [source.ssb],
        externalInfo:
          'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Husholdninger%20og%20boforhold',
      },
      tabs: [
        {
          label: 'Andel',
          id: 'husholdning_totalt_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/husholdning-totalt-status`,
        },
        {
          label: 'Antall',
          id: 'husholdning_totalt_status_antall',
          heading: 'Husholdninger etter husholdningstype',
          template: 'bars',
          method: 'value',
          url: `${API}/husholdning-totalt-status`,
        },
        {
          label: 'Historisk (andel)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdning_totalt_historisk_andel',
          heading: 'Husholdninger etter husholdningstype',
          template: 'linesMulti',
          url: `${API}/husholdning-totalt-historisk`,
          method: 'ratio',
        },

        {
          label: 'Historisk (antall)',
          help: 'Skifte i datagrunnlaget fra SSB mellom 2012 og 2014.',
          id: 'husholdning_totalt_historisk_antall',
          heading: 'Husholdninger etter husholdningstype',
          template: 'linesMulti',
          url: `${API}/husholdning-totalt-historisk`,
          method: 'value',
        },
      ],
    },
    {
      size: 'small',
      heading: 'Husholdninger med ett barn',
      about: {
        info: 'Statistikken omfatter privathusholdninger i Oslo per 1.1.',
        externalInfo:
          'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Husholdninger%20og%20boforhold',
        sources: [source.ssb],
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Husholdninger med ett barn',
        url: `${API}/husholdninger-med-1-barn-status`,
        method: 'ratio',
      },
      tabs: [
        {
          label: 'Andel',
          id: 'husholdning_med_1_barn_andel-status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/husholdninger-med-1-barn-status`,
        },
        {
          label: 'Antall',
          id: 'husholdning_med_1_barn_antall-status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/husholdninger-med-1-barn-status`,
        },
        {
          label: 'Historisk (andel)',
          id: 'husholdning_med_1_barn_andel-historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/husholdninger-med-1-barn-historisk`,
        },
        {
          label: 'Historisk (antall)',
          id: 'husholdning_med_1_barn_antall-historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/husholdninger-med-1-barn-historisk`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Husholdninger med to barn',
      about: {
        info: 'Statistikken omfatter privathusholdninger i Oslo per 1.1.',
        sources: [source.ssb],
        externalInfo:
          'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Husholdninger%20og%20boforhold',
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Husholdninger med to barn',
        url: `${API}/husholdninger-med-2-barn-status`,
        method: 'ratio',
      },
      tabs: [
        {
          label: 'Andel',
          id: 'husholdning_med_to_barn_andel-status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/husholdninger-med-2-barn-status`,
        },
        {
          label: 'Antall',
          id: 'husholdning_med_to_barn_antall-status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/husholdninger-med-2-barn-status`,
        },
        {
          label: 'Historisk (andel)',
          id: 'husholdning_med_to_barn_andel-historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/husholdninger-med-2-barn-historisk`,
        },
        {
          label: 'Historisk (antall)',
          id: 'husholdning_med_to_barn_antall-historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/husholdninger-med-2-barn-historisk`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Husholdninger med tre eller flere barn',
      about: {
        info: 'Statistikken omfatter privathusholdninger i Oslo per 1.1.',
        sources: [source.ssb],
        externalInfo:
          'https://statistikkbanken.oslo.kommune.no/statbank/pxweb/no/db1/db1__Husholdninger%20og%20boforhold',
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Husholdninger med tre+ barn',
        url: `${API}/husholdninger-med-3-barn-status`,
        method: 'ratio',
      },
      tabs: [
        {
          label: 'Andel',
          id: 'husholdning_med_tre_barn_andel-status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/husholdninger-med-3-barn-status`,
        },
        {
          label: 'Antall',
          id: 'husholdning_med_tre_barn_antall-status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/husholdninger-med-3-barn-status`,
        },
        {
          label: 'Historisk (andel)',
          id: 'husholdning_med_tre_barn_andel-historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/husholdninger-med-3-barn-historisk`,
        },
        {
          label: 'Historisk (antall)',
          id: 'husholdning_med_tre_barn_antall-historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/husholdninger-med-3-barn-historisk`,
        },
      ],
    },
  ],
  options: {
    kategori: 'Befolkning',
    tema: 'Husholdninger',
    bgImage: `${baseUrl}/img/husholdninger`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['rom-per-person', 'eierform', 'bygningstyper'],
};
