const fetch         = require('node-fetch');
const APP_ID        = process.env.APP_ID;

let UnsplashAPI = {};

UnsplashAPI.getBackground = () => {
  return fetch(`https://api.unsplash.com/photos/random/?client_id=${APP_ID}&featured=true&q=outdoors`);
};

module.exports = UnsplashAPI;