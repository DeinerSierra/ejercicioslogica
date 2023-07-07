function pares(nums) {
    return {
        pares:nums.filter(numero => numero%2 ===0),
        impares:nums.filter(numero => numero%2 !==0)
    }
}
console.log(pares([2,4,4,5,7,9,3]))