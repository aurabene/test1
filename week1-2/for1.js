
/*
for (let i = 0; i<10; i++){
    console.log(`hi ${i}`)
}
*/


/*
var my_array = ["henrik", "karl", "johan"]

for (let i = 0; i < my_array.length; i++){
    console.log(`hi ${my_array[i]}`)
}


for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/


/*
const is_even = number => number % 2 ? true : false //en fknn
var my_array2 = [16, 17, 19, 23, 30, 2, 7]


for (let index = 0; index < my_array2.length; index++) {
    const element = my_array2[index];
    console.log(   
}
*/

/*
const ages = [21, 45, 43, 66, 12, 33, 22]

let sum_of_ages = 0

for (let i = 0; i < ages.length; i++) {
    sum_of_ages += ages[i]
}

const average_age = sum_of_ages / ages.length
const rounded_average_age = Math.floor(average_age)

console.log(`medelåldern är ${rounded_average_age} år`)
*/


myarray = [16, 15, 18, 20, 4, 22]
const voters = []
const non_voters = []

for (let i=0; i < myarray.length; i++) {
    const element = myarray[i]
    if (element < 18) {
        non_voters.push(element)
    } else {
        voters.push(element)
    }
}

console.log('voters', voters)
console.log('nonvoters', non_voters)

// console.log(myarray)
 