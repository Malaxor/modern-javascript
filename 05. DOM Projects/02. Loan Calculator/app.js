
// UI variables
const form = document.getElementById('loan-form');
const amount = document.getElementById('amount');
const interest = document.getElementById('interest');
const years = document.getElementById('years');
// RESULTS
const monthlyPayment = document.getElementById('monthly-payment');
const totalPayment = document.getElementById('total-payment');
const totalInterest = document.getElementById('total-interest');

function calculateResults(e) {

    e.preventDefault();

    // Formulas
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
    // monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x - 1);
    
    if(isFinite(monthly)) {

        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
    }
    else {
        showError('Please check your numbers');
    }
}

function showError(error) {

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);
    // clear error after 3 seconds
    setTimeout(clearError, 3000);
}

// clear error
function clearError() {

    document.querySelector('.alert').remove();
}

form.addEventListener('submit', calculateResults);