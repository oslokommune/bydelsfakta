import { apiUrl, baseUrl } from '../../util/config';
import source from './dataSources';

const API = `${apiUrl}/api/dataset`;

export default {
  text: 'Utdanning',
  value: 'utdanning',
  cards: [
    {
      size: 'large',
      heading: 'Utdanning',
      about: {
        info: '<p>Tabellen viser befolkning 16 år eller eldre per 1.1 for hvert år med utdanningsnivå per 1.10. Årgangen i tabellen refererer til året for utdanningsnivået.</p><p>Utdanningsnivå er definert som høyeste avsluttede utdanning. Variabelen er klassifisert i fem nivåer, grunnskole, videregående utdanning, universitet/høyskole lavere nivå (omfatter høyere utdanning t.o.m. 4 år), universitet/høyskole høyere nivå (omfatter høyere utdanning på mer enn 4 år, samt forskerutdanning) og uoppgitt eller ingen fullført utdanning.</p><p>Fra og med 1.10.2014 har SSB gjort endringer i beregningsmetode over utdanningsnivå for innvandrere som står med uoppgitt i registeret. SSB bruker importerte verdier på disse dataene. Dette har ført til brudd i tidsserien; data for 2014 og senere er ikke direkte sammenlignbare med tidligere perioder. Se link til SSB for mer informasjon:<a href="http://www.ssb.no/utdanning/statistikker/utniv/aar/2016-06-20?fane=om">http://www.ssb.no/utdanning/statistikker/utniv/aar/2016-06-20?fane=om</a>.</p>',
        sources: [source.ssb],
      },
      tabs: [
        {
          label: 'Andel',
          id: 'utdanning_status_andel',
          template: 'bars',
          method: 'ratio',
          url: `${API}/utdanning-status`,
        },
        {
          label: 'Antall',
          id: 'utdanning_status_antall',
          template: 'bars',
          method: 'value',
          url: `${API}/utdanning-status`,
        },
        {
          label: 'Historisk (Andel)',
          id: 'utdanning_historisk_andel',
          template: 'linesMulti',
          method: 'ratio',
          url: `${API}/utdanning-historisk`,
        },
        {
          label: 'Historisk (antall)',
          id: 'utdanning_historisk_antall',
          template: 'linesMulti',
          method: 'value',
          url: `${API}/utdanning-historisk`,
        },
      ],
    },
  ],
  options: {
    kategori: 'Utdanning',
    tema: 'Utdanning',
    bgImage: `${baseUrl}/img/utdanning`,
    txtColor: 'rgb(179, 245, 255)',
  },
};
