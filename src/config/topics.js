import alder from './topics/alder';
import befolkningsendringer from './topics/befolkningsendringer';
import boligpriser from './topics/boligpriser';
import bygningstyper from './topics/bygningstyper';
import eierform from './topics/eierform';
import folkemengde from './topics/folkemengde';
import husholdninger from './topics/husholdninger';
import innvandrerbefolkningen from './topics/innvandrerbefolkningen';
import levekaar from './topics/levekaar';
import trangboddhet from './topics/trangboddhet';

export const topicNames = [
  'folkemengde',
  'befolkningsendringer',
  'alder',
  'innvandrerbefolkningen',
  'husholdninger',
  'levekaar',
  'eierform',
  'bygningstyper',
  'boligpriser',
  'trangboddhet',
];

export const disabledTopics = ['befolkningsendringer', 'bygningstyper'];

export const categories = [
  {
    kategori: 'Befolkning',
    color: 'rgb(182, 63, 50)',
    links: ['folkemengde', 'befolkningsendringer', 'alder', 'innvandrerbefolkningen', 'husholdninger'],
  },
  {
    kategori: 'Bomiljø',
    color: 'rgb(27, 173, 120)',
    links: ['trangboddhet', 'eierform', 'bygningstyper', 'boligpriser'],
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
  folkemengde,
  husholdninger,
  innvandrerbefolkningen,
  levekaar,
  trangboddhet,
};
