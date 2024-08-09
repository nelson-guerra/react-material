import { api, httpErrorHandler } from './api';

export const productService = {
   getAllProducts: (params: { signal: AbortSignal }) =>
      api
         .get('/products', params)
         .then(response => response.data)
         .catch(httpErrorHandler),

   addProduct: <T>(params: T) =>
      api
         .post('/products', params)
         .then(response => response.data)
         .catch(httpErrorHandler),

   updateProduct: <T, U>(params: T, id: U) =>
      api
         .put(`/products/${id}`, params)
         .then(response => response.data)
         .catch(httpErrorHandler),

   deleteProduct: <T>(params: T) =>
      api
         .delete(`/products/${params}`)
         .then(response => response.data)
         .catch(httpErrorHandler),
};
