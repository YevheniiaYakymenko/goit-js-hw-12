import { fetchPhotosByQuery, PER_PAGE } from './js/pixabay-api';
import { createGalleryItemMarkup } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const searchFormEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery-list');
const loaderEl = document.querySelector('.loader');
const loadMoreEl = document.querySelector('.btn-load');
let query = '';
let currentPage = 1;
let totalPages = 0;
let lightbox;

async function renderPhotos(searchQuery, page) {
  try {
    const imagesData = await fetchPhotosByQuery(searchQuery, page);
    if (imagesData.hits.length === 0) {
      iziToast.show({
        title: 'Error',
        color: 'red',
        message: 'Sorry, there was an error fetching images. Please try again!',
      });
      loadMoreEl.classList.add('is-hidden');
    } else {
      const markup = createGalleryItemMarkup(imagesData.hits);
      galleryEl.insertAdjacentHTML('beforeend', markup);
      if (lightbox) {
        lightbox.refresh();
      } else {
        lightbox = new SimpleLightbox('.gallery-list a', {
          captionsData: 'alt',
          captionPosition: 'bottom',
          captionDelay: 250,
          className: 'my-custom-lightbox',
        });
      }

      totalPages = Math.ceil(imagesData.totalHits / PER_PAGE);

      if (totalPages > currentPage) {
        loadMoreEl.classList.remove('is-hidden');
      } else {
        loadMoreEl.classList.add('is-hidden');
        iziToast.show({
          title: 'Info',
          color: 'green',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    }
  } catch (error) {
    iziToast.show({
      title: 'Error',
      color: 'red',
      message: 'Sorry, there was an error fetching images. Please try again!',
    });
    loadMoreEl.classList.add('is-hidden');
  } finally {
    loaderEl.classList.add('is-hidden');
  }
}

const smoothScrollOnLoadMore = () => {
  const galleryItems = document.querySelectorAll('.gallery-list li');
  if (galleryItems.length > 0) {
    const lastPhotoEl = galleryItems[galleryItems.length - 1];
    const photoHeight = lastPhotoEl.getBoundingClientRect().height;
    const paraPhotoHeight = photoHeight * 2;
    window.scrollBy({
      top: paraPhotoHeight,
      left: 0,
      behavior: 'smooth',
    });
  }
};

async function onSearchFormSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.querySelector('.form-input').value.trim();
  if (searchQuery === '') {
    iziToast.show({
      title: 'Error',
      color: 'red',
      message: 'Field is empty. Please write your query!',
    });
    return;
  }
  galleryEl.innerHTML = '';
  query = searchQuery;
  currentPage = 1;
  loaderEl.classList.remove('is-hidden');
  loadMoreEl.classList.add('is-hidden');
  await renderPhotos(query, currentPage);
  event.target.reset();
}

async function onLoadMoreClick() {
  currentPage += 1;
  loaderEl.classList.remove('is-hidden');
  await renderPhotos(query, currentPage);
  smoothScrollOnLoadMore();
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);
loadMoreEl.addEventListener('click', onLoadMoreClick);
