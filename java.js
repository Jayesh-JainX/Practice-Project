
var name= prompt("What is Your Name ?");

console.log("Hello Welocome to My Site ");
 
a = 0;
function rep() {
    a = a + 10;
    alert("Thanks For Spending " + a + "-Minutes..!");
}
setInterval(rep, 600000);
