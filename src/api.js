// api.js
const API_URL = 'https://api.tvmaze.com/search/shows?q=all';

export const fetchShows = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
