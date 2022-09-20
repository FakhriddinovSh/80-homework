var oneDollar = 10900;
var oneEuro = Math.round(12272.64);
var ticketCost = 500 * oneDollar;
var hotelCost = 250 * oneDollar;
var museumCost = (120 * oneEuro) * oneDollar;
var total = ticketCost + hotelCost + museumCost;
console.log(total)

var myMoney = prompt("Qancha pulingiz bor? So'mda kiriting!")

if(myMoney >= total){
    alert("Oq yo'l, Alisher!")
}else{
    alert("Alisher, ozgina sabr qilish kerak bo'lar ekan")
}
