import { ItemSlideType } from "@/types";
import dates from '../dates.json';
import rawCarrouselData from './carrousel.json';
import { ActivitiesDates } from '@/types';

const carrouselData = rawCarrouselData as ItemSlideType[];

const getData = (): ItemSlideType[] => {
  return carrouselData.map(slide => {
    const activityDate = dates[slide.activityName as keyof ActivitiesDates];
    
    return {
      ...slide,
      date: activityDate,
    };
  });
};

export default getData;
