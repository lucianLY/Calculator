var calculateMonthlyPayment = (principal, years, rate) => {
  if(rate){
    var monthlyRate = rate/100/12
  }
  var monthlyPayment = (principal * monthlyRate)/(1-(Math.pow(1/(1 + monthlyRate), years * 12)))
  return {principal,years,rate,monthlyPayment,monthlyRate}
}

document.getElementById('submit').addEventListener('click', function () {
  let principal = document.getElementById('principal').value
  let years = document.getElementById('years').value
  let rate = document.getElementById('rate').value
  var {monthlyPayment,monthlyRate} = calculateMonthlyPayment(principal, years, rate)
  document.getElementById('Payment').innerHtml = monthlyPayment
})
