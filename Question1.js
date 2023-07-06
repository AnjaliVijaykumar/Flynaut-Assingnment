var fullWordList = [1, 2, 3, 4, 5];
var workToRemove = [1, 2, 3];

var duplicates = [];
var sameValues = [];

// Find duplicates
for (var i = 0; i < fullWordList.length; i++) {
  for (var j = 0; j < workToRemove.length; j++) {
    if (fullWordList[i] === workToRemove[j] && !duplicates.includes(fullWordList[i])) {
      duplicates.push(fullWordList[i]);
      break;
    }
  }
}

// Find same values
for (var i = 0; i < fullWordList.length; i++) {
  for (var j = 0; j < workToRemove.length; j++) {
    if (fullWordList[i] === workToRemove[j] && !sameValues.includes(fullWordList[i])) {
      sameValues.push(fullWordList[i]);
      break;
    }
  }
}

console.log("Duplicates:", duplicates);
console.log("Same Values:", sameValues);
