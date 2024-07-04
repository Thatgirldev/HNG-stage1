function updateTimeAndDay() {
  const currentTimeElement = document.querySelector('.text1');
  const currentDayElement = document.querySelector('.text2');

  // Get current time in UTC

  const now = new Date();

  // Format current time in UTC
  const utcHours = now.getUTCHours().toString().padStart(2, '0');
  const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
  const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');
  const currentTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;
  currentTimeElement.textContent = currentTime;

  // Get current day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = daysOfWeek[now.getUTCDay()];
  currentDayElement.textContent = currentDay;
}

// Update time and day every second
setInterval(updateTimeAndDay, 1000);
updateTimeAndDay(); // Initial call to set the values right away
