import api from './setup';

// GET /
export const getAllBeers = async () => {
  try {
    const { data } = await api.get('/');

    return data;
  } catch (err) {
    throw Error(err);
  }
};

// GET /:id
// GET /random
export const getBeer = async (id = '') => {
  try {
    let data = undefined;
    if (!!id) {
      data = await api.get(`/${id}`);
    } else {
      data = await api.get(`/random`);
    }
    return data.data;
  } catch (err) {
    throw Error(err);
  }
};

// POST /new
export const addNewBeer = async (beer) => {
  try {
    const {
      name,
      tagline,
      description,
      brewers_tips,
      attenuation_level,
      image_url,
      contributed_by,
    } = beer;

    const { data } = await api.post('/new', {
      name,
      tagline,
      description,
      brewers_tips,
      attenuation_level,
      image_url,
      contributed_by,
    });

    return data;
  } catch (err) {
    throw Error(err.message);
  }
};

// GET /search?q= query
export const findBeer = async (query) => {
  try {
    const { data } = await api.get(`/search`, {
      params: { q: query },
    });
    
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
