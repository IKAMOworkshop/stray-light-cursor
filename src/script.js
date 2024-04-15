import Experience from './Experience/Experience.js';

const experience = new Experience(document.querySelector('canvas.webgl'));

const cursor = document.getElementById('cursor')

const mousePos = {
    x: 0,
    y: 0
}

window.addEventListener('mousemove', (e) => {
    mousePos.x = e.clientX
    mousePos.y = e.clientY
    
    cursor.animate({
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`
    }, {duration: 100, fill: 'forwards'})
})