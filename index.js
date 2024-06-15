function updateClock() {
    const now = new Date();
    let hours = now.getHours().toString().padStart(2, 0);
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const mins = now.getMinutes().toString().padStart(2, 0);
    const secs = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hours}:${mins}:${secs} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);