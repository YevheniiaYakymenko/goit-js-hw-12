export function createGalleryItemMarkup(images) {
  return images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
              <img class="gallery-img" src="${webformatURL}" alt="${tags}" />
            </a>
            <div class="small-info">
               <div class="small-info-item">
                 <Likes: class="info-title">Likes:</span>
                 <span class="info">${likes}</span>
               </div>
               <div class="small-info-item">
                 <span class="info-title">Views:</span>
                 <span class="info"> ${views}</span>
               </div>
               <div class="small-info-item">
                 <span class="info-title">Comments:</span>
                 <span class="info">${comments}</span>
               </div>
               <div class="small-info-item">
                 <span class="info-title">Downloads:</span>
                 <span class="info">${downloads}</span>    
               </div>
            </div>
          </li>`;
      }
    )
    .join('');
}
