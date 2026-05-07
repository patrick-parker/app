import { convertAndFormatDate, formatNumber } from './utils.js';

function getWindowQueryParameters() {
  return Object.fromEntries(
    window.location.search
      .substring(1)
      .split('&')
      .map(item => {
        const [key, value] = item.split('=');
        const out = key === 'date' ? new Date(value) : Number.parseInt(value);
        return [key, out];
      })
  );
}

function onDOMContentLoaded() {
  const params = getWindowQueryParameters();

  const dateCells = document.querySelectorAll('.date');
  const priceCells = document.querySelectorAll('.price-cell');

  const formattedDate = convertAndFormatDate(params.date);
  dateCells.forEach(cell => (cell.textContent = formattedDate));

  priceCells.forEach((cell, index) => {
    const price = params.price * ((index % 10) + 1);
    cell.textContent = formatNumber(price);
  });
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
