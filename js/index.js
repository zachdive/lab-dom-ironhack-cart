// ITERATION 1



function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector(".price span").innerText;
  const quantity = product.querySelector(".quantity input").value;
  
  const totalPrice = price * quantity;
  const subTotal = product.querySelector(".subtotal span");
  subTotal.innerText = totalPrice;
  return totalPrice;
}


//ITERATION 2
function calculateAll() {
  const everyProd = document.getElementsByClassName("product");
  const everyProdArray = [...everyProd];
  everyProdArray.forEach(product => updateSubtotal(product));
//ITERATION 3
  let total =  0;
  everyProdArray.forEach(product => total += updateSubtotal(product))
  const totalButton = document.querySelector("#total-value span");
  totalButton.innerText = total;
}
  

//ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here

}








window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);
  //... your code goes here
  const removeButtons = [...document.getElementsByClassName("btn-remove")];
  removeButtons.forEach(button => button.addEventListener("click", removeProduct));
})
