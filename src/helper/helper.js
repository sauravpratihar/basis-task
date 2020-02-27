import axios from 'axios';

export const postNormalized = (url, data) => {
  const token = `Bearer ${window.localStorage.getItem('token')}` || "";
    return axios({
      method: 'post',
      data,
      url,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization : token,
        token: window.localStorage.getItem('token')
      }
    })
    .then(res => res.data)
    .catch(err=> {
      if(err.response.status === 403){
        window.location.href = "/sign_in"
      }
      console.log('e', err.response)
      alert(err.response.data.message)
      return err
    });
};

export const getUrlParameter = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  let results = regex.exec(window.location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};