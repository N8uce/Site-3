function startTimer(duration, display) {
    let timer = duration, days, hours, minutes, seconds;
    setInterval(function () {
        days = parseInt(timer / (24 * 3600), 10);
        hours = parseInt((timer % (24 * 3600)) / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        days = days < 10 ? "0" + days : days;
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;

        if (--timer < 0) {
            timer = 0;
            document.getElementById('days').textContent = "00";
            document.getElementById('hours').textContent = "00";
            document.getElementById('minutes').textContent = "00";
            document.getElementById('seconds').textContent = "00";
            alert("Скидка закончилась!");
        }
    }, 1000);
}

window.onload = function () {
    let duration = 999 * 99;
    let display = document.getElementById('timer');
    startTimer(duration, display);
};

