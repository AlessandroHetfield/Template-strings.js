const firstName = 'Jonas';
const job = ' teacher';
const birthYear = 1991;
const year= 2037;
const jonas = "I'm " + firstName + ' ,a ' + (year - birthYear ) + ' years old'+job;
console.log (jonas);

const jonasNew = `I'm ${firstName},a ${year - birthYear} years old ${job}  `;
console.log (jonasNew); 


console.log ('String with \n\
multiple \n\
lines')

console.log (` String
multiple
lines`)


const age = 15;
const isOldEnough= age >= 18;

if (isOldEnough) {
    console.log ('Sarah can star driving license ❤️');
}
else {
    const yearsLeft = 18- age;

    console.log (`Sara is too young. Wait another ${yearsLeft} years `);
}

const yearYear= 2001;
let century;
if (yearYear <= 2000) {
     century = 20;
}
else  {
     century =21
}

console.log (`The century is ${century}`);
