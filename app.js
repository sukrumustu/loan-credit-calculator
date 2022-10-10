
const loanType = document.querySelector(".loan-type");
const months = document.getElementById("months");
const amount = document.getElementById("amount");
const calculate = document.querySelector("#calculate");
const results = document.querySelector(".results");




const monthlyPayment = (rate) => {
    rate = rate / 100;

    return (amount.value * (rate * (1 + rate) ** months.value) / ((1 + rate) ** months.value - 1)
    ).toFixed(2);
}

// const totalAmount = (monthlyPayment() * months.value).toFixed(2);

// console.log(loanType.textContent);
// console.log(calculate.innerText);
// console.log(calculate);

// console.log(typeOfLoan);


calculate.addEventListener("click", () => {



    const typeOfLoan = loanType.options[loanType.selectedIndex].value;
    // console.log(typeOfLoan);
    // alert(`Sizin seçiminiz: ${typeOfLoan}`);
    if (!typeOfLoan) {
        alert("Please choose a loan type.");
    } else if (!months.value) {
        alert("Please enter the number of months for repayment.");
    } else if (months.value < 12 || months.value > 120) {
        alert("Number of months must be at least 12 and at most 120 months.");
    } else if (!amount.value) {
        alert("You should enter the amount you need.");
    } else if (amount.value < 10000 || amount.value > 1000000) {
        alert("You may beg at least 10000 $ and at most 1000000 $.");
    } else {
        if (typeOfLoan === "Housing Loan") {

            results.innerHTML = `<h2 class="text-dark text-center bg-warning rounded mt-3 p-1">Loan Allocation Summary</h2>
            <table class="table table-bordered w-100 border border-warning bg-light mt-3">
                <tr>
                    <th class="w-25">Loan Amount</th>
                    <td class="w-25">${amount.value}</td>
                    <th class="w-25">Loan Type</th>
                    <td class="w-25">${typeOfLoan}</td>
                </tr>
                <tr>
                    <th>Months</th>
                    <td>${months.value}</td>
                    <th>Interest Rate</th>
                    <td>1.29</td>
                </tr>
                <tr>
                    <th>Total Amount</th>
                    <td>${(monthlyPayment(1.29) * months.value).toFixed(2)}</td>
                    <th>Monthly Payment</th>
                    <td>${monthlyPayment(1.29)}</td>
                </tr>
            </table>`;

        } else if (typeOfLoan === "Personal Loan") {

            results.innerHTML = `<h2 class="text-dark text-center bg-warning rounded mt-3 p-1">Loan Allocation Summary</h2>
            <table class="table table-bordered w-100 border border-warning bg-light mt-3">
                <tr>
                    <th class="w-25">Loan Amount</th>
                    <td class="w-25">${amount.value}</td>
                    <th class="w-25">Loan Type</th>
                    <td class="w-25">${typeOfLoan}</td>
                </tr>
                <tr>
                    <th>Months</th>
                    <td>${months.value}</td>
                    <th>Interest Rate</th>
                    <td>1.39</td>
                </tr>
                <tr>
                    <th>Total Amount</th>
                    <td>${(monthlyPayment(1.39) * months.value).toFixed(2)}</td>
                    <th>Monthly Payment</th>
                    <td>${monthlyPayment(1.39)}</td>
                </tr>
            </table>`;


        } else if (typeOfLoan === "Auto Loan") {
            results.innerHTML = `<h2 class="text-dark text-center bg-warning rounded mt-3 p-1">Loan Allocation Summary</h2>
            <table class="table table-bordered w-100 border border-warning bg-light mt-3">
                <tr>
                    <th class="w-25">Loan Amount</th>
                    <td class="w-25">${amount.value}</td>
                    <th class="w-25">Loan Type</th>
                    <td class="w-25">${typeOfLoan}</td>
                </tr>
                <tr>
                    <th>Months</th>
                    <td>${months.value}</td>
                    <th>Interest Rate</th>
                    <td>1.89</td>
                </tr>
                <tr>
                    <th>Total Amount</th>
                    <td>${(monthlyPayment(1.89) * months.value).toFixed(2)}</td>
                    <th>Monthly Payment</th>
                    <td>${monthlyPayment(1.89)}</td>
                </tr>
            </table>`;
        }

    }
});

document.querySelector("#reset").addEventListener("click", () => {

    return results.innerHTML = "";
    months.focus();
    amount.focus()
});

window.onload = months.focus();
window.onload = amount.focus();



