import axios from 'axios';

export default axios.create({
  baseURL: 'https://imdb8.p.rapidapi.com/title',
  headers: {
    "x-rapidapi-key": "179055a260msh5b685b581363fdep17dbb4jsn55c72ae6dc44",
    "x-rapidapi-host": "imdb8.p.rapidapi.com",
    "useQueryString": true
  }
});
