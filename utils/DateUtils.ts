// utils/dateUtils.ts
import activitiesDates from '@/data/activities/dates.json';
import { parse, format } from 'date-fns';
import { es } from 'date-fns/locale';

// Define el tipo para tus actividades
interface ActivitiesDates {
    progra: string;
    hackathon: string;
    talleres: string;
    conferencias: string;
    demoDay: string;
}


interface FormattedDate {
    dayNumber: string;
    dayName: string;
    monthNumber: string;
    monthName: string;
    year: string;
}

export const getFormattedDate = (activity: keyof ActivitiesDates): FormattedDate => {
    const dateStr = activitiesDates[activity];
    const date = parse(dateStr, 'dd/MM/yyyy', new Date());

    const dayNumber = format(date, 'd');
    const dayName = format(date, 'EEEE', { locale: es });
    const monthNumber = format(date, 'M');
    const monthName = format(date, 'MMMM', { locale: es });
    const year = format(date, 'yyyy');

    return { dayNumber, dayName, monthNumber, monthName, year };
};


