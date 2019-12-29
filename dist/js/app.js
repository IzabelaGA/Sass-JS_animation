//Our variable
let val;
val = 'Happy New Year Guys!'
console.log(val);

// REPLACE P ELEMENT
// 1. Create new p element
const newLead = document.createElement('p');
// Add id
newLead.id='lead';
// Add class
newLead.className = 'greetings'
// New text node
newLead.appendChild(document.createTextNode(`${val}`));
// Get the old lead
const oldLead = document.getElementById('lead');
// Parent
const section = document.querySelector('section');
console.log(section);

//2. Replace P element
section.replaceChild(newLead, oldLead);
console.log(newLead);

// CREATE LI ELEMENT
const li = document.createElement('li');
// Add class
li.className = 'color';
console.log(li);

// Append li as child to ul
document.querySelector(`ul`).appendChild(li);

// // Create text node and append it
// li.append(document.createTextNode(`${val}, how are You today?`));

