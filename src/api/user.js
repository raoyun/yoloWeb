import {getRequest, postRequest} from "../util/common";

export const loginRequest = (userData) =>{
  return postRequest("/auth/login", userData)
};

export const registerRequest = (userData) => {
  return postRequest("/auth/register",userData)
};


