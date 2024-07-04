// types.ts

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

export type ItemSlideType = {
    variant?: "orange" | "yellow" | "lime" | "purple" ;
    title: string;
    date: string;
    paragraph?: string;
    buttonText?: string;
    buttonLink: string;
    imgUrl: string;
}
