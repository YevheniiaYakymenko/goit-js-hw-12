import axios from 'axios';
const API_KEY = '43963855-b23ab28bc2f72f8207f09d24a';
const BASE_URL = 'https://pixabay.com/api/';
export const PER_PAGE = 15;
axios.defaults.baseURL = BASE_URL;

export const fetchPhotosByQuery = async (query, page = 1) => {
  try {
    const { data } = await axios.get('', {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: PER_PAGE,
        page,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
