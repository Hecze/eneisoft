// @/data/index.tsx
import { EventData } from '@/types';
import conferencesData from './conferences.json';
import demoDayData from './demoDay.json';
import hackathonData from './hackathon.json';
import prograData from './progra.json';
import workshopsData from './workshops.json';
import dates from '../dates.json';

const data = {
  conferences: conferencesData as EventData,
  demoDay: demoDayData as EventData,
  hackathon: hackathonData as EventData,
  progra: prograData as EventData,
  workshops: workshopsData as EventData,
};

const getData = (type: keyof typeof data): EventData => {
  const eventData = data[type];
  const eventDate = dates[type];

  return {
    ...eventData,
    hero: {
      ...eventData.hero,
      date: eventDate,
    },
  };
};

/* 
Esta funcion permite obtener la data y accederla de esta manera:

const conferencesData = getData("conferences");

console.log(conferencesData.hero);
console.log(conferencesData.awards);
console.log(conferencesData.infoCards);
console.log(conferencesData.quote);
console.log(conferencesData.requirements);

*/

export default getData;
