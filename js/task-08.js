import gallery from './gallery-items.js';

const refs = {
    
    modalRef: document.querySelector('.lightbox'),
    jsGalleryRef: document.querySelector('.js-gallery'),
    modalImageRef: document.querySelector('.lightbox__image'),
    modalBtnRef: document.querySelector('.lightbox__button'),

};

const galleryMarkup = gallery.map(({ preview, original, description }, el) =>
    `
<li class = "gallery__item">
<a class = "gallery__link" href = " ">
<img class = "gallery__image" src = "${preview}" data-source = "${original}"
alt = "${description}" data-index = "${el}">
</a>
</li>
`).join('');

console.log(galleryMarkup);

refs.jsGalleryRef.innerHTML = galleryMarkup;



