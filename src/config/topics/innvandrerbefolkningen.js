import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Personer med innvandrerbakgrunn',
  value: 'innvandrerbefolkningen',
  production: true,

  cards: [
    {
      size: 'large',
      heading: 'Innvandringskategori',
      about: {
        info:
          'Statistikken viser folkemengden per 1.1. hvert år. «Innvandrere» defineres som personer som er født i utlandet av to utenlandsfødte foreldre og fire utenlandsfødte besteforeldre. «Norskfødte med innvandrerforeldre» er personer som er født i Norge av to foreldre som er født i utlandet, og som i tillegg har fire besteforeldre som er født i utlandet. Botid er beregnet etter ankomstår til Norge.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog51&submode=catalog&mode=documentation&top=yes',
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          template: 'bars',
          heading: 'Personer etter innvandringskategori og botid',
          method: 'ratio',
          id: 'personer_innvandringskategori_botid_status_andel',
          url: `${API}/innvandring-befolkning-alle-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          template: 'bars',
          heading: 'Personer etter innvandringskategori og botid',
          method: 'value',
          id: 'personer_innvandringskategori_botid_status_antall',
          url: `${API}/innvandring-befolkning-alle-status`,
          production: true,
        },

        {
          active: true,
          label: 'Historisk (andel)',
          template: 'linesMulti',
          heading: 'Personer etter innvandringskategori og botid',
          method: 'ratio',
          id: 'personer_innvandringskategori_botid_historisk_andel',
          url: `${API}/innvandring-befolkning-alle-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          template: 'linesMulti',
          heading: 'Personer etter innvandringskategori og botid',
          method: 'value',
          id: 'personer_innvandringskategori_botid_historisk_antall',
          url: `${API}/innvandring-befolkning-alle-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'large',
      heading: 'Landbakgrunn',
      about: {
        info:
          '«Landbakgrunn» for innvandrere er vanligvis fødeland. For norskfødte er dette foreldrenes eventuelle utenlandske fødeland. I tilfeller der foreldrene har ulikt fødeland, er det mors fødeland som gjelder.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog51&submode=catalog&mode=documentation&top=yes',
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          noFilter: true,
          id: 'innvandring_landbakgrunn_status_andel',
          heading: 'Personer etter landbakgrunn og innvandringskategori (10 største grupper etter landbakgrunn)',
          template: 'bars',
          method: 'ratio',
          url: `${API}/landbakgrunn-innvandringsgrupper-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          noFilter: true,
          id: 'innvandring_landbakgrunn_status_antall',
          heading: 'Personer etter landbakgrunn og innvandringskategori (10 største grupper etter landbakgrunn)',
          template: 'bars',
          method: 'value',
          url: `${API}/landbakgrunn-innvandringsgrupper-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          noFilter: true,
          id: 'innvandring_landbakgrunn_historisk_andel',
          heading: 'Personer etter landbakgrunn og innvandringskategori (10 største grupper etter landbakgrunn)',
          template: 'linesMulti',
          method: 'ratio',
          url: `${API}/landbakgrunn-innvandringsgrupper-historisk`,
          production: true,
        },

        {
          active: false,
          label: 'Historisk (antall)',
          noFilter: true,
          id: 'innvandring_landbakgrunn_historisk_antall',
          heading: 'Personer etter landbakgrunn og innvandringskategori (10 største grupper etter landbakgrunn)',
          template: 'linesMulti',
          method: 'value',
          url: `${API}/landbakgrunn-innvandringsgrupper-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Innvandrere under 16 år',
      about: {
        info:
          'Statistikken viser folkemengden per 1.1. hvert år. «Innvandrere» defineres som personer som er født i utlandet av to utenlandsfødte foreldre og fire utenlandsfødte besteforeldre. «Norskfødte med innvandrerforeldre» er personer som er født i Norge av to foreldre som er født i utlandet, og som i tillegg har fire besteforeldre som er født i utlandet.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog51&submode=catalog&mode=documentation&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/innvandring-under-16-innvandrer-status`,
        heading: 'Innvandrere under 16 år',
        reverse: true,
        method: 'ratio',
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'innvandring_under16-totalt_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/innvandring-under-16-innvandrer-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'innvandring_under16-totalt_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/innvandring-under-16-innvandrer-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'innvandring_under16-totalt_historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/innvandring-under-16-innvandrer-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'innvandring_under16-totalt_historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/innvandring-under-16-innvandrer-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Norskfødte under 16 år med én innvandrerforelder',
      about: {
        info:
          'Statistikken viser folkemengden per 1.1. hvert år. «Innvandrere» defineres som personer som er født i utlandet av to utenlandsfødte foreldre og fire utenlandsfødte besteforeldre. «Norskfødte med innvandrerforeldre» er personer som er født i Norge av to foreldre som er født i utlandet, og som i tillegg har fire besteforeldre som er født i utlandet.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog51&submode=catalog&mode=documentation&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        url: `${API}/innvandring-under-16-en-innvandrerforelder-status`,
        heading: 'Innvandrere under 16 år med én innvandrerforelder',
        reverse: true,
        method: 'ratio',
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'innvandring_under16-en-innvandrerforelder_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/innvandring-under-16-en-innvandrerforelder-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'innvandring_under16-en-innvandrerforelder_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/innvandring-under-16-en-innvandrerforelder-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'innvandring_under16-en-innvandrerforelder_historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/innvandring-under-16-en-innvandrerforelder-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'innvandring_under16-en-innvandrerforelder_historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/innvandring-under-16-en-innvandrerforelder-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Norskfødte under 16 år med to innvandrerforeldre',
      about: {
        info:
          'Statistikken viser folkemengden per 1.1. hvert år. «Innvandrere» defineres som personer som er født i utlandet av to utenlandsfødte foreldre og fire utenlandsfødte besteforeldre. «Norskfødte med innvandrerforeldre» er personer som er født i Norge av to foreldre som er født i utlandet, og som i tillegg har fire besteforeldre som er født i utlandet.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog51&submode=catalog&mode=documentation&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Innvandrere under 16 år med to innvandrerforeldre',
        reverse: true,
        method: 'ratio',
        url: `${API}/innvandring-under-16-to-innvandrerforeldre-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'innvandring_under16-to-innvandrerforeldre_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/innvandring-under-16-to-innvandrerforeldre-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'innvandring_under16-to-innvandrerforeldre_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/innvandring-under-16-to-innvandrerforeldre-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'innvandring_under16-to-innvandrerforeldre_historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/innvandring-under-16-to-innvandrerforeldre-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'innvandring_under16-to-innvandrerforeldre_historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/innvandring-under-16-to-innvandrerforeldre-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Innvandrer kort botid (<=5år)',
      about: {
        info:
          'Statistikken viser folkemengden per 1.1. hvert år. «Innvandrere» defineres som personer som er født i utlandet av to utenlandsfødte foreldre og fire utenlandsfødte besteforeldre. «Norskfødte med innvandrerforeldre» er personer som er født i Norge av to foreldre som er født i utlandet, og som i tillegg har fire besteforeldre som er født i utlandet. Botid er beregnet etter ankomstår til Norge.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog51&submode=catalog&mode=documentation&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Innvandrer kort botid (<=5 år)',
        reverse: true,
        method: 'ratio',
        url: `${API}/innvandring-befolkning-kort-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'innvandring_befolkning_kort_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/innvandring-befolkning-kort-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'innvandring_befolkning_kort_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/innvandring-befolkning-kort-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'innvandring_befolkning_kort_historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/innvandring-befolkning-kort-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'innvandring_befolkning_kort_historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/innvandring-befolkning-kort-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Innvandrer lang botid (>5 år)',
      about: {
        info:
          'Statistikken viser folkemengden per 1.1. hvert år. «Innvandrere» defineres som personer som er født i utlandet av to utenlandsfødte foreldre og fire utenlandsfødte besteforeldre. «Norskfødte med innvandrerforeldre» er personer som er født i Norge av to foreldre som er født i utlandet, og som i tillegg har fire besteforeldre som er født i utlandet. Botid er beregnet etter ankomstår til Norge.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog51&submode=catalog&mode=documentation&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Innvandrer lang botid (>5 år)',
        reverse: true,
        method: 'ratio',
        url: `${API}/innvandring-befolkning-lang-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'innvandring_befolkning_lang_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/innvandring-befolkning-lang-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'innvandring_befolkning_lang_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/innvandring-befolkning-lang-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'innvandring_befolkning_lang_historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/innvandring-befolkning-lang-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'innvandring_befolkning_lang_historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/innvandring-befolkning-lang-historisk`,
          production: true,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Norskfødt med innvandrerforeldre',
      about: {
        info:
          'Statistikken viser folkemengden per 1.1. hvert år. «Innvandrere» defineres som personer som er født i utlandet av to utenlandsfødte foreldre og fire utenlandsfødte besteforeldre. «Norskfødte med innvandrerforeldre» er personer som er født i Norge av to foreldre som er født i utlandet, og som i tillegg har fire besteforeldre som er født i utlandet. Botid er beregnet etter ankomstår til Norge.',
        sources: [source.ssb],
        externalInfo:
          'http://statistikkbanken.oslo.kommune.no/webview/index.jsp?catalog=http%3A%2F%2F192.168.101.44%3A80%2Fobj%2FfCatalog%2FCatalog51&submode=catalog&mode=documentation&top=yes',
      },
      map: {
        labels: ['Færre', 'Flere'],
        heading: 'Norskfødt med innvandrerforeldre',
        reverse: true,
        method: 'ratio',
        url: `${API}/innvandring-befolkning-to-foreldre-status`,
      },
      production: true,
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'innvandring_befolkning_to_foreldre_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/innvandring-befolkning-to-foreldre-status`,
          production: true,
        },
        {
          active: false,
          label: 'Antall',
          id: 'innvandring_befolkning_to_foreldre_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/innvandring-befolkning-to-foreldre-status`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (andel)',
          id: 'innvandring_befolkning_to_foreldre_historisk_andel',
          template: 'lines',
          method: 'ratio',
          url: `${API}/innvandring-befolkning-to-foreldre-historisk`,
          production: true,
        },
        {
          active: false,
          label: 'Historisk (antall)',
          id: 'innvandring_befolkning_to_foreldre_historisk_antall',
          template: 'lines',
          method: 'value',
          url: `${API}/innvandring-befolkning-to-foreldre-historisk`,
          production: true,
        },
      ],
    },
  ],
  options: {
    kategori: 'Befolkning',
    tema: 'Personer med innvandrer&shy;bakgrunn',
    bgImage: `${baseUrl}/img/innvandring`,
    txtColor: 'rgb(245, 173, 165)',
  },
  related: ['befolkningsutvikling', 'fodte-dode-flytting', 'boligpriser'],
};
