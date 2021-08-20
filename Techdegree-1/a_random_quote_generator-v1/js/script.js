/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/*** 
 * In this array, named quotes, I have stored all of the quotes that are to be randomly generated along with any pertinant information. 
***/
const quotes = [
{
  quote: 'Are you suggesting coconuts migrate?',
  source: 'Soldier',
  citation: 'Monty Python and the Holy Grail.',
  year: '1975'
},
{
  quote: 'Just a flesh wound.',
  source: 'The Black Knight',
  citation: 'Monty Python and the Holy Grail.',
  year: '1975'
},
{
  quote: 'Never tell me the odds!',
  source: 'Han Solo',
  citation: 'Star Wars: The Empire Strikes Back',
  year: '1980'
},
{
  quote: 'I’m just a simple man trying to make my way in the universe.',
  source: 'Jango Fett',
  citation: 'Star Wars: Attack of the Clones',
  year: '2002'
},
{
  quote: 'Deeds will not be less valiant because they are unpraised.',
  source: 'Aragorn',
  citation: 'The Lord of the Rings: The Return of the King.',
  year: '2003'
},
{
  quote: 'Even darkness must pass. A new day will come. And when the sun shines it will shine out the clearer.',
  source: 'Samwise Gamgee',
  citation: 'The Lord of the Rings: The Two Towers.',
  year: '2002'
}

]


/***
 * `getRandomQuote` function = this funciton serves to return a random quote from the quotes array to be displayed on the page.
***/

function getRandomQuote () {
  let q = Math.floor(Math.random()*(quotes.length));
  return quotes [q];
}

/***
 * `printQuote` function = this function serves to print the randomly generated quote to the webpage in a uniform and orderly manner. 
***/
function printQuote () {
 let randomQuote = getRandomQuote ();
 let html = `
  <p class="quote"> ${randomQuote.quote} </p>
  <p class="source"> ${randomQuote.source} 
 `;
 if (randomQuote.citation){
    html += `
      <span class="citation"> ${randomQuote.citation} </span>
    `
 }
if(randomQuote.year){
   html += `
    <span class="year"> ${randomQuote.year} </span>
  `
}
 html += `</p>`;
document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);