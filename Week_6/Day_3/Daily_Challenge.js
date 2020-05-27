let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

let groceries2 = groceries
groceries.totalPrice = "$35"
groceries2.totalPrice //changes to 35$ as well, because both variable names refer to same object -- or, rather, groceries and groceries2 refer to an address where this object is stored

groceries.other.payed = false
groceries2.other.payed //changes to 'false' as well because the nested object that we are changig is still the same for both variables as they refer to the same objects