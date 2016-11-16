/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _mortgage = __webpack_require__(1);
	
	var mortgage = _interopRequireWildcard(_mortgage);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	// let calculateMonthlyPayment = (principal, years, rate) => {
	//   let monthlyRate = 0
	//   if (rate) {
	//     monthlyRate = rate/100/12
	//   }
	//   let monthlyPayment = (principal * monthlyRate)/(1-(Math.pow(1/(1 + monthlyRate), years * 12)))
	//   return {principal,years,rate,monthlyPayment,monthlyRate}
	// }
	// let calculateAmortization = (principal, years, rate) => {
	//   let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate)
	//   let balance = principal
	//   let amortization = []
	//   for (let y = 0; y < years; y++) {
	//     let interestY = 0
	//     let principalY = 0
	//     for (let m = 0; m < 12; m++) {
	//       let interestM = balance * monthlyRate
	//       let principalM = monthlyPayment - interestM
	//       interestY = interestY + interestM
	//       principalY = principalY + principalM
	//       balance = balance - principalM
	//     }
	//     amortization.push({principalY, interestY, balance})
	//   }
	//   return {monthlyPayment, monthlyRate, amortization}
	// }
	document.getElementById('submit').addEventListener('click', function () {
	  var principal = document.getElementById('principal').value;
	  var years = document.getElementById('years').value;
	  var rate = document.getElementById('rate').value;
	
	  var _mortgage$calculateAm = mortgage.calculateAmortization(principal, years, rate),
	      monthlyPayment = _mortgage$calculateAm.monthlyPayment,
	      monthlyRate = _mortgage$calculateAm.monthlyRate,
	      amortization = _mortgage$calculateAm.amortization;
	
	  console.log(monthlyPayment, monthlyRate);
	  document.getElementById('monthlyPayment').innerHtml = monthlyPayment.toFixed(2);
	  document.getElementById('monthlyRate').innerHtml = (monthlyRate * 100).toFixed(2);
	  amortization.forEach(function (month) {
	    return console.log(month);
	  });
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var calculateMonthlyPayment = exports.calculateMonthlyPayment = function calculateMonthlyPayment(principal, years, rate) {
	  var monthlyRate = 0;
	  if (rate) {
	    monthlyRate = rate / 100 / 12;
	  }
	  var monthlyPayment = principal * monthlyRate / (1 - Math.pow(1 / (1 + monthlyRate), years * 12));
	  return { principal: principal, years: years, rate: rate, monthlyPayment: monthlyPayment, monthlyRate: monthlyRate };
	};
	var calculateAmortization = exports.calculateAmortization = function calculateAmortization(principal, years, rate) {
	  var _calculateMonthlyPaym = calculateMonthlyPayment(principal, years, rate),
	      monthlyPayment = _calculateMonthlyPaym.monthlyPayment,
	      monthlyRate = _calculateMonthlyPaym.monthlyRate;
	
	  var balance = principal;
	  var amortization = [];
	  for (var y = 0; y < years; y++) {
	    var interestY = 0;
	    var principalY = 0;
	    for (var m = 0; m < 12; m++) {
	      var interestM = balance * monthlyRate;
	      var principalM = monthlyPayment - interestM;
	      interestY = interestY + interestM;
	      principalY = principalY + principalM;
	      balance = balance - principalM;
	    }
	    amortization.push({ principalY: principalY, interestY: interestY, balance: balance });
	  }
	  return { monthlyPayment: monthlyPayment, monthlyRate: monthlyRate, amortization: amortization };
	};

/***/ }
/******/ ]);
//# sourceMappingURL=main.bundle.js.map