/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

// A collection of quotes with optional Citation and Year values
const quotes = [
  {
    quote: 'It is only afterward that a new idea seems reasonable. To begin with, it usually seems unreasonable.',
    source: 'Isaac Asimov',
    citation: '"How Do People Get New Ideas?"',
    year: '1959'
  },
  {
    quote: 'To leave the reader free to decide what your work means, that’s the real art; it makes the work inexhaustible.',
    source: 'Ursula K. Le Guin',
    year: '2005'
  },
  {
    quote: 'The world about us would be desolate except for the world within us.',
    source: 'Wallace Stevens',
  },
  {
    quote: 'You can only know where you\'re going if you know where you\'ve been.',
    source: 'James Burke',
    citation: 'Connections',
    year: '1979'
  },
  {
    quote: 'Art would not be important if life were not important, and life is important.',
    source: 'James Baldwin',
  },
];

// Accept an array of quote objects and returns one at random
function getRandomQuote( arr ) {
  let rand = Math.floor(Math.random() * arr.length);
  return quotes[rand];
}

// Select a random quote and build and display the quote in HTML
function printQuote() {
  let selectedQuote = getRandomQuote(quotes);
  let html = `<p class="quote">${selectedQuote.quote}</p>
              <p class="source">${selectedQuote.source}`;

  // Check to see if chosen quote has citation or year, and add them
  if (selectedQuote.citation) {
    html += `<span class="citation">${selectedQuote.citation}</span>`;
  }
  if (selectedQuote.year) {
    html += `<span class="year">${selectedQuote.year}</span>`;
  }

  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
