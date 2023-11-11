const hamburger = document.querySelector('[data-hamburger]');
let content = document.querySelector('[data-navmobile]')
const header = document.querySelector('header')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('clicked');

    if (hamburger.classList.contains('clicked')) {
        content.style.maxHeight = content.scrollHeight + "px";
        // header.classList.add('bg-black')
    } else {
        content.style.maxHeight = null;
        // if (window.scrollY < 50) {
            // header.classList.remove('bg-black')
        // }
    }
});

const handleMediaChange = () => {
    if (screen.width <= 1024) {
        hamburger.classList.remove('clicked');
        content.style.maxHeight = null;
    }
}

window.addEventListener('resize', handleMediaChange);


const subcollapseAll = document.querySelectorAll('[data-subcollapse]');

for (let i = 0; i < subcollapseAll.length; i++) {
    subcollapseAll[i].addEventListener("click", function () {
        content.style.maxHeight = 'fit-content';

        this.classList.toggle("clicked");
        let subcontent = this.nextElementSibling;

        if (subcontent.style.maxHeight) {
            subcontent.style.maxHeight = null;
        } else {
            subcontent.style.maxHeight = subcontent.scrollHeight + "px";
        }
    });
}


document.addEventListener('scroll', function () {
    if (hamburger.classList.contains('clicked')) return

    // if (window.scrollY > 10) {
    //     header.classList.add('bg-white')
    // } else {
    //     header.classList.remove('bg-white')
    // }
})


document.addEventListener('scroll', function () {
    const { scrollTop, scrollHeight } = document.documentElement

    const scrollPercent = scrollTop / (scrollHeight - window.innerHeight) * 100 + '%'

    document.querySelector('#progressBar').style.setProperty('--progress', scrollPercent)

})