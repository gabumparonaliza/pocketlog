const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");

const expenseList = document.getElementById("expenseList");
const totalElement = document.getElementById("total");
const emptyMessage = document.getElementById("emptyMessage");

let expenses = [];

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

  displayExpenses();

  expenseName.value = "";
  expenseAmount.value = "";
});

function displayExpenses() {
  expenseList.innerHTML = "";

  let total = 0;

  expenses.forEach(function (expense) {
    const item = document.createElement("li");

    item.textContent =
      expense.name + " - ₱" + expense.amount.toFixed(2);

    expenseList.appendChild(item);

    total += expense.amount;
  });

  totalElement.textContent = total.toFixed(2);

  emptyMessage.style.display =
    expenses.length === 0 ? "block" : "none";
}
