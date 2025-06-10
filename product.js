// Set up main image swap for small image cards
       var mainImage = document.getElementById('main-img');
       var smallImages = document.getElementsByClassName('image-card');
     
       for (let i = 0; i < smallImages.length; i++) {
           smallImages[i].onclick = function () {
               const img = smallImages[i].querySelector('img');
               if (img) {
                   mainImage.src = img.src;
               }
           };
       }
     
      

//show the number of count in the shop icon in nav bar, when + icon is clicked the number increases and when - icon is clicked it is decreased
 document.addEventListener('DOMContentLoaded', function () {
 let cartCount = 0;

 const plusBtn = document.querySelector('.single-add-to-cart .fa-plus');
 const minusBtn = document.querySelector('.single-add-to-cart .fa-minus');

 const cartCountDisplay = document.getElementById('cart-count');

 plusBtn.addEventListener('click', function () {
   cartCount++;
   cartCountDisplay.textContent = cartCount;
   cartCountDisplay.style.display = 'inline-flex';
 });

 minusBtn.addEventListener('click', function () {
   if (cartCount > 0) {
     cartCount--;
     cartCountDisplay.textContent = cartCount;

     if (cartCount === 0) {
       cartCountDisplay.style.display = 'none';
     }
   }
 });
});
