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
  
function urlify2(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ') {
        newString = newString + '%20';
      } else {
        newString = newString + string[i];
      }
    }
    return newString;
  }


//uncomment lines below to test urlify function
// let string = 'www.thinkful.com /tauh ida parv een';
// console.log(urlify(string));

function filterArray(arr, filter) {
  let newArray = [];
  let position = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= filter) {
      newArray[position] = arr[i];
      position++;
    }
  }
  return newArray;
}

//Uncomment lines below to test filterArray
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(filterArray(array, 5));

function max