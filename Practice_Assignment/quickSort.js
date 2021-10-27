quickSort = (arr, left, right) => {
    if(left >= right){
        return;
    }
    let mid = sortHelper(arr, left, right);
    quickSort(arr, left, mid - 1);
    quickSort(arr, mid + 1, right)
}

sortHelper = (arr, left, right) => {
    let pivot = arr[left];
    while(left < right){
        while(arr[right] >= pivot && left < right){
            right--;
        }
            arr[left] = arr[right];
        while(arr[left] <= pivot && left < right){
            left++;
        }
            arr[right] = arr[left];
    }
    arr[left] = pivot;
    return left;
}

let arr = [2,9,11,8,7,10,28,12,1];
quickSort(arr, 0, 8);
console.log(arr);

//Big O time complexity is O(Nlog(N))
//The worst case complexity is N^2, when the array in asending or desending order