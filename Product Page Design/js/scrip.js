let productimg = document.getElementById("productimg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function () {
  productimg.src = "img/image1.png";
}
btn[1].onclick = function () {
  productimg.src = "img/image2.png";
}
btn[2].onclick = function () {
  productimg.src = "img/image3.png";
}
