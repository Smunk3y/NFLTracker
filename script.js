// Function to format date and time
function formatDateTime(dateTimeString) {
    const eventDate = new Date(dateTimeString);
    const year = eventDate.getFullYear();
    const month = String(eventDate.getMonth() + 1).padStart(2, '0'); // Month is zero-based
    const day = String(eventDate.getDate()).padStart(2, '0');
    const hours = String(eventDate.getHours()).padStart(2, '0');
    const minutes = String(eventDate.getMinutes()).padStart(2, '0');

    return `${year}/${month}/${day} @ ${hours}:${minutes}`;
}

// Function to fetch and display team information
async function displayTeamInfo() {
    const teamInfoDiv = document.getElementById('team-info');
    const staticValueDiv = document.getElementById('static-value');
    const selectedTeamAbbreviation = staticValueDiv.textContent.trim();

    try {
        // Construct the API URL based on the selected team abbreviation
        const apiUrl = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${selectedTeamAbbreviation}`;

        // Fetch data from the API
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Extract relevant information
        const team = data.team;
        const nextEvent = team.nextEvent[0]; // Access the first element in the array

        // Create elements to display team information
        const teamNameHeading = document.createElement('h1');
        teamNameHeading.textContent = team.displayName;

        const teamLocation = document.createElement('p');
        teamLocation.textContent = `Location: ${team.location}`;

        const teamRecord = document.createElement('p');
        teamRecord.textContent = `Record: ${team.record.items[0].summary}`;

        const nextEventInfo = document.createElement('p');
        const formattedDateTime = formatDateTime(nextEvent.date);
        nextEventInfo.textContent = `Next Event: ${formattedDateTime}`;

   
            const gameLocation = document.createElement('p');
            gameLocation.textContent = `Game Location: ${nextEvent.venue.fullName}`; // Display game location
            teamInfoDiv.appendChild(gameLocation);
        

        // Append elements to the teamInfoDiv
        teamInfoDiv.innerHTML = ''; // Clear previous content
        teamInfoDiv.appendChild(teamNameHeading);
        teamInfoDiv.appendChild(teamLocation);
        teamInfoDiv.appendChild(teamRecord);
        teamInfoDiv.appendChild(nextEventInfo);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the displayTeamInfo function when the page loads
window.onload = displayTeamInfo;
