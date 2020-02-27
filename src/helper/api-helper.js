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
    }).then(res => res.data).catch(err=> {
      if(err.response.status === 403){
        window.location.href = "/sign_in"
      }
      console.log('e', err.response)
    });
};