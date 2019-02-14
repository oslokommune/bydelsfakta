import baseUrl from '../util/config';

const subpages = [
  {
    text: 'Folkemengde',
    value: 'folkemengde',
    options: {
      kategori: 'Befolkning',
      tema: 'Folkemengde',
      bgImage: `${baseUrl()}/img/folkemengde.png`,
      bgColor: 'rgb(255, 129, 116)',
      txtColor: 'rgb(245, 173, 165)',
    },
    related: ['alder', 'innvandring', 'flytting'],
  },
  {
    text: 'Alder',
    value: 'alder',
    options: {
      kategori: 'Befolkning',
      tema: 'Alder',
      bgImage: `${baseUrl()}/img/alder.png`,
      bgColor: 'rgb(255, 129, 116)',
      txtColor: 'rgb(245, 173, 165)',
    },
    related: ['folkemengde', 'husholdninger', 'levekaar'],
  },
  {
    text: 'Innvandrerbefolkningen',
    value: 'innvandrerbefolkningen',
    options: {
      kategori: 'Befolkning',
      tema: 'Innvandrer&shy;befolkningen',
      bgImage: `${baseUrl()}/img/innvandring.png`,
      bgColor: 'rgb(255, 129, 116)',
      txtColor: 'rgb(245, 173, 165)',
    },
    related: ['folkemengde', 'flytting', 'boligpriser'],
  },
  {
    text: 'Husholdninger',
    value: 'husholdninger',
    options: {
      kategori: 'Bomiljø',
      tema: 'Husholdninger',
      bgImage: `${baseUrl()}/img/husholdninger.png`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['trangboddhet', 'eierform', 'bygningstyper'],
  },
  {
    text: 'Trangboddhet',
    value: 'trangboddhet',
    options: {
      kategori: 'Bomiljø',
      tema: 'Trangboddhet',
      bgImage: `${baseUrl()}/img/trangboddhet.png`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['boligpriser', 'levekaar', 'eierform'],
  },
  {
    text: 'Eierform',
    value: 'eierform',
    options: {
      kategori: 'Bomiljø',
      tema: 'Eierform',
      bgImage: `${baseUrl()}/img/eierform.png`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['boligpriser', 'trangboddhet', 'bygningstyper'],
  },
  {
    text: 'Kommunale boliger',
    value: 'kommunaleboliger',
    options: {
      kategori: 'Bomiljø',
      tema: 'Kommunale boliger',
      bgImage: `${baseUrl()}/img/kommunale-boliger.png`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['boligpriser', 'trangboddhet', 'husholdninger'],
  },
  {
    text: 'Flytting',
    value: 'flytting',
    options: {
      kategori: 'Bomiljø',
      tema: 'Flytting',
      bgImage: `${baseUrl()}/img/flytting.png`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['boligpriser', 'folkemengde', 'bygningstyper'],
  },
  {
    text: 'Bygningstyper',
    value: 'bygningstyper',
    options: {
      kategori: 'Bomiljø',
      tema: 'Bygningstyper',
      bgImage: `${baseUrl()}/img/bygningstyper.png`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['husholdninger', 'trangboddhet', 'boligpriser'],
  },
  {
    text: 'Boligpriser',
    value: 'boligpriser',
    options: {
      kategori: 'Bomiljø',
      tema: 'Boligpriser',
      bgImage: `${baseUrl()}/img/boligpriser.png`,
      bgColor: 'rgb(66, 248, 182)',
      txtColor: 'rgb(199, 247, 201)',
    },
    related: ['trangboddhet', 'eierform', 'flytting'],
  },
  {
    text: 'Levekår',
    value: 'levekaar',
    options: {
      kategori: 'Levekår',
      tema: 'Levekår',
      bgImage: `${baseUrl()}/img/levekaar.png`,
      bgColor: 'rgb(248, 198, 107)',
      txtColor: 'rgb(244, 206, 138)',
    },
    related: ['husholdninger', 'innvandring', 'trangboddhet'],
  },
];

export default subpages;
