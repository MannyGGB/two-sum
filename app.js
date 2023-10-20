const numberArray = [1, 10, 3, 11, 14];

let targetNumber = +prompt("Write a number between 1 and 20.");

function twoSum(numberArray, targetNumber) {
  let firstIndex = 0;
  let secondIndex = numberArray.length - 1;
  let sum = numberArray[firstIndex] + numberArray[secondIndex];
  //loop while the sum is not correct
  while (sum !== targetNumber) {
    //check if the first index plus the second index is less than the target number
    if (sum < targetNumber) {
      firstIndex++;
      if (firstIndex === numberArray.length - 1) {
        break;
      }
      secondIndex = numberArray.length - 1;
    } else if (sum > targetNumber) {
      secondIndex--;
      if (firstIndex === secondIndex) {
        break;
      }
    }
    sum = numberArray[firstIndex] + numberArray[secondIndex];
  }
  if (sum === targetNumber) {
    alert("Well done!");
    alert(`${firstIndex} and ${secondIndex} are the indexes`);
  } else {
    alert("Not a valid answer.");
  }
  // if less, firstIndex++
  //if more, secondIndex--
  //if firstIndex is equal to the length of the array, then stop
}

twoSum(numberArray, targetNumber);

// For loop within a for loop
// const twoSum = (nArray, target) => {
//   for (let i = 0; i < nArray.length; i++) {
//     for (let j = 0; j < nArray.length; j++) {
//       if (nArray[i] + nArray[j] === target) {
//         return [i, j]
//       }
//     }
//   }
//   }
//   console.log(twoSum([1,2,3,4,5,6,7,8,9],7))

// Two sum with hashmap to optimise time complexity
// const betterTwoSum = (nArr, target) => {
//   let hash = new Map();
//   for (let i = 0; i <= nArr.length; i++){
//     let compliment = target - nArr[i];
//     if (hash.has(nArr[i])) return [hash.get(nArr[i]), i]
//     hash.set(compliment, i)
//   }
// }
// console.log(betterTwoSum([1,2,3,4,5,6,7,8,9,10], 6))
