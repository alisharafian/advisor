module.exports = {
  routes: [
      {
      method: 'POST',
      path: '/api-restaurants',
      handler: 'restaurants-api.create',
      config: {
        policies: [],
        middlewares: [],
      },
     } , 
     {
      method: 'DELETE',
      path: '/api-restaurants',
      handler: 'restaurants-api.delete',
      config: {
        policies: [],
        middlewares: [],
      },
     }
  ],
};
