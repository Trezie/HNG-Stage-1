document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeek = document.getElementById("dayOfWeek");
    const utcTime = document.getElementById("utcTime");

    // Function to get the current day of the week
    function getCurrentDayOfWeek() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDate = new Date();
        const dayIndex = currentDate.getUTCDay();
        return days[dayIndex];
    }

    // Function to get the current UTC time in milliseconds
    function getCurrentUTCTime() {
        return new Date().getTime();
    }

    // Update the page elements
    dayOfWeek.textContent = getCurrentDayOfWeek();
    utcTime.textContent = getCurrentUTCTime();
});


