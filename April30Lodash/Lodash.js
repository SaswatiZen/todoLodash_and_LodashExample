import _ from 'lodash';
function Lodash(){
	let words = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];
	let first_element = _.first(words);
	console.log(first_element);
	let last_element = _.last(words);
	console.log(last_element);


	let nums = [1, 2, 3, 4, 5, 6, 7, 8];
	console.log(_.nth(nums, 3)); //4 return the element at index 3
	console.log(_.nth(nums, -3));//6 start from the end of an array.

	// array chunking
	// creates an array of elements split into	groups the length of the specified size
	let numss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	let c1 = _.chunk(numss, 2); //[[1,2], [3,4], [5,6], [7,8], [9]]
	let c2 = _.chunk(nums, 3); //[[1,2,3],[4,5,6],[7,8,9]]
	console.log(c2);


// array slice
// The _.slice method gets a slice from an array. It takes two indexes: the starting and ending index, where the starting index is inclusive and the ending is exclusive.
	let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	let c11 = _.slice(nums1, 2, 6);
	console.log(c1);

	let c22 = _.slice(nums1, 0, 8);
	console.log(c22);

//lodash random number
	// The _.random function produces random values between the inclusive lower and upper bounds.
	let r = _.random(10);
	console.log(r);

	r = _.random(5, 10);
	console.log(r);
// Lodash random array element
// With the _.sample function, we can pick a random element from an array.
	let words1 = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];

	let word1 = _.sample(words1);
	console.log(word1);

//shuffling array elements
// The _.shuffle function shuffles a collection.
let words2 = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];

console.log(_.shuffle(words2));
console.log(_.shuffle(words2));
console.log(_.shuffle(words2));
console.log(words2);

// Lodash _.times function
// The _.times executes the function n times.
	
_.times(4, () => {

    console.log("brave");
})

//Lodash _.delay function
// The _.delay function delays the execution of a function for the specified amount of milliseconds.

function message()
{
    console.log("Some message");
}

_.delay(message, 150);
console.log("Some other message");

//Lodash determine data type
// Lodash contains functions which determine the data type of a value.
let vals = [1, 2, 'good', [1, 2], {name: 'Peter', age: 32}];

vals.forEach( (e) => {

    if (_.isNumber(e)) {
        console.log(`${e} is a number`);
    }

    if (_.isString(e)) {
        console.log(JSON.stringify(e) + ' is a string');
    }

    if (_.isArray(e)) {
        console.log(JSON.stringify(e) + ' is an array');
    }

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');
    }

});

// Lodash _.range function
// The Lodash _.range function creates an array of numbers. The function accepts the start, end, and step parameters.
let vals1 = _.range(10);
console.log(vals1);

let vals2 = _.range(0, 15);
console.log(vals2);

let vals3 = _.range(0, 15, 5);
console.log(vals3);

// Lodash maximum and minimum
// Lodash allows to compute the maximum and minimum values of an array.
let vals4 = [-3, 4, 0, 12, 43, 9, -12];

let min = _.min(vals4);
console.log(min);

let max = _.max(vals4);
console.log(max);

max = _.max(_.range(5, 25));
console.log(max);

let obs = [{n: 12}, {n: -4}, {n: 4}, {n: -11}];

min = _.minBy(obs, 'n');
console.log(min);

max = _.maxBy(obs, 'n');
console.log(max);

// Lodash _.sum function
// The _.sum function calculates the sum of array values.

let vals5 = [-2, 0, 3, 7, -5, 1, 2];

let sum = _.sum(vals5);
console.log(sum);

// Lodash _.curry
// Currying is a transformation of a function with multiple arguments into a sequence of nested functions with a single argument. The currying allows to perform function specialization and composition

function multiply(a, b, c) {

    return a * b * c;
}

let curried = _.curry(multiply);

let ret = curried(2)(3)(4);
console.log(ret);

// Lodash collection filter
// The _.filter function returns an array of elements for which the predicate function returns true.


let num6 = [4, -5, 3, 2, -1, 7, -6, 8, 9];

let pos_nums = _.filter(num6, (e) => e > 0);
console.log(pos_nums);

// Lodash collection find
// The _.find function iterates over elements of a collection and returns the first element for which the predicate returns true. Likewise, the _.findLast returns the last element.
let users = [
  { name: 'John', age: 25 },
  { name: 'Lenny', age: 51 },
  { name: 'Andrew', age: 43 },
  { name: 'Peter', age: 81 },
  { name: 'Anna', age: 43 },
  { name: 'Albert', age: 76 },
  { name: 'Adam', age: 47 },
  { name: 'Robert', age: 72 }
];

let u1 = _.find(users, {name: 'Adam'});
console.log(u1);

let u2 = _.find(users, (u) => { return u.age > 60 });
console.log(u2);

let u3 = _.findLast(users, (u) => { return u.age > 60 });
console.log(u3);

// Lodash collection pull
// The _.pull function removes all given values from the array.	

// Lodash collection pull
// The _.pull function removes all given values from the array.
let nums7 = [1, 2, 3, 1, 2, 2, 4, 5, 7, 8];
 
_.pull(nums7, 1, 2);
console.log(nums7);

// Lodash collection take
// The _.take function creates a slice of an array with n elements taken from the beginning. The _.takeRight function creates a slice of an array with n elements taken from the end.

let nums8 = [1, 2, 3, 4, 5, 6]

let nums21 = _.take(nums8);
let nums31 = _.take(nums8, 2);
let nums41 = _.takeRight(nums8, 3)

console.log(nums21);
console.log(nums31);
console.log(nums41);

// Lodash reduce - group objects by property
// The following example groups objects in an array by a property.
let users1 = [
  { name: 'John', age: 25, occupation: 'gardener' },
  { name: 'Lenny', age: 51, occupation: 'programmer' },
  { name: 'Andrew', age: 43, occupation: 'teacher' },
  { name: 'Peter', age: 52, occupation: 'gardener' },
  { name: 'Anna', age: 43, occupation: 'teacher' },
  { name: 'Albert', age: 46, occupation: 'programmer' },
  { name: 'Adam', age: 47, occupation: 'teacher' },
  { name: 'Robert', age: 32, occupation: 'driver' }
];

let grouped = _.reduce(users1, (result, user) => {
	console.log(result);
    (result[user.occupation] || (result[user.occupation] = [])).push(user);  
    return result;
}, {});

console.log(grouped);


// Lodash string case
// Locash library contains several functions that work with the case of words.
let words3 = ["sky", "Sun", "Blue Island"];

console.log(_.map(words3, _.camelCase));
console.log(_.map(words3, _.capitalize));
console.log(_.map(words3, _.kebabCase));
console.log(_.map(words3, _.lowerCase));
console.log(_.map(words3, _.upperCase));

// Lodash string padding
// Strings can be padded with a character if they are shorter than a specified number.
let nums9 = [657, 122, 3245, 345, 99, 18];

nums9.forEach( e => {

    console.log(_.padStart(e.toString(), 21,'.'));
});

// Lodash object keys and values
// The _.keys function returns an array of the property names of the JavaScript object and the _.values function returns an array of their values.
let p = {age: 24, name: "Rebecca", occupation: "teacher"};

let keys = _.keys(p);
console.log(keys);

let values = _.values(p);
console.log(values);

//Lodash object picking
// The _.pick function creates an object composed of the picked object properties.

console.log(_.pick({ name: 'John', age: 25 }, 'name'));
console.log(_.pick({ name: 'John', age: 25 }, 'age'));

// Lodash object get and set
// The _.set function sets the value at the path of the object. If a portion of the path does not exist, it is created. The _.get function gets the value at the path of object; if the value does not exist, we can provide a default


let dataobj = { user: { name: "John Doe", age: 34, occupation: "gardener"} };
 
_.set(dataobj, "user.age", 36);
console.log(dataobj);

console.log(_.get(dataobj, "user.occupation", "unknown"));
console.log(_.get(dataobj, "user.marital_status", "unknown"));

//Lodash iterate object properties
// The _.forIn function can be used to iterate over object properties.
let p1 = {age: 24, name: "Rebecca", occupation: "teacher"};

_.forIn(p1, (value, key) => {

    console.log(`${key}: ${value}`);
})
// Lodash string _.startsWith and _.endsWith
// The _.startsWith function determines if the string starts with the specified string. The _.endsWith function determines if the string ends with the specified string.

let words10 = ["tank", "boy", "tourist", "ten",
        "pen", "car", "marble", "sonnet", "pleasant",
        "ink", "atom"]

console.log("Starting with 't'");
words10.forEach( e => {

    if (_.startsWith(e, 't')) {

        console.log(e);
    }
});

console.log("Ending with 'k'");
words10.forEach( e => {

    if (_.endsWith(e, 'k')) {

        console.log(e);
    }
});
















	return(
		<div>
			
		</div>
		)
}
export default Lodash;