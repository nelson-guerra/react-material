import axios from 'axios';

export const api = axios.create({
   baseURL: 'https://api.escuelajs.co/api/v1',
   headers: { Accept: 'application/json' },
});
/*
Api.interceptors.request.use(
   (config: any) => {
      config.headers.user = 'userdemo'
      config.headers.pwd = 'Inn0v4$$ion.2022'
      config.headers.key = process.env.REACT_APP_API_KEY

      return config
   },
   (err: any) => Promise.reject(err)
)*/

export const httpErrorHandler = (error: Error) => {
   if (error === null) throw new Error('Unrecoverable error!! Error is null!');

   if (axios.isAxiosError(error)) {
      //here we have a type guard check, error inside this if will be treated as AxiosError
      const response = error?.response;
      const request = error?.request;
      //const message = error?.message;
      //const config = error?.config //here we have access the config used to make the api call (we can make a retry using this conf)

      if (error.code === 'ERR_NETWORK') {
         console.log('connection problems..');
      } else if (error.code === 'ERR_CANCELED') {
         console.log('connection canceled..');
      }

      if (response) {
         //The request was made and the server responded with a status code that falls out of the range of 2xx the http status code mentioned above
         return response.data.message;
      } else if (request) {
         //The request was made but no response was received, `error.request` is an instance of XMLHttpRequest in the browser and an instance of http.ClientRequest in Node.js
      }
   } else {
      console.log(error.message);
   }
   //Something happened in setting up the request and triggered an Error
};
