
const btn = document.querySelector(".btn");

btn.onclick = function quotes () {

    
const authorQuotes = {
    "-- Oscar Wilde" : " “Be yourself; everyone else is already taken.” ",
    "-- Albert Einstein" : "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.” ",
    "-- Lisa McMann" : " “We will survive somehow. Dragons always do.” ",
    "-- Marcus Tullius Cicero" : " “A room without books is like a body without a soul.” ",
    "-- Mae West" : " “You only live once, but if you do it right, once is enough.” ",
    "-- Mark Twain" : " “If you tell the truth, you don't have to remember anything.” ",
    "-- Elbert Hubbard" : " “A friend is someone who knows all about you and still loves you.” ",
    "-- Oscar Wilde" : " “Always forgive your enemies; nothing annoys them so much.” "
}

const authors = Object.keys(authorQuotes);
const author = authors[Math.floor(Math.random()*authors.length)];

const quotes = authorQuotes[author];

document.querySelector(".quote-ex").innerHTML = quotes;

document.querySelector(".author").innerHTML = author;
}