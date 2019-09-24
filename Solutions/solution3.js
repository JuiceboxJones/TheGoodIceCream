function solution3() {
  let iceArr = window.iceCreamFlavors;
  for (let i = 0; i < iceArr.length; i++) {
    $('.ice-cream-list').append(
      `<li class='ice-cream-flavor'> ${iceArr[i]} </li>`
    );
  }
}

solution3();
