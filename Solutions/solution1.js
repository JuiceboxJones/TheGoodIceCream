function solution1() {
  window.iceCreamFlavors.forEach(item => {
    $('.ice-cream-list').append(`<li class='ice-cream-flavor'> ${item} </li>`);
  });
}

solution1();
