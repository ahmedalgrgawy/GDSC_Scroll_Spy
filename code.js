const nav = document.querySelector('nav');
const header = document.querySelector('header');
const links = document.querySelectorAll('header nav a')
const sections = document.querySelectorAll('section');




document.onscroll = () => {

    if (window.scrollY > 0) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }

    sections.forEach(section => {
        let top = window.scrollY,
            sectionOffSet = section.offsetTop - 70,
            sectionHeight = section.offsetHeight,
            sectionId = section.getAttribute('id');

        if (top >= sectionOffSet && top < sectionOffSet + sectionHeight) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('nav a[href*=' + sectionId + ']').classList.add('active');
            })
        }
    })


}




