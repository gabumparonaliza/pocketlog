const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = expenseName.value.trim();
  const amount = Number(expenseAmount.value);

  if (name === "" || amount <= 0) {
    alert("Please enter a valid expense.");
    return;
  }

  console.log("Expense:", name);
  console.log("Amount:", amount);

  expenseName.value = "";
  expenseAmount.value = "";
});
