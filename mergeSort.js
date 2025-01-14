function merge(arrayOne, arrayTwo) {
  const arrayOneLength = arrayOne.length,
    arrayTwoLength = arrayTwo.length;
  const finalArray = [];
  let one = 0,
    two = 0,
    final = 0;
  while (one < arrayOneLength && two < arrayTwoLength) {
    if (arrayOne[one] < arrayTwo[two]) {
      finalArray[final++] = arrayOne[one++];
    } else {
      finalArray[final++] = arrayTwo[two++];
    }
  }
  for (; one < arrayOneLength; one++) {
    finalArray[final++] = arrayOne[one];
  }
  for (; two < arrayTwoLength; two++) {
    finalArray[final++] = arrayTwo[two];
  }

  return finalArray;
}

function mergeSort(array) {
  console.log("This was printed recursively");
  if (array.length <= 1) return array;
  let mid = Math.floor(array.length / 2);
  let arrOne = mergeSort(array.slice(0, mid));
  let arrTwo = mergeSort(array.slice(mid));
  return merge(arrOne, arrTwo);
}

let input = [3, 2, 1, 13, 8, 5, 0, 1];
console.log(mergeSort(input));
