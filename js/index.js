const deadlineDate = new Date('2024-05-20 21:00');

function updateCounter() {
  const t = Date.parse(deadlineDate) - Date.parse(new Date());
  const seconds = Math.floor((t / 1000) % 60);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const hoursStr = hours < 10 ? `0${hours}` : `${hours}`;
  const daysStr = days < 10 ? `0${days}` : `${days}`;
  setCounter(daysStr, hoursStr, minutesStr, secondsStr);
}

function setCounter(days, hours, minutes, seconds) {
  const daysElem = document.querySelector('.first-screen__counter-item-value_days');
  const hoursElem = document.querySelector('.first-screen__counter-item-value_hours');
  const minutesElem = document.querySelector('.first-screen__counter-item-value_minutes');
  const secondsElem = document.querySelector('.first-screen__counter-item-value_seconds');
  if (daysElem) daysElem.innerText = days;
  if (hoursElem) hoursElem.innerText = hours;
  if (minutesElem) minutesElem.innerText = minutes;
  if (secondsElem) secondsElem.innerText = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

const tokenButton = document.querySelector('.first-screen__presale-code-button');
const tokenCode = document.querySelector('.first-screen__presale-code-text');

if (tokenButton && tokenCode) {
  tokenButton.addEventListener('click', () => {
    navigator.clipboard.writeText(tokenCode.innerText);
  });
}
