function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  arr.sort((a, b) => a - b);
  console.log('sorted list: ', arr);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

module.exports = { binarySearch };
