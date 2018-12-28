/******************************************
Treehouse Techdegree:
FSJS project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.

  Recommended:
    - Add at least one `year` and/or `citation` property to at least one
      quote object.
***/
var Quotes =[
    quote:"This world is grand and there lies an ocean of undiscovered findings that are waiting for eager and curious minds"
    source:"Sir Isaac Newton"
    year:"1885"

    quote:"It is strange that only extraordinary men make the discoveries, which later appear so easy and simple."
    source:"Georg C. Lichtenberg"

    quote:"Nothing in life is to be feared, it is only to be understood. Now is the time to understand more, so that we may fear less."
    source:"Marie Curie"

    quote:"You cannot teach a man anything, you can only help him discover it in himself."
    source: "Galileo"

    quote: "One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don't throw it away."
    source: "Stephen Hawking"
];



/***
    Generate a random number between 0 and 5
***/
function randomNum() {
  Math.floor(Math.random() * 5)
  return Math.random();
}



/***
  Create the `printQuote` function to:
   - call the `getRandomQuote` function and assign it to a variable.
   - use the properties of the quote object stored in the variable to
     create your HTML string.
   - use conditionals to make sure the optional properties exist before
     they are added to the HTML string.
   - set the `innerHTML` of the `quote-box` div to the HTML string.
***/




/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
