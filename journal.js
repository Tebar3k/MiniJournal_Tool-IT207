const fs = require('fs');
const command = process.argv[2];
const searchWord = process.argv[3];
const fileName = 'journal.txt';

if(!fs.existsSync(fileName)) {
  console.log('journal.txt was not found');
} else {
  const fileContent = fs.readFileSync(fileName, 'utf8');

  if(command === 'show') {
    console.log('Journal Contents:');
    console.log(fileContent);
  } else if (command === 'count') {
    const lines = fileContent.split('\n');

    console.log('Number of journal lines: ' + lines.length);
  } else if (command === 'mood') {
    if (!searchWord) {
      console.log('Enter a mood word');
    } else {
      const words = fileContent.split(' ');

      let matches = 0;

      for (let i = 0; i < words.length; i++) {
        if (words[i] === searchWord) {
          matches++;
        }
      }
      console.log('The word "' + searchWord + '" appears ' + matches + ' times.');
    }
  } else {
    console.log('Invalid command');
    console.log('Use show, count, or mood');
  }
}
