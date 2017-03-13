document.addEventListener('DOMContentLoaded', () => {
  const timeNode = document.querySelector('.time');
  const timeOfDayNode = document.querySelector('.time-of-day');
  const wallpaperNode = document.querySelector('.wallpaper');
  const loadingScreen = document.querySelector('.loading');

  const updateTime = () => {
    timeNode.innerHTML = moment().format('HH:mm');
    setTimeout(updateTime, 15000);
  };

  const updateGreeting = () => {
    let hour = parseInt(moment().format('HH'));
    let greeting;

    if(hour > 3 && hour < 12) {
      greeting = 'morning';
    } else if (hour >= 12 && hour < 18) {
      greeting = 'afternoon';
    } else {
      greeting = 'evening';
    }
    timeOfDayNode.innerHTML = greeting;

    setTimeout(updateGreeting, 1800000)
  };

  const getNewBackground = () => {
    loadingScreen.style.visibility = 'visible';
    fetch('/api/unsplash')
      .then(r => r.json())
      .then(url => {
        wallpaperNode.setAttribute('src', url);
        loadingScreen.style.visibility = 'hidden';
      });
  };

  updateTime();
  updateGreeting();
  document.querySelector('.change-bg').addEventListener('click', getNewBackground);
});