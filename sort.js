function quicksort(arr, left, right) {
    if(right-left <=0){
        return;
    }
    let pivot = arr[right];
    let partitionedIndex = partition(arr, left, right, pivot);
    quicksort(arr, left, partitionedIndex - 1);
    quicksort(arr, partitionedIndex + 1, right);
}

function partition(arr, left, right, pivot) {
    let leftIndex = left;
    let rightIndex = right - 1;
    while (true) {
        while(arr[leftIndex] < pivot && leftIndex < right){
            leftIndex++;
        }

        while(rightIndex >= 0 && arr[rightIndex] > pivot){
            rightIndex--;
        }
        if(leftIndex >= rightIndex){
            break;
        }else{
            let temp = arr[rightIndex];
            arr[rightIndex] = arr[leftIndex];
            arr[leftIndex] = temp;
        }
    }
    let temp = arr[right];
    arr[right] = arr[leftIndex];
    arr[leftIndex] = temp;
    return leftIndex;
}

let nums = [3,8,6,11,9,10,1,2,5];
quicksort(nums, 0, nums.length - 1);
console.log(nums);