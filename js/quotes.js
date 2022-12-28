const quotes = [
    {
        quote : "Age is no guarantee of maturity.",
        author: "Anonymous",
    },
    {
        quote : "All you need in this life is ignorance and confidence, then success is sure.",
        author: "Anonymous",
    },
    {
        quote : "A day without laughter is a day wasted.",
        author: "Anonymous",
    },
    {
        quote : "Patterning your life around other's opinions is nothing more than slavery.",
        author: "Anonymous",
    },
    {
        quote : "love what you have.",
        author: "Anonymous",
    },
    {
        quote : "Do not be afraid to give up the good to go for the great.",
        author: "Anonymous",
    },
    {
        quote : "Rome is not built in a day.",
        author: "Anonymous",
    },
    {
        quote : "Habit is second nature.",
        author: "Anonymous",
    },
    {
        quote : "The unexamined life is not worth living.",
        author: "Anonymous",
    },
    {
        quote : "Only I can change my life, No one can do it for me.",
        author: "Anonymous",
    },
];

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

// math모듈을 통해 qutoes배열의 랜덤 하나를 가져와서 변수에 저장
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;