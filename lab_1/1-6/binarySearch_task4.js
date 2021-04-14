// 4 task
module.exports = (arr, item) => {
    let left = 0;
    let right = arr.length - 1;
    let mid = 0;
    let guess = 0;
    while (left <= right) {
       mid = (left + right);
       guess = arr[mid];
       if (guess === item) {
           return mid;
       } else if (guess > item) {
           right = mid - 1;
       } else {
           left = mid + 1;
       }
    }
};
