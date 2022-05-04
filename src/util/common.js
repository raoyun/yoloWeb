import axios from 'axios'
axios.defaults.withCredentials=true;

//后端
const host = "http://localhost:7777/"

export const fileUrl = host

export const getRequest = function(path, data={}) {
  return axios.get(host + path, {
    params: data,
    withCredentials: true
  })
};

export const postRequest = function(path, data={}) {
  return axios.post(host + path, data)
};

export const putRequest = function(path, data={}) {
  data["withCredentials"] = true
  return axios.put(host + path, data)
};

export const deleteRequest = function(path, data={}) {
  data["withCredentials"] = true
  return axios.delete(host + path, data)
};

