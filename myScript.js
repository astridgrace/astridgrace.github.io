onmouseover="document.getElementById('time')"
const days = document.querySelectorAll('.day')
const rows = document.querySelectorAll('tr')
const colums = document.querySelectorAll('td')

function highlightmon(){
    let i = 1
    while(i<=11){
        rows[i].classList.toggle('mon')
        i++
    }
}
function highlighttue(){
    let i = 1
    while(i<=11){
        rows[i].classList.toggle('tue')
        i++
    }
}
function highlightwed(){
    let i = 1
    while(i<=11){
        rows[i].classList.toggle('wed')
        i++
    }
}
function highlightthu(){
    let i = 1
    while(i<=11){
        rows[i].classList.toggle('thu')
        i++
    }
}
function highlightfri(){
    let i = 1
    while(i<=11){
        rows[i].classList.toggle('fri')
        i++
    }
}
function highlightsat(){
    let i = 1
    while(i<=11){
        rows[i].classList.toggle('sat')
        i++
    }
}
function highlightsun(){
    let i = 1
    while(i<=11){
        rows[i].classList.toggle('sun')
        i++
    }
}
