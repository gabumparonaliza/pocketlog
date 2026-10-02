const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");

const expenseList = document.getElementById("expenseList");
const totalElement = document.getElementById("total");
const emptyMessage = document.getElementById("emptyMessage");

let expenses =
  JSON.parse(localStorage.getItem("pocketlog-expenses")) || [];

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = expenseName.value.trim();
  const amount = Number(expenseAmount.value);

  if (name === "" || amount <= 0) {
    alert("Please enter a valid expense.");
    return;
  }

  expenses.push({
    name: name,
    amount: amount
  });

  saveExpenses();
  displayExpenses();

  expenseName.value = "";
  expenseAmount.value = "";
  expenseName.focus();
});

function saveExpenses() {
  localStorage.setItem(
    "pocketlog-expenses",
    JSON.stringify(expenses)
  );
}

function removeExpense(index) {
  expenses.splice(index, 1);

  saveExpenses();
  displayExpenses();
}

function displayExpenses() {
  expenseList.innerHTML = "";

  let total = 0;

  expenses.forEach(function (expense, index) {

    const item = document.createElement("li");

    const name = document.createElement("span");
    name.textContent = expense.name;

    const amount = document.createElement("span");
    amount.textContent =
      "₱" + expense.amount.toFixed(2);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", function () {
      removeExpense(index);
    });

    item.appendChild(name);
    item.appendChild(amount);
    item.appendChild(removeButton);

    expenseList.appendChild(item);

    total += expense.amount;
  });

  totalElement.textContent = total.toFixed(2);

  emptyMessage.style.display =
    expenses.length === 0 ? "block" : "none";
}

displayExpenses();
