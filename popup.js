const services = document.querySelector('.services')
const popups = [...document.querySelectorAll('.servicesPopupWrap')]
const closeServicePopup = document.querySelector('.closeServicePopup')
const siteWrap = document.querySelector('.siteWrap')

const openServicePopup = (e) => {
    if (window.innerWidth > 768) {
    let targetClassList = [...e.target.classList]
    let matchingPopup = popups.find(popup => targetClassList.includes(popup.id))
    matchingPopup.classList.remove('displayNone')
    document.body.style.overflow = 'hidden'
    }
}

services.addEventListener('click', openServicePopup)


const closePopup = (e) => {
    let targetClassList = [...e.target.classList]
    if (targetClassList.includes('closeServicePopup')) {
        popups.forEach(e => {
            e.classList.add('displayNone')
        });
        document.body.style.overflow = 'auto'
    }
}

window.addEventListener('click', closePopup)
