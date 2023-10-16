// function twoSum(array,target) {

//   return [firstIndex,secondIndex]
//   }

let numberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let targetNumber = 11;

function twoSum(numberArray, targetNumber) {
  for (let i = 0; i <= numberArray.length; i++) {
    let firstIndex = numberArray[i];
    let secondIndex = numberArray[i - 1];
    if ((targetNumber = firstIndex + secondIndex)) {
      console.log(firstIndex, secondIndex);
    }
    return;
  }
}
