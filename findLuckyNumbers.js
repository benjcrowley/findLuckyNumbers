// // Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. 
// // (That is, do not repeat any numbers in the returned list.)

// // You can trust that this function will never be called with n < 0 or n > 10.

// let n = 10
// console.log(n)
// function randomNumber(num){
//     let arr = []
//     for (let i = 0; i < num; i++){
//         x = Math.ceil((Math.random()*10))
//         if (arr.length === 0){
//             arr.push(x)
//         }else{
//         for (let j = 0; j < arr.length; j++){
//             if(x != arr[j]){
//                 arr.push(x)
//             }else i--
//         }
//         }
        
       
//         // for (let j = 0; j < arr.length; j++)
//         //     if(arr[j] === x){
//         //         arr.pop()
                
//         //     }
//     }
//     console.log(arr)
//     return arr

// }
// randomNumber(n)
// // console.log(randomNumber(n))


function luckyNumbers(n) {
    //make an answer array. i will declare an empty array
    let luckyNumbers = []
    //
    while (luckyNumbers.length < n) {
        let randNum = Math.ceil(Math.random() * 10)

        if (!luckyNumbers.includes(randNum)) {
            luckyNumbers.push(randNum)
        }

    }
}