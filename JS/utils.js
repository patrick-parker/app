export function convertAndFormatDate(date) {
  return Intl.DateTimeFormat('fa-IR', {
    calendar: 'persian',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

export function formatNumber(number) {
  return Intl.NumberFormat('en-US', {
    useGrouping: true,
  }).format(number);
}
