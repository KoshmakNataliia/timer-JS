const timer = () => {
    const countDate = new Date('March 08, 2022, 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % day) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').textContent = textDay;
    document.querySelector('.hour').textContent = textHour;
    document.querySelector('.minute').textContent = textMinute;
    document.querySelector('.second').textContent = textSecond;

};

setInterval(timer, 1000);

timer();