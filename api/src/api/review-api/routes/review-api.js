module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/review-api',
     handler: 'review-api.create',
     config: {
       policies: [],
       middlewares: [],
     },
    }, {
      method: 'DELETE',
      path: '/review-api',
      handler: 'review-api.delete',
      config: {
        policies: [],
        middlewares: [],
      },
     } , {
      method: 'GET',
      path: '/review-api',
      handler: 'review-api.findMany',
      config: {
        policies: [],
        middlewares: [],
      },
     }  
  ],
};
