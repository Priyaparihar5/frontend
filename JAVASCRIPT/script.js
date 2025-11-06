
//console.log(sum(2,3));
//function sum(a,b){
  //  return a+b
//}

//const sum = function (a,b){
  //  returna+b;
//}


function calculate(operation, num1, num2, ...moreNums) {
  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      for (let num of moreNums) result += num;
      break;
 case "subtract":
      result = num1 - num2;
      for (let num of moreNums) result -= num;
      break;

    case "multiply":
      result = num1 * num2;
      for (let num of moreNums) result *= num;
      break;
case "divide":
      result = num1 / num2;
      for (let num of moreNums) result /= num;
      break;

    default:
      return "Invalid operation";
  }

  return result;
}

console.log(calculate("subtract", 1, 2, 3, 4, 5)); 


//function calculate (operation , num1, num2, ...rest){

//}