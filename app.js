// function twoSum(array,target) {

//   return [firstIndex,secondIndex]
//   }

// function twoSum(numberArray, targetNumber) {
//   let firstIndex = 0;
//   let secondIndex = numberArray.length - 1;
//   while (firstIndex < secondIndex) {
//     const sum = numberArray[firstIndex] + numberArray[secondIndex];
//     if (sum === targetNumber) {
//       prompt(
//         `If you add ${firstIndex} and ${secondIndex}, you get ${targetNumber}`
//       );
//       return [firstIndex, secondIndex];
//     } else if (sum < targetNumber) {
//       firstIndex++;
//     } else {
//       secondIndex--;
//     }
//   }
// }

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
