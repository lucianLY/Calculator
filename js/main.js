var calculateMonthlyPayment = (principal, years, rate) => {
  if(rate){
    var monthlyRate = rate/100/12
  }
  var monthluPayment = (principal * monthlyRate)/(1-(Math.pow(1/(1 + monthlyRate), years * 12)))
  return {principal,years,rate,monthluPayment,monthlyRate}
}

$('button').click(function () {
  let principal = $('.principal').val()
  let year = $('.year').val()
  let rate = $('.rate').val()
  let {monthluPayment,monthlyRate} = calculateMonthlyPayment(principal, year, rate)
  $('.monthluPayment').html(monthluPayment)
})
