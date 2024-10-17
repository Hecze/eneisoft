// types.ts

//Home

export interface ItemSlideType {
    variant?: "orange" | "yellow" | "lime" | "purple" ;
    title: string;
    date: string;
    paragraph?: string;
    buttonText?: string;
    buttonLink: string;
    imgUrl: string;
    activityName: keyof ActivitiesDates;
  }


//Activities

export interface HeroType {
    title: string;
    date: string;
    paragraph: string;
    buttonText: string;
    buttonLink: string;
    imgUrl: string;
  }

  
export type AwardType = {
    league: string;
    prize: string;
};

export type InfoCardType = {
    icon: string;
    paragraph: string;
};

export type RequirementType = {
    icon: string,
    paragraph: string,
}

export type QuoteType = {
    quote: string;
    author: string;
}

export interface EventData {
    hero: HeroType;
    infoCards?: InfoCardType[];
    requirements?: RequirementType[];
    awards?: AwardType[];
    quote?: QuoteType;
  }


export interface ActivitiesDates {
    progra: string;
    hackathon: string;
    workshops: string;
    conferences: string;
    demoDay: string;
  }