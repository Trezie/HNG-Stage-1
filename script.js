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

    // Function to format a date as a string in a specific format (e.g., "Monday, September 11, 2023 12:34:56 UTC")
    function formatUTCDate(date) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
        return date.toLocaleString('en-US', options);
    }

    // Update the page elements
    dayOfWeek.textContent = getCurrentDayOfWeek();
    const currentUTCDate = new Date();
    utcTime.textContent =  formatUTCDate(currentUTCDate);
});

