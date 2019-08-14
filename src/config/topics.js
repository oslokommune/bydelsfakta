import alder from './topics/alder';
import befolkningsendringer from './topics/befolkningsendringer';
import boligpriser from './topics/boligpriser';
import bygningstyper from './topics/bygningstyper';
import eierform from './topics/eierform';
import befolkningsutvikling from './topics/befolkningsutvikling';
import husholdninger from './topics/husholdninger';
import innvandrerbefolkningen from './topics/innvandrerbefolkningen';
import levekaar from './topics/levekaar';
import rom_per_person from './topics/rom_per_person';

export const topicNames = [
  'befolkningsutvikling',
  'befolkningsendringer',
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
    links: ['befolkningsutvikling', 'befolkningsendringer', 'alder', 'innvandrerbefolkningen', 'husholdninger'],
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
  befolkningsendringer,
  boligpriser,
  bygningstyper,
  eierform,
  befolkningsutvikling,
  husholdninger,
  innvandrerbefolkningen,
  levekaar,
  'rom-per-person': rom_per_person,
};
