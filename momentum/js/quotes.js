const quotes = [
  {
    quote: "Curious things, habits. People themselves never knew they had them.",
    author: "Agatha Christie",
  },
  {
    quote: "Recompense injury with justice, and recompense kindness with kindness",
    author: "Confucius",
  },
  {
    quote: "To love someone is to identify with them",
    author: "Aristotle",
  },
  {
    quote: "I never did a day's work in my life. It was all fun.",
    author: "Thomas A. Edison",
  },
  {
    quote: "I never think of the future - it comes soon enough.",
    author: "Albert Einstein",
  },
  {
    quote: "Each of us visits this Earth involuntarily, and without an invitation. For me, it is enough to wonder at the secrets.",
    author: "Albert Einstein",
  },
  {
    quote: "Keep your face to the sunshine and you cannot see the shadow.",
    author: "Helen Adams Keller",
  },
  {
    quote: "What can you do to promote world peace? Go home and love your family.",
    author: "Teresa ",
  },
  {
    quote: "My life didn't please me, so I created my life.",
    author: "coco",
  },
  {
    quote: "The greatest risk is the risk of riskless living.",
    author: "Stephen Covey",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQoute = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQoute.quote;
author.innerText = todaysQoute.author;

