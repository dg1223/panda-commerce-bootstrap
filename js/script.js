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

// Disable the Submit button in the Let's Stay in Touch section
// Enable it only when user types the word 'email'
document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){    
    const text = event.target.value;
    const submitButton = document.getElementById('btn-submit');    
    if (text === 'email'){
        submitButton.removeAttribute('disabled');        
    } else {
        submitButton.setAttribute('disabled', true);        
    }
})

/* OPTIONAL SECTION 1
 * Change image on mouseenter
 * Change image of a backpack to its corresponding jacket
 * For example, bag-1.png become jacket-1.png on mouseenter
 */

const images = document.getElementById('backpack').querySelectorAll('img');

/**
 * The getImageNumberFromPath function takes an image path and 
 * returns the number of the image.
 * 
 *
 * @param event Get the source path of an image
 *
 * @return The number of the image in the path
 *
 */
function getImageNumberFromPath(event){
    const text = event.target.src;
    const pattern = /\d+(?=.png)/;  // match .png formats
    const result = text.match(pattern);

    return result[0];
}

images.forEach(function(img) {
    img.addEventListener("mouseenter", function(event) {
        const imageNumberEnter = getImageNumberFromPath(event);
        filepathEnter = './images/other/jacket-' + imageNumberEnter + '.png';
        event.target.src = filepathEnter;
    });
});

images.forEach(img => {
    img.addEventListener("mouseleave", e => {
        const imageNumberLeave = getImageNumberFromPath(e);
        filepathLeave = './images/bags/bag-' + imageNumberLeave + '.png';
        e.target.src = filepathLeave;
    });
});

/* OPTIONAL SECTION 2
 * Change background colour when an empty space is clicked on 
 * the Let's Stay in Touch section
 */
document.getElementById('subscribe').addEventListener('dblclick', function(){
    this.style.backgroundColor = 'tomato';    
})