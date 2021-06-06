import gallery from './gallery-items.js';

const refs = {
    
    modalRef: document.querySelector('.lightbox'),
    jsGalleryRef: document.querySelector('.js-gallery'),
    modalImageRef: document.querySelector('.lightbox__image'),
    modalBtnRef: document.querySelector('.lightbox__button'),

};

const galleryMarkup = gallery.map(({ preview, original, description }, index) =>
    `
<li class = "gallery__item">
<a class = "gallery__link" href = " ">
<img class = "gallery__image" src = "${preview}" data-source = "${original}"
alt = "${description}" data-index = "${index}">
</a>
</li>
`).join('');

console.log(galleryMarkup);

refs.jsGalleryRef.innerHTML = galleryMarkup;

const openModalClick = element => {
    
    element.preventDefault();

    if (element.target.localName === 'img') {
        
        refs.modalImageRef.src = element.target.dataset.source;
        refs.modalImageRef.alt = element.target.alt;
        refs.modalImageRef.dataset.index = element.target.dataset.index;
        refs.modalRef.classList.add('is-open');
    }
};

const escClick = element => {
    
    if (element.key === 'Escape') {
        
        refs.modalRef.classList.remove('is-open')
    }
};

const closeModalClick = element  => {
    if (element.target.localName !== 'img') {
        refs.modalRef.classList.remove('is-open');

        refs.modalImageRef.src = '';
        refs.modalImageRef.alt = '';

    }

};

refs.jsGalleryRef.addEventListener('click', openModalClick);
window.addEventListener('click', closeModalClick);
window.addEventListener('keydown', escClick);





