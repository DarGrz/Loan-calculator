var c = 1000; // Kapitał
var rate = 0.04; // Roczne oprocentowanie
var n = 12; // Kapitalizacja miesięczna
var y = 5; // Ilość lat
var calcBtn = document.getElementById('calculate');


var finalMoney = c * Math.pow((1 + (rate / n)), (n * y));

// console.log(finalMoney);

calcBtn.addEventListener('click', calculate);

function calculate() {
    var c = document.getElementById('capital').value;
    var rate = document.getElementById('interest-rate').value / 100;
    var n = 12;
    var y = document.getElementById('num-years').value

    var finalMoney = c * Math.pow((1 + (rate / n)), (n * y));
    document.getElementById('final-amount').value = finalMoney.toFixed(2);;

    
}