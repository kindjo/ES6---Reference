//--------------- Lecture: let and const ---------------//

/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

//ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

//---------------------------------------------------------//
/*
//ES5
function driversLicence5(passedTest){
    if (passedTest){
        
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName+ ', born: '+yearOfBirth);

}

driversLicence5(true);

//ES6
function driversLicence6(passedTest){

    let firstName;
    const yearOfBirth = 1990;

    if (passedTest){
        firstName = 'John';
        console.log(firstName+ ', born: '+yearOfBirth);
    }

}

driversLicence6(true);



let i = 23;

for (let i = 0; i < 5; i++){
    console.log(i);
}

console.log(i);
*/


//---------------------------- 105. ----------------------------//

//--------------- Lecture: Blocks and IIFEs ---------------//
/*
//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;

}
//console.log(a+b);
console.log(c);


//ES5
(function(){
    var c = 3;
});

//console.log(c);
*/

//---------------------------- 106. ----------------------------//

        //--------------- Lecture: String ---------------//

/*
//ES6
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year){
    return 2019 - year;
}


//ES5
console.log('This is '+firstName + ' '+ lastName + ', born:'+ yearOfBirth+', he is: '+calcAge(yearOfBirth)+'yr old.');

//ES6
console.log(`This is ${firstName} ${lastName}, born in ${yearOfBirth}, he is ${calcAge(yearOfBirth)} yrs old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('N'));
console.log(n.endsWith('th'));
console.log(n.includes(' '));
console.log(`${firstName} `.repeat(5));
*/

//---------------------------- 107. ----------------------------//

    //--------------- Lecture: Arrow functions ---------------//
/*
const years = [1990, 1952, 1923, 1937];

//ES5
var ages5 = years.map(function(el){
    return 2019 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${age}.`
});
console.log(ages6);
*/

//---------------------------- 108. ----------------------------//

//--------------- Lecture: Arrow functions 2 ---------------//

/*
//ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){

        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        });
    }
}
//box5.clickMe();

//ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
box6.clickMe();


const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {

        document.querySelector('.green').addEventListener('click', () => {
            var str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}
//box66.clickMe();


//--------------- Lecture: Arrow functions 2 ---------------//
    //--------------- REFERENCE POINT ---------------//


function Person(name) {
    this.name = name;
}
//ES5
Person.prototype.myFriends5 = function(friends){

    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));

    //console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);


function Person(name) {
    this.name = name;
}
//ES6
Person.prototype.myFriends6 = function(friends){

    var arr = friends.map(el => `${this.name} is friends with ${el}`);

    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark'];
new Person('Mike').myFriends6(friends);
*/


//---------------------------- 109. ----------------------------//

    //--------------- Lecture: Destructuring ---------------//
/*
//ES5
var john = ['John', 26];
var name = john [0];
var age = john[1];

//ES6
const [name6, year6] = ['John', 26];
console.log(name6, year6);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName:a , lastName:b} = obj;
console.log(a, b);



function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return [age, 65-age];
}

const [age2, retirement] = calcAgeRetirement(1990);
console.log(age2, retirement);
*/

//---------------------------- 110. ----------------------------//

    //--------------- Lecture: Arrays ---------------//
/*
const boxes = document.querySelectorAll('.box');

//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});
console.log(boxesArr5);


//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5
for (var i = 0; i<boxesArr5.length; i++){

    if(boxesArr5[i].className === 'box blue'){
        continue;
    }

    boxesArr5[i].textContent = 'I changed to blue!';
}

//ES6
for (const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'I changed to blue!';
}


var ages = [12, 17, 8, 21, 14, 11];
var full = ages.map(function(cur){
    return cur >= 18;
});

//ES5  

console.log(full);

console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >=18));
*/

//---------------------------- 111. ----------------------------//

//--------------- Lecture: Spread operator ---------------//

function addFourAges (a, b, c, d) {
    return a+b+c+d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

//ES5

var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);

console.log(sum2);

//ES6
const sum3 = addFourAges(...ages);

console.log(sum3);


const familySmith = ['John', 'Jane', 'Mark'];
const familyMiller = ['Mary', 'Bob', 'Ann'];
const bigFamily = [...familySmith, 'Lily', ...familyMiller];

console.log(bigFamily);

const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
