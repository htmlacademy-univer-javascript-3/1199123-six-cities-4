import { Review } from './types/review';


export function formatDate(date: string): string {
  const newDate = new Date(date);

  const day = String(newDate.getUTCDate()).padStart(2, '0');
  const month = String(newDate.getUTCMonth() + 1).padStart(2, '0');
  const year = newDate.getUTCFullYear();

  return `${day}-${month}-${year}`;
}

export function getMonthYear(date: string) {
  const formattedDate = formatDate(date);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [year, month] = formattedDate.split('-').map((item) => parseInt(item, 10));
  return `${months[month - 2]} ${year}`;
}

export function sortReviewsByDate(reviews: Review[]): Review[] {
  return reviews.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}
