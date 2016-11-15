let calculateMonthlyPayment = function (principal, years, rate) {
    if (rate) {
        let monthlyRate = rate / 100 / 12
    }
    let monthlyPayment = principal * monthlyRate /
                         (1 - (Math.pow(1/(1 + monthlyRate), years * 12)))
    return {principal, years, rate, monthlyPayment, monthlyRate}
}

let {monthlyPayment,monthlyRate} =  calculateMonthlyPayment(principal, years, rate)

document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2)

console.log(monthlyPayment)

console.log(monthlyRate)
