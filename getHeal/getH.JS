

let header = document.querySelector('header');
window.addEventListener('scroll' , () => { 
    header.classList.toggle('shadow',window.scrollY > 0);
});






let cartCounter = 0;

function addToCart() {
    const buttonElement3 = document.querySelector('.js-button3');
    const cartCounterElement = document.getElementById('cart-counter');

    if (buttonElement3.innerHTML === 'Add to Cart') {
        buttonElement3.innerHTML = 'Added';
        cartCounter++;
        cartCounterElement.innerHTML = cartCounter;
    } else {
        buttonElement3.innerHTML = 'Add to Cart';
    }
}