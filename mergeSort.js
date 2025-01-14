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
  for (; one <= arrayOneLength; one++)[
    finalArray[final++] = arrayOne[one]
  ]
  for (; two <= arrayTwoLength; two++){
    finalArray[final++] = arrayTwo[two]
  }

  return finalArray
}
