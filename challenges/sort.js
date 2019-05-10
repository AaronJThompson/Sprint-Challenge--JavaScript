
Array.prototype.quicksort = (function() {
    // We're using closures here to our advantage so that we A: only have one function accessible B: Only create the functions used once, rather than every function call
    function partition( left, right, pivot) {
        let leftIndex = left;
        let rightIndex = right - 1;
        while (true) {
            while(this[leftIndex] <= pivot && leftIndex < right){
                leftIndex++;
            }
    
            while(rightIndex >= 0 && this[rightIndex] > pivot){
                rightIndex--;
            }
            if(leftIndex >= rightIndex){
                break;
            }else{
                let temp = this[rightIndex];
                this[rightIndex] = this[leftIndex];
                this[leftIndex] = temp;
            }
        }
        let temp = this[right];
        this[right] = this[leftIndex];
        this[leftIndex] = temp;
        return leftIndex;
    }
    function quicksort(left = 0, right = this.length - 1) {
        if(right-left <=0){
            return;
        }
        let pivot = this[right];
        // let partitionedIndex = partition(left, right, pivot);
        let partitionedIndex = partition.call(this, left, right, pivot);
        // quicksort(left, partitionedIndex - 1);
        quicksort.call(this, left, partitionedIndex - 1);
        // quicksort(partitionedIndex + 1, right);
        quicksort.call(this, partitionedIndex + 1, right);
    }
    return quicksort;
})();
let nums = [3,8,6,11,9,10,1,2,5];
let numsLarge = [36, 28, 189, 2, 181, 121, 158, 126, 104, 157, 192, 38, 160, 27, 187, 153, 52, 173, 165, 75, 113, 186, 24, 29, 176, 108, 14, 122, 47, 95, 149, 178, 125, 200, 88, 81, 196, 118, 155, 141, 199, 66, 134, 50, 43, 180, 174, 76, 137, 152, 180, 180, 180, 180];
nums.quicksort();
console.log(nums);
numsLarge.quicksort();
console.log(numsLarge);