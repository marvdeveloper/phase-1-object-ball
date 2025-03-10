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
            slamDunks: 1
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1
          }
        }
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
            slamDunks: 2
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12
          }
        }
      }
    };
  }
  
  // Function to get the number of points scored by a player
function numPointsScored(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].points;
      }
    }
  }
  
  // Function to get the shoe size of a player
  function shoeSize(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return game[team].players[playerName].shoe;
      }
    }
  }
  
  
  function teamColors(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  
  
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  

  function playerNumbers(teamName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
  }
  
  
  function playerStats(playerName) {
    const game = gameObject();
    for (let team in game) {
      if (game[team].players[playerName]) {
        return { ...game[team].players[playerName] };
      }
    }
  }
  

  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
    for (let team in game) {
      for (let playerName in game[team].players) {
        const player = game[team].players[playerName];
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          rebounds = player.rebounds;
        }
      }
    }
    return rebounds;
  }

  // Function to get the player with the most points
function mostPointsScored() {
    const game = gameObject();
    let maxPoints = 0;
    let topPlayer = "";
    for (let team in game) {
      for (let playerName in game[team].players) {
        const player = game[team].players[playerName];
        if (player.points > maxPoints) {
          maxPoints = player.points;
          topPlayer = playerName;
        }
      }
    }
    return topPlayer;
  }
  
  // Function to get the team with the most points
  function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;
    for (let playerName in game.home.players) {
      homeTeamPoints += game.home.players[playerName].points;
    }
    for (let playerName in game.away.players) {
      awayTeamPoints += game.away.players[playerName].points;
    }
    return homeTeamPoints > awayTeamPoints ? game.home.teamName : game.away.teamName;
  }
  
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
    for (let team in game) {
      for (let playerName in game[team].players) {
        if (playerName.length > longestName.length) {
          longestName = playerName;
        }
      }
    }
    return longestName;
  }
  
  function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMaxSteals = "";
    for (let team in game) {
      for (let playerName in game[team].players) {
        const player = game[team].players[playerName];
        if (player.steals > maxSteals) {
          maxSteals = player.steals;
          playerWithMaxSteals = playerName;
        }
      }
    }
    return longestName === playerWithMaxSteals;
  }