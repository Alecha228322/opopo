const jamk = document.getElementById('opr')
const AAAAH = new Audio('zvuk.mp3')
const scrimer = document.getElementById('scrimer')
const fonch = document.getElementById('body')
function slozhen() {
    AAAAH.loop = true
    AAAAH.play()
    setInterval(() => {
        fonch.classList.add('fon')
        setTimeout(() => {
            fonch.classList.add('fonik')
            setTimeout(() => {
                fonch.classList.remove('fonik')
            }, 50);
        }, 50);
    }, 100);
}

jamk.addEventListener('click', slozhen)