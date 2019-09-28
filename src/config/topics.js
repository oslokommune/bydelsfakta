import alder from './topics/alder';
import fodte_dode_flytting from './topics/fodte-dode-flytting';
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
  'fodte-dode-flytting',
  'alder',
  'innvandrerbefolkningen',
  'husholdninger',
  'levekaar',
  'eierform',
  'bygningstyper',
  'boligpriser',
  // 'rom-per-person', TODO: temporary
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
    links: [/*'rom-per-person', TODO: temporary */ 'eierform', 'bygningstyper', 'boligpriser'],
  },
  {
    kategori: 'Levekår',
    color: 'rgb(219, 160, 52)',
    links: ['levekaar'],
  },
];

export const topics = {
  alder,
  'fodte-dode-flytting': fodte_dode_flytting,
  boligpriser,
  bygningstyper,
  eierform,
  befolkningsutvikling,
  husholdninger,
  innvandrerbefolkningen,
  levekaar,
  'rom-per-person': rom_per_person,
};
