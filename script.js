let expenses = [];

function addExpense(){

    let title =
    document.getElementById("title").value;

    let amount =
    document.getElementById("amount").value;

    if(title==="" || amount===""){
        alert("Enter all fields");
        return;
    }

    expenses.push({
        title:title,
        amount:Number(amount)
    });

    displayExpenses();
}

function displayExpenses(){

    let list =
    document.getElementById("expenseList");

    list.innerHTML="";

    let total = 0;

    expenses.forEach(function(expense){

        total += expense.amount;

        let li =
        document.createElement("li");

        li.innerText =
        expense.title +
        " - ₹" +
        expense.amount;

        list.appendChild(li);
    });

    document.getElementById("total").innerText =
    total;
}