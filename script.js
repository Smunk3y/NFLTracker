// Function to fetch and display team information
async function displayTeamInfo() {
  // For each HTML div / p
  const teamNameDiv = document.getElementById('team-name');
  const teamLocationDiv = document.getElementById('team-location');
  const teamRecordDiv = document.getElementById('team-record');
  const thisWeeksGameDiv = document.getElementById('this-weeks-game');
  const teamLogoImg = document.getElementById('team-logo');
  const pointsForDiv = document.getElementById('points-for');
  const pointsAgainstDiv = document.getElementById('points-against');
  const pointsDifDiv = document.getElementById('points-dif');
  const winPercentDiv = document.getElementById('win-per');
  const gamesPlayedDiv = document.getElementById('games-played');
  const winstreakDiv = document.getElementById('win-streak');


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

    const rosterLink = data.team.links.find(link => link.rel.includes('roster'));
    const statsLink = data.team.links.find(link => link.rel.includes('stats'));



    // Set the content of each div element
    teamNameDiv.textContent = team.displayName;
    teamLocationDiv.textContent = `Location: ${team.location}`;
    teamRecordDiv.textContent = `Record: ${team.record.items[0].summary} - ${team.standingSummary}`;

    const formattedDateTime = new Date(nextEvent.date).toLocaleString();
    thisWeeksGameDiv.textContent = `This week's game: ${formattedDateTime} - ${opponentShortName}`;

    teamLogoImg.src = team.logos[0].href;

    // Display Points Per Game wild code
    pointsForDiv.textContent = `Avg Points For: ${team.record.items[0].stats.find(stat => stat.name === 'avgPointsFor').value}`;
    pointsAgainstDiv.textContent = `Avg Points Against: ${team.record.items[0].stats.find(stat => stat.name === 'avgPointsAgainst').value}`;
    pointsDifDiv.textContent =  `Point Differential: ${team.record.items[0].stats.find(stat => stat.name === 'differential').value}`;
    winPercentDiv.textContent =  `Win Percentage: ${team.record.items[0].stats.find(stat => stat.name === 'winPercent').value* 100}%`;
    winstreakDiv.textContent =  `Win/Loss Streak: ${team.record.items[0].stats.find(stat => stat.name === 'streak').value}`;
    gamesPlayedDiv.textContent =  `Games Played: ${team.record.items[0].stats.find(stat => stat.name === 'gamesPlayed').value} / 17`;


    //for roster link
    if (rosterLink) {
    // Create an <a> element
    const rosterLinkElement = document.createElement('a');

    // Set the href attribute and text content
    rosterLinkElement.href = rosterLink.href;
    rosterLinkElement.target ='_blank';  //open in new tab
    rosterLinkElement.textContent = 'Roster'; // You can customize the link text

    // Append the <a> element to a container div on your webpage
    const containerDiv = document.getElementById('roster-link-container');
    containerDiv.appendChild(rosterLinkElement);
  }
  //For stats link
  if (statsLink) {
  // Create an <a> element for statistics
  const statsLinkElement = document.createElement('a');

  // Set the href attribute and text content
  statsLinkElement.href = statsLink.href;
  statsLinkElement.target ='_blank'; //open in new tab
  statsLinkElement.textContent = 'Statistics'; // You can customize the link text

  // Append the <a> element to a container div on your webpage
  const containerDiv = document.getElementById('stats-link-container');
  containerDiv.appendChild(statsLinkElement);
}


    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

window.onload = displayTeamInfo;
