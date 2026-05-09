import { convertAndFormatDate, formatNumber } from './utils.js';

function setDate(cell, date) {
  cell.textContent = convertAndFormatDate(new Date(date));
}

function onDOMContentLoaded() {
  const dateField = document.getElementById('date');
  const priceField = document.getElementById('price');
  const dateCell = document.querySelector('.date');
  const priceCells = document.querySelectorAll('.price-cell');
  const priceInWords = document.getElementById('priceInWords');

  dateField.addEventListener('input', event => {
    setDate(dateCell, event.target.value);
  });
  priceField.addEventListener('input', event => {
    const newPrice = Number.parseInt(event.target.value);
    priceInWords.textContent = formatNumber(newPrice * 1000);
    priceCells.forEach((cell, index) => {
      const price = newPrice * (index + 1);
      cell.textContent = formatNumber(price);
    });
  });

  const now = new Date().toISOString();
  dateField.value = now.substring(0, now.indexOf('T'));
  setDate(dateCell, dateField.value);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
