// utils/dateUtils.ts
import { parse, format, isValid } from 'date-fns';
import { es } from 'date-fns/locale';

interface FormattedDate {
  dayNumber: string;
  dayName: string;
  monthNumber: string;
  monthName: string;
  year: string;
}

export const getFormattedDate = (dateStr: string): FormattedDate => {
  // Intenta analizar la fecha
  const date = parse(dateStr, 'dd/MM/yyyy', new Date());
  
  // Verifica si la fecha es válida y corresponde al formato esperado
  if (!isValid(date) || format(date, 'dd/MM/yyyy') !== dateStr) {
    throw new Error('Invalid date format. Please use dd/MM/yyyy.' + "\n" + "Received: " + dateStr);
  }

  const dayNumber = format(date, 'd');
  const dayName = format(date, 'EEEE', { locale: es });
  const monthNumber = format(date, 'M');
  const monthName = format(date, 'MMMM', { locale: es });
  const year = format(date, 'yyyy');

  return { dayNumber, dayName, monthNumber, monthName, year };
};
