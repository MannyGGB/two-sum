// function twoSum(array,target) {

//   return [firstIndex,secondIndex]
//   }
const numberArray = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

let targetNumber = prompt("Write a number between 1 and 20.");

function twoSum(numberArray, targetNumber) {
  let firstIndex = 0;
  let secondIndex = numberArray.length - 1;
  while (firstIndex < secondIndex) {
    const sum = numberArray[firstIndex] + numberArray[secondIndex];
    if (sum === targetNumber) {
      prompt(
        `If you add ${firstIndex} and ${secondIndex}, you get ${targetNumber}`
      );
      return [firstIndex, secondIndex];
    } else if (sum < targetNumber) {
      firstIndex++;
    } else {
      secondIndex--;
    }
  }
}
twoSum(numberArray, targetNumber);
