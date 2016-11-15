var calculateMonthlyPayment = function (principal, year, rate) {
  if(rate){
    var monthlyRate = rate/100/12
  }
  var monthluPayment = (principal * monthlyRate)/(1-(Math.pow(1/(1 + monthlyRate), years * 12)))
  return monthluPayment
}
