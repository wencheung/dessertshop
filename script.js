console.log("script is running!")

// emoji class is just to turn the 'active' on and off (gives box a shadow)

let emoji = document.querySelectorAll(".emoji")
// console.log(emoji)

emoji.forEach(event => {
    event.addEventListener("click", e => {
        event.classList.toggle("active")
    })
})

// calculate the price of each dessert

let dessert = document.querySelectorAll(".dessert")

function dessertPrice() {
    var dessertitem = [];
    dessert.forEach(dessertPicked => {
        if (dessertPicked.classList.contains("active")) {
            dessertitem.push(dessert)
            // console.log(dessertitem)
        }
    })
    return dessertitem.length
}

// calculate the price of each topping

let topping = document.querySelectorAll(".topping")

function toppingCount() {
    var toppingList = [];
    topping.forEach(toppingPicked => {
        if (toppingPicked.classList.contains("active")) {
            toppingList.push(topping)
        }
    })
    let toppingtotal = toppingList.length
    // let toppingprice = toppingtotal/2
    return toppingtotal
}

// pick the weather!

let weather = document.querySelectorAll(".weather")

function weatherReport() {
    var weatherList = [];
    weather.forEach(weatherSelected => {
        if (weatherSelected.classList.contains ("active")) {
            let pickID = weatherSelected.id
            weatherList.push(pickID)
            }
        })
    
    let pickID = weatherList[0]
    return pickID
}

    

// resultsbutton and results box is to console log the 'price' of the order

let resultsbutton = document.querySelector("#resultsbutton")
let results = document.querySelector("#results")
// console.log(resultsbutton)
// console.log(results)

resultsbutton.addEventListener("click", e => {
    let desserts = dessertPrice()
    let toppings = toppingCount()
    let total = desserts*5.50 + toppings/2
    let sky = weatherReport()
    results.classList.remove("hidden")
    results.innerHTML = `You've ordered ${desserts} dessert(s) and ${toppings} toppings. Your total is $${total}. Thank you for coming on this ${sky} day!`
})
