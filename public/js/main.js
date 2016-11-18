//import * as mortgage from './mortgage'
let calculateMonthlyPayment = (principal, years, rate) => {
  let monthlyRate = 0
  if (rate) {
    monthlyRate = rate/100/12
  }
  let monthlyPayment = (principal * monthlyRate)/(1-(Math.pow(1/(1 + monthlyRate), years * 12)))
  return {principal,years,rate,monthlyPayment,monthlyRate}
}
let calculateAmortization = (principal, years, rate) => {
  let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate)
  let balance = principal
  let amortization = []
  for (let y = 0; y < years; y++) {
    let interestY = 0
    let principalY = 0
    for (let m = 0; m < 12; m++) {
      let interestM = balance * monthlyRate
      let principalM = monthlyPayment - interestM
      interestY = interestY + interestM
      principalY = principalY + principalM
      balance = balance - principalM
    }
    amortization.push({principalY, interestY, balance})
  }
  return {monthlyPayment, monthlyRate, amortization}
}
document.getElementById('submit').addEventListener('click', function () {
  let principal = document.getElementById('principal').value
  let years = document.getElementById('years').value
  let rate = document.getElementById('rate').value
  let {monthlyPayment, monthlyRate, amortization} = calculateAmortization(principal, years, rate)
  console.log(monthlyPayment, monthlyRate)
  document.getElementById('monthlyPayment').innerHTML = monthlyPayment.toFixed(2)
  document.getElementById('monthlyRate').innerHTML = (monthlyRate * 100).toFixed(2)
  amortization.forEach(month => console.log(month))
})

// function getTitle () {
//   var http = new Request('./', {method :'GET', chche :'reload'})
//   return fetch(http).then(function (response) {
//     return response.json()
//     console.log(response.json())
//   })
// }
function getTitle () {
  return fetch('./json', {method: 'get'})
  .then(function (response) {
    return response.json()
  }).catch(function (err) {})
}
 let json = getTitle()
json.then(function (data) {
  console.log(data)
  document.getElementById('title').innerHTML = data.title
})
