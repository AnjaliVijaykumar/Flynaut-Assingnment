const word = '00000111110101001111100001001';

let longestChain = 0;
let currentChain = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === '1') {
    currentChain++;
    longestChain = Math.max(longestChain, currentChain);
  } else {
    currentChain = 0;
  }
}

console.log('Longest chain of letters:', longestChain);
