export const formatDate = (date: string): string => {
  const d = new Date(date);
  const formatter = new Intl.DateTimeFormat('en-US', { dateStyle: 'short' });

  return formatter.format(d);
};
