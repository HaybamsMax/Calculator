// manipulating the history function 
function getHistory() {
   return document.getElementById("history-value").innerText;
}
// funtion to print the history value
function printHistory(num) {
    document.getElementById("history-value").innerText=num;
}
//getting output using output function
function getOutput() {
    return document.getElementById("output-value").innerText;
}
function printOutput(num) {
    //if statement for the clear function
    if(num==""){
        document.getElementById("output-value").innerText=num;
    } else {
         document.getElementById("output-value").innerText =
           getFormattedNumber(num); 
    }
 }
 //reading the number and giving the value comma
function getFormattedNumber(num) {
    if(num=="-"){
        return "";
    }
var n = Number(num);
var value = n.toLocaleString("en");
return value;
}
// replacing the comma to an empty character
function reverseNumberFormat(num) {
    return Number(num.replace(/,/g,''));
  }
//   accessing the operators class
  var operator = document.getElementsByClassName("operator");
  for(var i =0; i<operator.length; i++) {
    operator[i].addEventListener('click', function(){
        // accessing the clear button
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        // accessing the backspace
        if(this.id=="backspace") {
            var output=reverseNumberFormat(getOutput()).toString();
            if(output) {//if output has a value
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            //Accessing for the other operator
            var output=getOutput();
            var history=getHistory();
            if(output==""&&history!=""){
                if(isNaN(history[history.length-1])){
                    history= history.substr(0,history.length-1);
                }
            }
            if(output!="" || history!=""){
                //condition?true:false
                output= output==""? output:reverseNumberFormat(output);
                // adding history to the output value
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
  }
  var number = document.getElementsByClassName("number");
  for(var i =0; i<number.length; i++) {
    number[i].addEventListener('click', function(){
        var output = reverseNumberFormat(getOutput());
        if(output!=NaN){//if output is a number
            output=output+this.id;
            printOutput(output);
        }
    })
  }


  