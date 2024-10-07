// code your solution here
const record = [
  { year: "1998", result: "w" },
  { year: "1994", result: "N/A" },
  { year: "1987", result: "L" },
];

// function to single a result in the game record data
function superbowlWin(record) {
  function timesWon(bowling) {
    if (bowling.result === "W") {
      return true;
    } else {
      return false;
    }
  }
  //using the find method to look for the time he first won
  const recordWins = record.find(timesWon)
  // if statement to return the year won 
  if (recordWins) {
    return recordWins.year;
  }
  else{
    return undefined;
  }

}
