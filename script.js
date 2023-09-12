async function displayTeamInfo() {
  const teamNameDiv = document.getElementById('team-name');
  const teamLocationDiv = document.getElementById('team-location');
  const teamRecordDiv = document.getElementById('team-record');
  const thisWeeksGameDiv = document.getElementById('this-weeks-game');
  const teamLogoImg = document.getElementById('team-logo');

  const staticValueDiv = document.getElementById('static-value');
  const selectedTeamAbbreviation = staticValueDiv.textContent.trim();

  try {
    const apiUrl = `https://site.api.espn.com/apis/site/v2/sports/football/nfl/teams/${selectedTeamAbbreviation}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const team = data.team;
    const nextEvent = team.nextEvent[0];
    const opponentShortName = nextEvent.shortName;

    // Set the content of each div element
    teamNameDiv.textContent = team.displayName;
    teamLocationDiv.textContent = `Location: ${team.location}`;
    teamRecordDiv.textContent = `Record: ${team.record.items[0].summary} - ${team.standingSummary}`;

    const formattedDateTime = new Date(nextEvent.date).toLocaleString();
    thisWeeksGameDiv.textContent = `This week's game: ${formattedDateTime}`;

    teamLogoImg.src = team.logos[0].href;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

window.onload = displayTeamInfo;
