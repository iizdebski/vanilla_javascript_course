const quotes = [
    {
    "quote": "Success is most often achieved by those who don't know that failure is inevitable.",
    "name": "Coco Chanel"
  },
  {
    "quote": "Things work out best for those who make the best of how things work out.",
    "name": "John Wooden"
  },
  {
    "quote": "Courage is grace under pressure.",
    "name": "Ernest Hemingway"
  }, {
    "quote": "If you are not willing to risk the usual, you will have to settle for the ordinary.",
    "name": "Jim Rohn"
  }, {
    "quote": "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
    "name": "Albert Einstein"
  }, {
    "quote": "Sometimes you can't see yourself clearly until you see yourself through the eyes of others.",
    "name": "Ellen DeGeneres"
  }, {
    "quote": "All our dreams can come true if we have the courage to pursue them.",
    "name": "Walt Disney"
  }, {
    "quote": "It does not matter how slowly you go, so long as you do not stop.",
    "name": "Confucius"
  }, {
    "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
    "name": "Winston Churchill"
  }, {
    "quote": "Someone is sitting in the shade today because someone planted a tree a long time ago.",
    "name": "Warren Buffett"
  }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){

  let number = Math.floor(Math.random()*quotes.length);
  //console.log(number);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}




// const simpleQuotes = [
//   {
//     name: 'author number 1',
//     quote: 'quote number 1'
//   },
//   {
//     name: 'author number 2',
//     quote: 'quote number 2'
//   }
// ]