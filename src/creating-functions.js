// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
//
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below

//My solution
function increment(n){
  return ++n
}

//Ai solution
function increment(num) {
  return num + 1;
}

// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello

// TODO: write code below

//My solution
function capitalise(s){
  if(typeof s !== 'string'){
    return s
  }
  return s.charAt(0).toUpperCase() + s.slice(1)
}

//AI solution
function capitalize(str) {
  if (str.length === 0) {
      return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below

//My solution
function smiley(s){
  if(typeof s !== 'string'){
    return s
  }
  return 'Hi, ' + capitalise(s) + ' :)'
}

//AI solution
function capitalize(str) {
  if (str.length === 0) {
      return str;
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function greetWithSmiley(name) {
  const capitalizedName = capitalize(name);
  return `Hi, ${capitalizedName} :)`;
}

// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below

//My solution
function stringAmount(a){
  let count = 0
  for(let i = 0; i < a.length; i++){
    if(typeof a[i] === 'string'){
      count++
    }
  }
  return count
}

//AI solution
function countStrings(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
          count++;
      }
  }
  return count;
}

// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below

//My solution
function edward(o){
  if(!o.hasOwnProperty('edward')){
    o.edward = 'amazing'
  }
  return o
}

//AI solution
function addEdwardProperty(obj) {
  if (!obj.hasOwnProperty('edward')) {
      obj.edward = 'amazing';
  }
  return obj;
}

// TODO: change each undefined below to be the name of the functions you defined
/*
//My solution
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalise, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: smiley, // etc
  d: stringAmount,
  e: edward
}
  */

//AI solution
module.exports = {
  a: increment, // 1. change undefined to be the name of the function you defined for the first TODO
  b: capitalize, // 2. change undefined to be the name of the function you defined for the second TODO
  c: greetWithSmiley, // etc
  d: countStrings,
  e: addEdwardProperty
}
