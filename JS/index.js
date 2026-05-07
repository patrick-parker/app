import { convertAndFormatDate, numberFormatter } from './utils.js';

function setDate(cell, date) {
  cell.textContent = convertAndFormatDate(new Date(date));
}

function onDOMContentLoaded() {
  const dateField = document.getElementById('date');
  const priceField = document.getElementById('price');
  const dateCell = document.querySelector('.date');
  const priceCells = document.querySelectorAll('.price-cell');

  dateField.addEventListener('input', event => {
    setDate(dateCell, event.target.value);
  });
  priceField.addEventListener('input', event => {
    priceCells.forEach((cell, index) => {
      const price = event.target.value * (index + 1);
      cell.textContent = numberFormatter.format(price);
    });
  });

  const now = new Date().toISOString();
  dateField.value = now.substring(0, now.indexOf('T'));
  setDate(dateCell, dateField.value);
}

document.addEventListener('DOMContentLoaded', onDOMContentLoaded);
