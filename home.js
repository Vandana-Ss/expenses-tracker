let totalBalance = 0;
let expensesList = [];

window.onload = function () {
	const isFirstVisitDone = localStorage.getItem("firstVisitDone");
	const storedBalance = localStorage.getItem("totalBalance");

	if (storedBalance) {
		totalBalance = parseFloat(storedBalance);
	}

	if (isFirstVisitDone) {
		document.querySelector(".initial-amount").style.display = "none";
		document.getElementById("total-balance").style.display = "block";
		document.getElementById("total-balance").innerText = `Total Balance : $${totalBalance}`;
		document.getElementById("details-input").style.display = "inline-block";
		document.getElementById("amount-input").style.display = "inline-block";
		document.querySelector("button[onclick='expenses()']").style.display = "inline-block";
		document.getElementById("expenses-list").style.display = "table";
	} else {
		document.querySelector(".initial-amount").style.display = "block";
		document.getElementById("total-balance").style.display = "none";
		document.getElementById("details-input").style.display = "none";
		document.getElementById("amount-input").style.display = "none";
		document.querySelector("button[onclick='expenses()']").style.display = "none";
		document.getElementById("expenses-list").style.display = "none";
	}
};

function addAmount() {
	const initialAmount = parseFloat(document.getElementById("initial-amount-input").value);

	if (isNaN(initialAmount) || initialAmount <= 0) {
		alert("Please enter a valid initial amount greater than zero.");
		return;
	}

	totalBalance = initialAmount;
	localStorage.setItem("totalBalance", totalBalance);
	localStorage.setItem("firstVisitDone", "true");

	document.getElementById("total-balance").innerText = `Total Balance : $${totalBalance}`;
	document.querySelector(".initial-amount").style.display = "none";
	document.getElementById("total-balance").style.display = "block";
	document.getElementById("details-input").style.display = "inline-block";
	document.getElementById("amount-input").style.display = "inline-block";
	document.querySelector("button[onclick='expenses()']").style.display = "inline-block";
	document.getElementById("expenses-list").style.display = "table";
}

function expenses() {
	const expensesDetails = document.getElementById("details-input").value;
	const amountValue = parseFloat(document.getElementById("amount-input").value);

	if (!expensesDetails || isNaN(amountValue) || amountValue <= 0) {
		alert("Please fill in both fields correctly.");
		return;
	}

	totalBalance -= amountValue;
	localStorage.setItem("totalBalance", totalBalance);

	expensesList.push({ details: expensesDetails, amount: amountValue });

	const tableBody = document.getElementById("expenses-table-body");
	tableBody.innerHTML += `
		<tr>
			<td>${expensesDetails}</td>
			<td>-$${amountValue}</td>
		</tr>
	`;

	document.getElementById("total-balance").innerText = `Total Balance : $${totalBalance}`;
	document.getElementById("details-input").value = '';
	document.getElementById("amount-input").value = '';
}

// 👉 Show manual income input
function showAddIncome() {
	document.getElementById("manual-income-container").style.display = "block";
}

// 👉 Submit manual income
function submitIncome() {
	const incomeValue = parseFloat(document.getElementById("manual-income-input").value);

	if (isNaN(incomeValue) || incomeValue <= 0) {
		alert("Please enter a valid income amount.");
		return;
	}

	totalBalance += incomeValue;
	localStorage.setItem("totalBalance", totalBalance);

	document.getElementById("total-balance").innerText = `Total Balance : $${totalBalance}`;

	const tableBody = document.getElementById("expenses-table-body");
	tableBody.innerHTML += `
		<tr>
			<td>Manual Income</td>
			<td style="color: green;">+$${incomeValue}</td>
		</tr>
	`;

	document.getElementById("manual-income-input").value = '';
	document.getElementById("manual-income-container").style.display = "none";
}
