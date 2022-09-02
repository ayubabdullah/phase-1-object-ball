function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,

          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,

          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}
function numPointsScored(playerName) {
  let object = gameObject();
  let homePlayers = object["home"]["players"];
  let awayPlayers = object["away"]["players"];
  let players = Object.assign(homePlayers, awayPlayers);
  return players[playerName]["points"];
}
function shoeSize(playerName) {
  let object = gameObject();
  let homePlayers = object["home"]["players"];
  let awayPlayers = object["away"]["players"];
  let players = Object.assign(homePlayers, awayPlayers);
  return players[playerName]["shoe"];
}
function teamColors(teamName) {
  let object = gameObject();
  if (object["home"]["teamName"] === teamName) {
    return object["home"]["colors"];
  } else {
    return object["away"]["colors"];
  }
}
function teamNames() {
  let object = gameObject();
  let homeTeam = object["home"]["teamName"];
  let awayTeam = object["away"]["teamName"];
  return [homeTeam, awayTeam];
}
function playerNumbers(teamName) {
  let object = gameObject();
  let homePlayers = object["home"]["players"];
  let awayPlayers = object["away"]["players"];
  let players = Object.assign(homePlayers, awayPlayers);
  let jerseyNumbers = [];
  for (let player in players) {
    if (players[player]["teamName"] === teamName) {
      jerseyNumbers.push(players[player]["number"]);
    }
  }
  return jerseyNumbers;
}
function playerStats(playerName) {
  let object = gameObject();
  let homePlayers = object["home"]["players"];
  let awayPlayers = object["away"]["players"];
  let players = Object.assign(homePlayers, awayPlayers);
  return players[playerName];
}
function bigShoeRebounds() {
  let object = gameObject();
  let homePlayers = object["home"]["players"];
  let awayPlayers = object["away"]["players"];
  let players = Object.assign(homePlayers, awayPlayers);
  let biggestShoe = 0;
  let rebounds = 0;
  for (let player in players) {
    if (players[player]["shoe"] > biggestShoe) {
      biggestShoe = players[player]["shoe"];
      rebounds = players[player]["rebounds"];
    }
  }
  return rebounds;
}

function mostPointsScored() {
  let object = gameObject();
  let homePlayers = object["home"]["players"];
  let awayPlayers = object["away"]["players"];
  let players = Object.assign(homePlayers, awayPlayers);
  let mostPoints = 0;
  let player = "";
  for (let player in players) {
    if (players[player]["points"] > mostPoints) {
      mostPoints = players[player]["points"];
      player = player;
    }
  }
  return player;
}
function wwinningTeam() {
  let object = gameObject();
  let homePlayers = object["home"]["players"];
  let awayPlayers = object["away"]["players"];
  let players = Object.assign(homePlayers, awayPlayers);
  let homePoints = 0;
  let awayPoints = 0;
  for (let player in players) {
    if (players[player]["teamName"] === "Brooklyn Nets") {
      homePoints += players[player]["points"];
    } else {
      awayPoints += players[player]["points"];
    }
  }
  if (homePoints > awayPoints) {
    return "Brooklyn Nets";
  } else {
    return "Charlotte Hornets";
  }
}
function playerWithLongestName() {
    let object = gameObject();
    let homePlayers = object["home"]["players"];
    let awayPlayers = object["away"]["players"];
    let players = Object.assign(homePlayers, awayPlayers);
    let longestName = "";
    for (let player in players) {
        if (player.length > longestName.length) {
        longestName = player;
        }
    }
    return longestName;
}
    
function doesLongNameStealATon() {
    let object = gameObject();
    let homePlayers = object["home"]["players"];
    let awayPlayers = object["away"]["players"];
    let players = Object.assign(homePlayers, awayPlayers);
    let longestName = "";
    let mostSteals = 0;
    for (let player in players) {
        if (player.length > longestName.length) {
        longestName = player;
        }
        if (players[player]["steals"] > mostSteals) {
        mostSteals = players[player]["steals"];
        }
    }
    if (players[longestName]["steals"] === mostSteals) {
    return true;
    } else {
    return false;
    }
}
