// The average score according to the internet is about 250
function add(number1, number2, number3, number4, number5,number6,number7,number8,number9,number10,number11,number12,number13,number14,number15) {

    return number1 + number2 + number3 + number4 + number5 +number6 + number7 + number8+ number9+ number10+ number11+ number12+ number13+ number14+ number15;
}

function addNumbers() {
    let num1 = parseFloat(document.querySelector("#addend1").value);
    let num2 = parseFloat(document.querySelector("#addend2").value);
    let num3 = parseFloat(document.querySelector("#addend3").value);
    let num4 = parseFloat(document.querySelector("#addend4").value);
    let num5 = parseFloat(document.querySelector("#addend5").value);
    let num6 = parseFloat(document.querySelector("#addend6").value);
    let num7 = parseFloat(document.querySelector("#addend7").value);
    let num8 = parseFloat(document.querySelector("#addend8").value);
    let num9 = parseFloat(document.querySelector("#addend9").value);
    let num10 = parseFloat(document.querySelector("#addend10").value);
    let num11 = parseFloat(document.querySelector("#addend11").value);
    let num12 = parseFloat(document.querySelector("#addend12").value);
    let num13 = parseFloat(document.querySelector("#addend13").value);
    let num14 = parseFloat(document.querySelector("#addend14").value);
    let num15 = parseFloat(document.querySelector("#addend15").value);
    // Check to make Sure the numbers for set totals are entered correctly
    if(  ((num15 == 0) || (num15 == 100)) && ((num11 == 30) || (num11 == 0)) && ((num10 == 25) || (num10 == 0)) && ((num7 == 35) || (num7 == 0)) &&  ((num12 == 30) || (num12 == 0)) && ((num13 == 50) || (num13 == 0))){
        document.querySelector("#sum").value = add(num1, num2, num3, num4, num5, num6, num7,num8,num9,num10,num11,num12,num13,num14,num15,); 
      } 
      
      else {
        document.querySelector("#sum").value = "Invalid # Entered"; 
      }
    
}
document.querySelector("#addNumbers").addEventListener("click", addNumbers);
document.querySelector("#resets").addEventListener("click", resetBoard);
document.querySelector("#above").addEventListener("click", itsabove);
function resetBoard() {

    const inputs = document.querySelectorAll('#addend1, #addend2, #addend3, #addend4, #addend5, #addend6, #addend7, #addend8, #addend9, #addend10, #addend11, #addend12, #addend13, #addend14, #addend15');

    inputs.forEach(input => {
      input.value = '';
    });
    addNumbers()
}

