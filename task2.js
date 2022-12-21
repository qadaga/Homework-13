let nums = [3,5,12,45,10,-10,-101,2,-200,47,89]

let positive = []

let negative = []

for (let i = 0; i < nums.length;i++) {
    if(nums[i] > 0) {
        positive.push(nums[i])
    }
    else {
        negative.push(nums[i])
    }
    
}

console.log(negative)
console.log(positive)