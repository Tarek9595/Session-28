let balance = document.querySelector(".balance span");
let deposit = document.querySelector(".deposit");
let withdraw = document.querySelector(".withdraw");
let inputValue = document.querySelector("#e-wallet-amount");
let historyTable = document.querySelector(".historyTable table tbody");
let history = document.querySelector(".history");
let isShow = false;
let nowBalance = 0;
let understoodBody = document.querySelector(".understood");

let transactionHistory = [];

let showTransactions = () => {
  historyTable.innerHTML = "";
  transactionHistory.forEach((el) => {
    if (el.type == "Deposit") {
      historyTable.innerHTML += `
                        <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-green-600"
                      >
                        ${el.type}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-green-600"
                      >
                        $ ${el.amount}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-indigo-800"
                      >
                        $ ${el.currentBalance}
                      </td>
                    </tr>

    `;
    }
    if (el.type == "Withdraw") {
      historyTable.innerHTML += `
                        <tr>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-red-600"
                      >
                        ${el.type}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-red-600"
                      >
                        $ ${el.amount}
                      </td>
                      <td
                        class="px-6 py-4 whitespace-nowrap text-sm text-right font-semibold text-indigo-800"
                      >
                        $ ${el.currentBalance}
                      </td>
                    </tr>

    `;
    }
    balance.innerHTML = nowBalance;
  });
};
showTransactions();

let depositBtn = () => {
  if (inputValue.value) {
    moveAction("Deposit");
  }
};

let withdrawBtn = () => {
  if (inputValue.value) {
    if (inputValue.value > nowBalance) {
      understoodBody.style.display = "flex";
      inputValue.value = "";
    } else {
      moveAction("Withdraw");
    }
  }
};
let understood = () => {
  understoodBody.style.display = "none";
};

let moveAction = (typeMove) => {
  if (inputValue.value > 0) {
    if (typeMove === "Deposit") nowBalance += +inputValue.value;
    if (typeMove === "Withdraw") nowBalance -= +inputValue.value;
    let newTransaction = {
      type: typeMove,
      amount: inputValue.value,
      currentBalance: nowBalance,
    };
    transactionHistory.push(newTransaction);
    showTransactions();
    inputValue.value = "";
  } else {
    inputValue.value = "";
  }
};

let showHistory = () => {
  if (!isShow) {
    history.style.display = "block";
    isShow = true;
  } else {
    history.style.display = "none";
    isShow = false;
  }
};
