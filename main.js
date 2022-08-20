
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    })
})


const menue = document.querySelector('.nav_menue');
const menueBtn = document.querySelector('#open_menu_btn');
const closeBtn = document.querySelector('#close_menu_btn');


menueBtn.addEventListener('click' , () => {
    menue.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menueBtn.style.display = "none";
})

const closenav = () => {
    menue.style.display = "none";
    closeBtn.style.display = "none";
    menueBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click' , closenav)  

