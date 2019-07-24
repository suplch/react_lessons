

// function createAddN(n) {
//
//     return function (m) {
//         return n + m
//     }
// }
//
//
// let add5 = createAddN(5)
// let add9 = createAddN(9)
//
//
// let result = add5(2)
//
//
// console.log(result)
//
// console.log(add9(5))


function addN(addFn, p1) {

    return function (p2) {
        return addFn(p1, p2);
    }
}

function add(a, b) {
    return a + b;
}


let ADD2 = addN(add, 2);

let result = ADD2(3);

console.log(result);
