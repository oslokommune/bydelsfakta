import { apiUrl, baseUrl } from '../../util/config';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Personer med innvandrerbakgrunn',
  value: 'innvandrerbefolkningen',
  cards: [
    {
      size: 'large',
      heading: 'Landbakgrunn',
      tabs: [
        {
          active: false,
          label: 'Antall',
          noFilter: true,
          id: 'innvandring_landbakgrunn_status',
          template: 'a',
          method: 'value',
          url: `${API}/Landbakgrunn-innvandringsgrupp-cLcKm`,
        },
        {
          active: false,
          label: 'Andel',
          noFilter: true,
          id: 'innvandring_landbakgrunn_status',
          template: 'a',
          method: 'ratio',
          url: `${API}/Landbakgrunn-innvandringsgrupp-cLcKm`,
        },

        {
          active: false,
          label: 'Historisk',
          noFilter: true,
          id: 'innvandring_landbakgrunn_historisk',
          template: 'c',
          method: 'ratio',
          url: `${API}/Landbakgrunn-innvandringsgrupp-87zEq`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Under 16 år',
      map: {
        labels: ['Færre innvandrere', 'Flere innvandrere'],
        url: `${API}/Andel-innvandrere-under-16-sta-imHqA`,
        scale: [0.03, 0.15],
        reverse: true,
        method: 'ratio',
      },
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'innvandring_under16-totalt_status',
          template: 'a',
          method: 'ratio',
          url: `${API}/Andel-innvandrere-under-16-sta-imHqA`,
        },
        {
          active: false,
          label: 'Antall',
          id: 'innvandring_under16-totalt_status',
          template: 'a',
          method: 'value',
          url: `${API}/Andel-innvandrere-under-16-sta-imHqA`,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'innvandring_under16-totalt_historisk',
          template: 'b',
          method: 'ratio',
          url: `${API}/Andel-innvandrere-under-16-his-5EUaC`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Under 16 år med én innvandrerforelder',
      map: {
        labels: ['Færre innvandrere', 'Flere innvandrere'],
        url: `${API}/Andel-under-16-med-en-innvandr-rRuib`,
        scale: [0.15, 0.3],
        reverse: true,
        method: 'ratio',
      },
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'innvandring_under16-en-innvandrerforelder_status',
          template: 'a',
          method: 'ratio',
          url: `${API}/Andel-under-16-med-en-innvandr-rRuib`,
        },
        {
          active: false,
          label: 'Antall',
          id: 'innvandring_under16-en-innvandrerforelder_status',
          template: 'a',
          method: 'value',
          url: `${API}/Andel-under-16-med-en-innvandr-rRuib`,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'innvandring_under16-en-innvandrerforelder_historisk',
          template: 'b',
          method: 'ratio',
          url: `${API}/Andel-under-16-med-en-innvandr-JnGas`,
        },
      ],
    },
    {
      size: 'small',
      heading: 'Under 16 år med to innvandrerforeldre',
      map: {
        labels: ['Færre innvandrere', 'Flere innvandrere'],
        scale: [0.05, 0.75],
        reverse: true,
        method: 'ratio',
        url: `${API}/Andel-under-16-med-to-innvandr-jVhZm`,
      },
      tabs: [
        {
          active: false,
          label: 'Andel',
          id: 'innvandring_under16-to-innvandrerforeldre_status',
          template: 'a',
          method: 'ratio',
          url: `${API}/Andel-under-16-med-to-innvandr-jVhZm`,
        },
        {
          active: false,
          label: 'Antall',
          id: 'innvandring_under16-to-innvandrerforeldre_status',
          template: 'a',
          method: 'value',
          url: `${API}/Andel-under-16-med-to-innvandr-jVhZm`,
        },
        {
          active: false,
          label: 'Historisk',
          id: 'innvandring_under16-to-innvandrerforeldre_historisk',
          template: 'b',
          method: 'ratio',
          url: `${API}/Andel-under-16-med-to-innvandr-Zgj32`,
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
  related: ['folkemengde', 'befolkningsendringer', 'boligpriser'],
};
