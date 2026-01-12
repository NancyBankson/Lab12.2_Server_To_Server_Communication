const axios = require('axios');

const apiClient = axios.create({
  baseURL: 'https://uselessfacts.jsph.pl/api/v2/facts/random'
});