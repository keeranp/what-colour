let dayInput = document.querySelector('#day')
let monthInput = document.querySelector('#month')
let yearInput = document.querySelector('#year')

let buttonCheck = document.querySelector('button')
let result = document.querySelector('#result')
let description = document.querySelector('#description')
let title = document.querySelector('h1')

let body = document.body

buttonCheck.addEventListener('click', ()=>{
    let day = dayInput.value
    let month = monthInput.value
    let year = yearInput.value

    if(moment(`${day}/${month}/${year}`, 'DD/MM/YYYY', true).isValid()){
        //Change date to colour
        day = day.split("").reverse().join("")
        month = month.split("").reverse().join("")
        year = year.substring(1,3).split("").reverse().join("")

        let colour = "#" + day + month + year

        //Set text color depending on brightness
        const brightness = Math.round(((parseInt(day) * 299) + (parseInt(month) * 587) + (parseInt(year) * 114)) / 1000)
        const textColour = (brightness > 125) ? 'black' : 'white';

        title.style.color = textColour
        result.style.color = textColour
        description.style.color = textColour

        //Set background-color and result
        body.style.backgroundColor = colour
        result.innerText = "You are " + colour
    }else{
        result.innerText = "The date is invalid"
    }
})