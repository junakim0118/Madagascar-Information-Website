let total = document.getElementById("total");

let count = 0;
let btn = document.getElementById("cartbtn1");
let disp = document.getElementById("display");

btn.onclick = function() {
  count++;
  disp.innerHTML = count;
  totalq += (20);
  total.innerHTML = totalq;
  alert("1 pack of matches is added to the cart");
}


let count2 = 0;
let btn2 = document.getElementById("cartbtn2");
let disp2 = document.getElementById("display2");

btn2.onclick = function() {
  count2++;
  disp2.innerHTML = count2;
  totalq += (30);
  total.innerHTML = totalq;
  alert("1 knife is added to the cart");
}

let totalq = 0;
let count3 = 0;
let btn3 = document.getElementById("cartbtn3");
let disp3 = document.getElementById("display3");

btn3.onclick = function() {
  count3++;
  disp3.innerHTML = count3;
  totalq += (20);
  total.innerHTML = totalq;
  alert("1 compass is added to the cart");

}


