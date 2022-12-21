const uppercaseChars = [];
const lowerCaseChars = [];

const arr = ['h' , 'H' , 'P', 'p'];

for(let i in arr) {
  if(arr[i].toLocaleLowerCase() === arr[i]) {
    lowerCaseChars.push(arr[i]);
  }else {
    uppercaseChars.push(arr[i])
  }
}

console.log(uppercaseChars, lowerCaseChars)