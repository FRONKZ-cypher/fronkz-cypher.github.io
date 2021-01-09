//must have array with quotes then random and display to the user

/* 
1.Connect the button to js
2.make it toggle 
3.make the button random and get array data to display
4.innerHTML in the lower<div> to display the quote
5.install in the storage(decide later)

*/

//คำคม
var quotes =[
    'Nothing is impossible; the word itself says “I’m possible” – Audrey Hepburn',
    'I’ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. – Maya Angelou',
    'Whether you think you can or you think you can’t, you’re right. – Henry Ford',
    'Perfection is not attainable, but if we chase perfection we can catch excellence. – Vince Lombardi'

]

// number random
function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length)); //Math.random() will return decimal 0-1 and multiply quote length to limit the random number
    // display
    document.getElementById("quoteDisplay").innerHTML = quotes[randomNumber];
}

