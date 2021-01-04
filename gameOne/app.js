const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector ('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare(){
    square.forEach(calssName => {
        calssName.classList.remove('mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    //asignar el di del randomPosition para usar mas tarde
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
        }
    })
})


function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()



function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime === 0){
        clearInterval(timerId)
        alert('GAMER OVER! Pntuacion total es ' + result)
    }
}

let timerId = setInterval(countDown, 1000)