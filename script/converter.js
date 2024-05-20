let celciusInput = document.querySelector('#celcius > input')
let fahrenheitInput = document.querySelector('#fahrenheit >input')

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input', function(){
    let tempC = parseFloat(celciusInput.value)
    let tempF = (tempC*(9/5)) +32

    fahrenheitInput.value = roundNumber(tempF)
    
})
fahrenheitInput.addEventListener('input', function(){
    let tempF = parseFloat(fahrenheitInput.value)
    let tempC = (tempF -32)*(5/9)

    celciusInput.value = roundNumber(tempC)

})

btn.addEventListener('click', ()=>{
    celciusInput.value = "",
    fahrenheitInput.value = ""
})
