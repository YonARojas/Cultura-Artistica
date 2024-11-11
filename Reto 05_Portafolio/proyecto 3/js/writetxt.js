const paragraphOds = document.getElementById('paragraph-ods');
const paragraphContent = paragraphOds.innerHTML;
paragraphOds.innerHTML = '';

let index = 0;
let scrollTriggered = false;

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const elementPosition = paragraphOds.offsetTop;

    if (scrollPosition >= elementPosition && !scrollTriggered) {
        scrollTriggered = true;
        writeText();
    }
});

function writeText() {
    if (index < paragraphContent.length) {
        paragraphOds.innerHTML += paragraphContent.charAt(index);
        paragraphOds.style.opacity = 1;
        index++;
        setTimeout(writeText, 50);
    }
}
