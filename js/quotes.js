const quotes = [
    {
        quote: "It is possible to fail in many ways...while to succeed is possible only in one way."
    },
    {
        quote: "Success is not the result of spontaneous combustion. You must set yourself on fire."
    },
    {
        quote: "Success is counted sweetest by those who ne'er succeed."
    },
    {
        quote:"Energy is eternal delight."
    },
    {
        quote:"You always pass failure on the way to success."
    },
    {
        quote: "To freely bloom - that is my definition of success."
    },
    {
        quote:"What the superior man seeks is in himself. What the mean man seeks is in others."
    },
    {
        quote:"Creativity is...seeing something that doesn't exist already. You need to find out how you can bring it into being and that way be a playmate with God."
    },
    {
        quote:"It is a paradoxical but profoundly true and important principle of life that the most likely way to reach a goal is to be aiming not at that goal itself but at some more ambitious goal beyond it."
    },
    {
        quote:"Life engenders life. Energy creates energy. It is by spending oneself that one becomes rich."
    },
    
];
const quote = document.querySelector("#quote span:first-child");
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = todaysQuote.quote;