// function aVeryBigSum(namra) {

//     let sum = BigInt(0);


//     for (let i = 0; i < namra.length; i++) {

//         sum += BigInt(namra[i]);
//     }
    

//     return sum.toString();
// }


// const input = [12569851, 8596474222, 1553, 1859626624, 12569585];
// console.log (aVeryBigSum(input)); 



//////javascript programming test////



// question no 03//
var withoutreverse = "Welcome to this Javascript Guide!"
console.log (withoutreverse);

var reverseallstrings = "Welcome to this Javascript Guide!";


var reverseallstrings = reverseWord(withoutreverse,"");
console.log(reverseallstrings);

var output = reverseWord(reverseallstrings," ");
console.log(output);

function reverseWord(string,separator){
  return withoutreverse.split(separator).reverse().join(separator);
}
//questio 05 //
function amountToCoins(amount, coins) {
   
    coins.sort((a, b) => b - a);
   
        const result = [];
   
    
    for (let i = 0; i < coins.length; i++) {
       
        const numCoins = Math.floor(amount / coins[i]);
       
       
        for (let j = 0; j < numCoins; j++) {
            result.push(coins[i]);
        }
             
        amount %= coins[i];
    }
      
    return result;
}

// Test the function
console.log(amountToCoins(1000, [65, 10, 5, 22, 1]));
//question no 01//
function maxProductSubarray(nums) {
    if (nums.length === 0) return 0;

    let maxProduct = nums[0];
    let minProduct = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let temp = maxProduct;
            maxProduct = minProduct;
            minProduct = temp;
        }

        maxProduct = Math.max(nums[i], maxProduct * nums[i]);
        minProduct = Math.min(nums[i], minProduct * nums[i]);
        result = Math.max(result, maxProduct);
    }

    return result;
}
const nums1 = [2, 3, -2, 4,6];
console.log(maxProductSubarray(nums1));

