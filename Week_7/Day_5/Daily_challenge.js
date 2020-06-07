function reverseArray(arr){
  arr.forEach((val, ind, arr) =>{
    if (ind < arr.length/2){
    let temp = arr[ind]
    arr[ind] = arr[arr.length-1-ind]
    arr[arr.length-1-ind] = temp
  }
  })
  return arr;
}
reverseArray([1,2,3,4,5])
//[ 5, 4, 3, 2, 1 ]