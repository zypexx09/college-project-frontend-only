// Filter Modal Toggle
const filterIcon = document.querySelector('.product-filter i');
const filterModal = document.getElementById('filterModal');

filterIcon.addEventListener('click', (e) => {
  e.stopPropagation();
  filterModal.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!filterModal.contains(e.target) && !filterIcon.contains(e.target)) {
    filterModal.classList.remove('active');
  }
});

// Range & Price Inputs
const rangeInput = document.querySelectorAll(".range-input input"),
      priceInput = document.querySelectorAll(".price-input input"),
      range = document.querySelector(".slider .progress"),
      productCards = document.querySelectorAll('.product-card'),
      searchInput = document.getElementById('searchInput');

let priceGap = 500;

// Update slider when number inputs change
priceInput.forEach(input => {
  input.addEventListener("input", e => {
    let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

    if ((maxPrice - minPrice >= priceGap) && maxPrice <= 10000) {
      if (e.target.classList.contains("input-min")) {
        rangeInput[0].value = minPrice;
        range.style.left = ((minPrice / 10000) * 100) + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / 10000) * 100 + "%";
      }
      filterProducts();
    }
  });
});

// Update number inputs when sliders change
rangeInput.forEach(input => {
  input.addEventListener("input", e => {
    let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

    if ((maxVal - minVal) < priceGap) {
      if (e.target.classList.contains("range-min")) {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = ((minVal / 10000) * 100) + "%";
      range.style.right = 100 - (maxVal / 10000) * 100 + "%";
      filterProducts();
    }
  });
});

// Search + Filter Function
function filterProducts() {
  const minPrice = parseInt(priceInput[0].value) || 0;
  const maxPrice = parseInt(priceInput[1].value) || Infinity;
  const searchTerm = searchInput.value.toLowerCase().trim();

  productCards.forEach(product => {
    const productName = product.querySelector('.product-desc h3').textContent.toLowerCase();
    const productPrice = parseFloat(product.querySelector('.product-desc p').textContent.replace('Rs. ', ''));

    const matchesSearch = productName.includes(searchTerm);
    const matchesPrice = productPrice >= minPrice && productPrice <= maxPrice;

    product.style.display = (matchesSearch && matchesPrice) ? 'block' : 'none';
  });
}

// Trigger filter on search input
searchInput.addEventListener('input', filterProducts);

// Initial filter on load
filterProducts();



