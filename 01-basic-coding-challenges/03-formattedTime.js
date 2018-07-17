const formattedTime = (mins) => {
  const checkHours = Math.floor(mins / 60);
  const hoursResult = checkHours >= 10 ? checkHours : `0${checkHours}`;
  const checkMinutes = mins % 60;
  const minutesResult = checkMinutes >= 10 ? checkMinutes : `0${checkMinutes}`;
  return `${hoursResult}:${minutesResult}`;
};