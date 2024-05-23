function incDc(product, increase) {
  const productInput = document.getElementById(product + "-count");
  const intInputValue = parseInt(productInput.value);

  let newInputValue = intInputValue;
  if (increase == true) {
    newInputValue = intInputValue + 1;
  }
  if (increase == false && intInputValue > 0) {
    newInputValue = intInputValue - 1;
  }
  productInput.value = newInputValue;
  //
  let productTotal = 0;
  if (product == "bag") {
    productTotal = newInputValue * 110;
  }
  if (product == "bag2") {
    productTotal = newInputValue * 260;
  }
  if (product == "bag3") {
    productTotal = newInputValue * 110;
  }
  document.getElementById(product + "-total").innerText = "$" + productTotal;
  calculateTotal();
}
//
function calculateTotal() {
  const bag = getInputValue("bag");

  const bag2 = getInputValue("bag2");

  const bag3 = getInputValue("bag3");

  const totalPrice = bag * 110 + bag2 * 260 + bag3 * 110;
  document.getElementById("total-price").innerText = "$" + totalPrice;

  const tax = Math.round(totalPrice * 0.18);
  document.getElementById("tax-amount").innerText = "$" + tax;

  grandTotal = totalPrice + tax;
  document.getElementById("grand-total").innerText = "$" + grandTotal;
}

function getInputValue(product) {
  const productInput = document.getElementById(product + "-count");
  const productCount = parseInt(productInput.value);
  return productCount;
}

// payment
const cod = document.getElementById("cod");
cod.addEventListener("click", () => {
  const cashOd = document.getElementById("cashOd");
  cashOd.style.display = "none";
  const codDesign = document.getElementById("codDesign");
  codDesign.style.display = "block";
});
const BkS = document.getElementById("bks");
BkS.addEventListener("click", () => {
  const cashOd = document.getElementById("cashOd");
  cashOd.style.display = "block";
  const codDesign = document.getElementById("codDesign");
  codDesign.style.display = "none";
});
const NgD = document.getElementById("ngd");
NgD.addEventListener("click", () => {
  const cashOd = document.getElementById("cashOd");
  cashOd.style.display = "block";
  const codDesign = document.getElementById("codDesign");
  codDesign.style.display = "none";
});
