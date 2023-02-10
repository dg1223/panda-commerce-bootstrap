// Convert texts in h2 tags to lightblue colour
const h2Tags = document.getElementsByTagName('h2');
for (h2 of h2Tags) {
    h2.style.color = 'lightblue';
}

// Convert background colour of all IDs called backpack to tomato
document.getElementById('backpack').style.backgroundColor = 'tomato';

// Change border radious of every card class to 30px
const cards = document.getElementsByClassName('card');
for (card of cards){
    card.style.borderRadius = '30px';    
}

// Write a function that adds a console log to a button as a clickhandler
const buyNowButtons = document.getElementsByClassName('panda-btn-buy-now');
for (button of buyNowButtons){
    button.addEventListener('click', function(){
        console.log('Buy Now button clicked');

    })
}

// Remove the Buy Now button when clicked. Do it for every Buy Now button
for (button of buyNowButtons){
    button.addEventListener('click', function(event){
        event.target.parentNode.removeChild(event.target);
                
    })
}