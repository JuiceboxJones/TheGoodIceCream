function solution2() {
  window.iceCreamFlavors.map(item => {
    $('.ice-cream-list').append(`<li class='ice-cream-flavor'> ${item} </li>`);
  });
}

solution2();
