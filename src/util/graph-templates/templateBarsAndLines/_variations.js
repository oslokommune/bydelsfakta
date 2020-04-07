export default {
  'population-growth': {
    lineData1: {
      heading: 'Netto innflytting',
      data: obj => obj.immigration - obj.emigration || 'N/A',
    },
    lineData2: {
      heading: 'Fødselsoverskudd',
      data: obj => obj.births - obj.deaths || 'N/A',
    },
    barData: {
      heading: 'Befolkningsvekst',
      data: obj => {
        if (!obj) return 'N/A';

        const netImmigration = obj.immigration - obj.emigration || 'N/A';
        const netBirths = obj.births - obj.deaths || 'N/A';
        const netGrowth =
          typeof netImmigration === 'number' && typeof netBirths === 'number' ? netImmigration + netBirths : 'N/A';

        return netGrowth;
      },
    },
  },
  'births-and-deaths': {
    lineData1: {
      heading: 'Antall fødte',
      data: obj => obj.births || 'N/A',
    },
    lineData2: {
      heading: 'Antall døde',
      data: obj => obj.deaths || 'N/A',
    },
    barData: {
      heading: 'Fødselsoverskudd',
      data: obj => obj.births - obj.deaths || 'N/A',
    },
  },

  migrations: {
    lineData1: {
      heading: 'Antall innfyttere',
      data: obj => obj.immigration || 'N/A',
    },
    lineData2: {
      heading: 'Antall utflyttere',
      data: obj => obj.emigration || 'N/A',
    },
    barData: {
      heading: 'Netto innflytting',
      data: obj => obj.immigration - obj.emigration || 'N/A',
    },
  },
};
