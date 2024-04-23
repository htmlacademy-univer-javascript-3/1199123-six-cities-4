export function formatDate(date: Date): string {
  const offset = date.getTimezoneOffset();
  date = new Date(date.getTime() - offset * 60 * 1000);
  return date.toISOString().split('T')[0];
}

export function getMonthYear(date: Date) {
  const formattedDate = formatDate(date);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const [year, month] = formattedDate.split('-').map((item) => parseInt(item, 10));
  return `${months[month - 2]} ${year}`;
}
