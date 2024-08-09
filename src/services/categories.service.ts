import { api, httpErrorHandler } from './api';

export const categoriesService = {
   getAllCategories: (params: { signal: AbortSignal }) =>
      api
         .get('/categories', params)
         .then(response => response.data)
         .catch(httpErrorHandler),
};
