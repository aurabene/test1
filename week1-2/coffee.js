
let tot_sum_spent = 1000
let coffee_cost = 12

let has_discount = false
let breakpoint = 1000

let price = 0


if (has_discount) {
        
        price = price*0.9
        console.log("Du har rabatt")
} else {
    
    let difference_to_discount = breakpoint - tot_sum_spent
    const number_of_coffee_left = parseInt(difference_to_discount/12,10)+1

    console.log(`du har ${number_of_coffee_left} st kaffe kvar innan du får rabatt `)

    if (difference_to_discount <= 12) {
        has_discount = true
    }

}

