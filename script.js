// Function to fetch and display team information
async function displayTeamInfo() {
    const teamInfoDiv = document.getElementById('team-info');
    const staticValueDiv = document.getElementById('static-value');
    const teamLogoImg = document.getElementById('team-logo'); // link to html img

    const selectedTeamAbbreviation = staticValueDiv.textContent.trim();

    try {
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
        const opponentShortName = nextEvent.shortName;

        // Create elements to display team information
        const teamNameHeading = document.createElement('h1');
        teamNameHeading.textContent = team.displayName;

        const teamLocation = document.createElement('p');
        teamLocation.textContent = `Location: ${team.location}`;

        const teamRecord = document.createElement('p');
        teamRecord.textContent = `Record: ${team.record.items[0].summary} - ${team.standingSummary}`;

        const thisWeeksGameInfo = document.createElement('p');
        const formattedDateTime = new Date(nextEvent.date).toLocaleString();
        thisWeeksGameInfo.textContent = `This week's game: ${formattedDateTime}`;

         teamLogoImg.src = team.logos[0].href;

        // Create a separate section for opponent and stadium
        const opponentStadiumDiv = document.createElement('div');
        opponentStadiumDiv.id = 'opponent-stadium';

        const opponentInfo = document.createElement('p');
        opponentInfo.textContent = `Opponent: ${opponentShortName}`;

        // Append opponentInfo to opponentStadiumDiv
        opponentStadiumDiv.appendChild(opponentInfo);

        // Append elements to the teamInfoDiv
        teamInfoDiv.innerHTML = ''; // Clear previous content
        teamInfoDiv.appendChild(teamNameHeading);
        teamInfoDiv.appendChild(teamLocation);
        teamInfoDiv.appendChild(teamRecord);
        teamInfoDiv.appendChild(thisWeeksGameInfo);
        teamInfoDiv.appendChild(opponentStadiumDiv);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the displayTeamInfo function when the page loads
window.onload = displayTeamInfo;
