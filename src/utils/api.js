import axios from 'axios'
const host =
  import.meta.env.VITE_BASE_URL
const baseUrl = `${host}/api/v1/`

const authToken = localStorage.getItem('auth_token')

import {
  useAuthStore
} from '../stores/auth'

// // @ts-ignore
// axios.interceptors.request.use(() => {
//   const authStore = useAuthStore()

//   // @ts-ignore
//   console.log("Auth store Value", authStore)
//   // request.headers.Authorization = authStore.token
//   // console.log('Adding token to header', authStore.token)
// })

const api = axios.create({
  baseURL: baseUrl, // Menggunakan environment variable sebagai baseURL
});

// Contoh penggunaan interceptors untuk request
api.interceptors.request.use(
  (config) => {
    const authStore = useAuthStore()

    config.headers.Authorization = `Bearer ${authStore.getIsAuth}`

    // Lakukan sesuatu sebelum request dikirim
    return config;
  },
  (error) => {
    // Tangani kesalahan yang terkait dengan request
    return Promise.reject(error);
  }
);

// Contoh penggunaan interceptors untuk response
api.interceptors.response.use(
  (response) => {
    // Lakukan sesuatu terhadap response yang diterima
    return response;
  },
  (error) => {
    // Tangani kesalahan yang terkait dengan response
    return Promise.reject(error);
  }
);

class Api {
  host = baseUrl

  async doGet(url, params) {

    return await api
      .get(baseUrl + url, {
        headers: {
          Authorization: `Bearer ${authToken}`
        },
        params
      })
      .then((res) => res.data)
      .catch((err) => err);
  }

  async doPost(url, params) {
    return await api
      .post(baseUrl + url, params, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error;
      });
  }


  async doPut(url, params) {
    return await api
      .put(baseUrl + url, params, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doDelete(url, params) {
    return await api
      .delete(PREFIX + url, params, {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doGetBlob(url, params) {
    return await api
      .post(baseUrl + url, params, {
        responseType: 'blob'
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }

  async doPostMultipart(url, params) {
    return await api
      .post(baseUrl + url, params, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => res.data)
      .catch((error) => {
        throw error
      })
  }
}


export default new Api()