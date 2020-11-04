function Utility() {}

Utility.prototype.reverse = function (str) {
  if (str === null) {
    return null;
  } else {
    // if (typeof str != "string") {
    //     str = str.toString();
    // }
    str = str.toString();
    let reversedString = str.split("").reverse().join("");
    return reversedString;
  }
};

Utility.prototype.isPalindrome = function (str) {
  if (str === null) {
    return false;
  } else {
    str = str.toString();
    let reverseStr = str.split("").reverse().join("");
    if (reverseStr === str) {
      return true;
    } else {
      return false;
    }
  }
};
//it should return sum of all the numbers entered
//It should throw an error if any of the input is not a number, error msg "input is not a number
Utility.prototype.sums = function(...num){
    for(i=0;i<num.length; i++){
        console.log(num[i], typeof num[i]);
        if(typeof num[i] !== "number"){
            throw new Error("input is not a number");
        }
    }
    // use reduce to add all numbers in an array
    let sum = num.reduce((a, b) => a + b);
    return sum;
}

module.exports = Utility;
