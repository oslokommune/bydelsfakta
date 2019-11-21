import alder from './topics/alder';
import fodteDodeFlytting from './topics/fodteDodeFlytting';
import boligpriser from './topics/boligpriser';
import bygningstyper from './topics/bygningstyper';
import eierform from './topics/eierform';
import befolkningsutvikling from './topics/befolkningsutvikling';
import husholdninger from './topics/husholdninger';
import innvandrerbefolkningen from './topics/innvandrerbefolkningen';
import levekaar from './topics/levekaar';
import romPerPerson from './topics/romPerPerson';

export const topicNames = [
  'befolkningsutvikling',
  'fodte-dode-flytting',
  'alder',
  'innvandrerbefolkningen',
  'husholdninger',
  'levekaar',
  'eierform',
  'bygningstyper',
  'boligpriser',
  'rom-per-person',
];

export const disabledTopics = [];

export const categories = [
  {
    kategori: 'Befolkning',
    color: 'rgb(182, 63, 50)',
    links: ['befolkningsutvikling', 'fodte-dode-flytting', 'alder', 'innvandrerbefolkningen', 'husholdninger'],
  },
  {
    kategori: 'Boforhold',
    color: 'rgb(27, 173, 120)',
    links: ['rom-per-person', 'eierform', 'bygningstyper', 'boligpriser'],
  },
  {
    kategori: 'Levekår',
    color: 'rgb(219, 160, 52)',
    links: ['levekaar'],
  },
];

export const topics = {
  alder,
  'fodte-dode-flytting': fodteDodeFlytting,
  boligpriser,
  bygningstyper,
  eierform,
  befolkningsutvikling,
  husholdninger,
  innvandrerbefolkningen,
  levekaar,
  'rom-per-person': romPerPerson,
};
