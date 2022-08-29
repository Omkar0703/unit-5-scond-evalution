// Store the wallet amount to your local storage with key "amount"

// Store the wallet amount to your local storage with key "amount"
// Store the wallet amount to your local storage with key "amount"
let money = localStorage.getItem("total amount") || 0;
let wallet = document.getElementById("wallet");
wallet.innerText = money;

function addMoney() {
  let amount = document.getElementById("amount").value;
  wallet.innerText = amount;

  money = amount;

  console.log(money);
  
  localStorage.setItem("amount", money);
}
