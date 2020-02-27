import * as API from '../helper/helper';
import { API_URL } from '../helper/constant';

export const sendOTP = ({ email }) =>
  API.postNormalized(`${API_URL}/user/send_otp`, { email });

export const signin = ({email, otp}) =>
  API.postNormalized(`${API_URL}/user/signin`, { email, otp});

export const updateUser = ({ first_name, last_name, referral_code }) =>
  API.postNormalized(`${API_URL}/user/update_user`, { first_name, last_name, referral_code });

export const getUser = () =>
  API.postNormalized(`${API_URL}/user/get_user`);

export const signout = () =>
  API.postNormalized(`${API_URL}/user/signout`);