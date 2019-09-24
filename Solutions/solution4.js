function solution4() {
  let i = 0;
  let iceArr = window.iceCreamFlavors;
  while (i < iceArr.length) {
    $('.ice-cream-list').append(
      `<li class='ice-cream-flavor'> ${iceArr[i]} </li>`
    );
    i++;
  }
}

solution4();
