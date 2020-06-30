/******************************************
- A Random Quote Generator -
Selects a quote randomly when the user clicks the Show Another Quote button,
and automatically at an interval. The page background color
changes with each new quote.
Quotes can optionally include a citation source and year.
******************************************/

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
    occupation: 'author',
    year: '2005'
  },
  {
    quote: 'The world about us would be desolate except for the world within us.',
    source: 'Wallace Stevens',
    occupation: 'poet'
  },
  {
    quote: 'You can only know where you’re going if you know where you’ve been.',
    source: 'James Burke',
    occupation: 'television host',
    citation: 'Connections',
    year: '1979'
  },
  {
    quote: 'Art would not be important if life were not important, and life is important.',
    source: 'James Baldwin',
  },
  {
    quote: 'I’ll play it and tell you what it is later.',
    source: 'Miles Davis',
    year: '1956'
  },
  {
    quote: 'There is no feeling, except the extremes of fear and grief, that does not find relief in music.',
    source: 'George Eliot',
    citation: 'The Mill on the Floss',
    year: '1860'
  },
  {
    quote: 'Blues are easy to play, but hard to feel.',
    source: 'Jimi Hendrix'
  },
  {
    quote: 'Beauty is meaningless until it is shared.',
    source: 'George Orwell',
    year: '1934'
  }
];

let currentQuoteIndex; // Track the current quote to avoid duplicates
let timerInterval = 10000; // Interval, in milliseconds, to automatically show a new quote

// Array of background colors to be chosen at random with each quote
const bgColors = [
  'purple',
  'maroon',
  'pink',
  'green',
  'orange',
  'brown'
]

// Accept an array of quote objects and return one at random
function getRandomQuote( arr ) {
  let rand = Math.floor(Math.random() * arr.length);
  return quotes[rand];
}

// Accept an array of colors and return one at random
function getRandomColor( arr ) {
  let rand = Math.floor(Math.random() * arr.length);
  return bgColors[rand];
}

// Select a random quote and build and display the quote in HTML
function printQuote() {
  let selectedQuote;
  do {
    selectedQuote = getRandomQuote(quotes);
  } while (quotes.indexOf(selectedQuote) === currentQuoteIndex); // Choose again if we're otherwise repeating
  currentQuoteIndex = quotes.indexOf(selectedQuote);

  let html = `<p class="quote">${selectedQuote.quote}</p>
              <p class="source">${selectedQuote.source}`;

  // Check to see if chosen quote has citation or year, and add them
  if (selectedQuote.occupation) {
    html += ` (${selectedQuote.occupation})`;
  }
  if (selectedQuote.citation) {
    html += `<span class="citation">${selectedQuote.citation}</span>`;
  }
  if (selectedQuote.year) {
    html += `<span class="year">${selectedQuote.year}</span>`;
  }
  html += '</p>';

  document.body.style.backgroundColor = getRandomColor(bgColors); // Randomize the page background color
  document.getElementById('quote-box').innerHTML = html; // Update page with new quote
}

// Automatically display a new quote every 10 seconds
setInterval(printQuote, timerInterval);

// Add a listener to Show Another Quote button to display a new quote on click
document.getElementById('load-quote').addEventListener("click", printQuote, false);
