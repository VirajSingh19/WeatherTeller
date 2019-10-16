import axios from 'axios';
export const FETCH_DATA = 'FETCH_DATA';

// const apiUrl = 'https://openweathermap.org/data/2.5/find?q=delhi&type=like&sort=population&cnt=30&appid=b6907d289e10d714a6e88b30761fae22';

export const fetchData = data => {
  return {
    type: FETCH_DATA,
    data,
  };
};

export const fetchQuery = (query) => {
  return (dispatch) => {
  const apiUrl = `https://openweathermap.org/data/2.5/find?q=${query}&type=like&sort=population&cnt=30&appid=b6907d289e10d714a6e88b30761fae22`;
    return axios.get(apiUrl)
      .then(response => {
        console.log("fetch res is ",response);
        dispatch(fetchData(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};
