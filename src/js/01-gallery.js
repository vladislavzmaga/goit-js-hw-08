// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');

console.log(galleryItems);
function createGalleryEl(items) {
  return items
    .map(item => {
      return `
    <a class = "gallery__item" href=${item.original}>
    <img class ="gallery__image" src = ${item.preview} alt =${item.description} data-source=${item.original}
    />
    </a>
    `;
    })
    .join('');
}

galleryListEl.innerHTML = createGalleryEl(galleryItems);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
