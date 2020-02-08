document.querySelectorAll('.hamburger-menu-toggle').forEach(element => {
    console.log(1);
    element.addEventListener('click', () => {
        document.querySelector('.hamburger-menu').toggleAttribute('show');
    })
});
// Timeout for animation to load and icons to load+
setTimeout(() => {
    window.addEventListener('scroll', () => {
        if (window.scrollY !== 0) {
            if (!document.querySelector('nav').hasAttribute('background')) {
                document.querySelector('nav').setAttribute('background', true);
            }
        } else {
            document.querySelector('nav').removeAttribute('background');
        }
    });
}, 500);
