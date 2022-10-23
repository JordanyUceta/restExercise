    // 1. 

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }


const filterOutOdds = (...vals) => {
    return vals.filter ( num => {
        return num % 2 === 0; 
    })
}

//    2. 

const findMin = (...vals) => {
    return Math.min(...vals); 
}

//    3. 

const mergeObj = (first, second) =>  ({first, second}); 

//    4. 

const doubleNReturn = (arr, ...vals) => {
    return [...arr, ...vals.map(nums => {
        return nums * 2; 
    })]; 
}

//    5. 

const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length); 
    return [...items.slice(0, idx), ...items.slice(idx + 1)]; 
}

//    6. 

const extend = (array1, array2) => {
    return [...array1, ...array2]; 
}

//    7. 

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val; 
    return newObj; 
}

//    8. 

const removeKey = (obj, key) => {
    delete obj[key]; 
    return obj; 
}

//    9. 

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2}; 
}

//    10. 

const update = (obj, key, val) => {
    let newObj = { ...obj }; 
    newObj[key] = val; 
    return newObj; 
}