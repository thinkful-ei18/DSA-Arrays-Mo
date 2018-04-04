'use strict';

function urlify(string) {
  let newString = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      newString[i] = '%20';
    } else {
      newString[i] = string[i];
    }
  }
  newString = newString.join('');
  return newString;
}
let string = 'www.thinkful.com /tauh ida parv een';

console.log(urlify(string));
