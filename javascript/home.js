let prevScrollY = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const nav = document.querySelector('nav');
    const a = document.querySelectorAll('a');
    console.log(currentScrollY);
    if (currentScrollY < prevScrollY) {
        nav.style.display = 'flex';
        nav.style.position = 'fixed';
        nav.style.backgroundColor = 'white';
        nav.style.opacity = '0.8'
        nav.style.color = 'black'
        a.forEach(e => {
            e.style.color = 'black'
        })

    }
    else {
        nav.style.display = 'flex';
        nav.style.position = '';
        nav.style.backgroundColor = '';
        nav.style.color = ''
    }
    prevScrollY = currentScrollY;

});
