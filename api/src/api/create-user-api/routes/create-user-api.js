module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/create-user-api',
      handler: 'create-user-api.create',
      config: {
        policies: [],
        middlewares: [],
      },
     },
      {
      method: 'DELETE',
      path: '/create-user-api',
      handler: 'create-user-api.delete',
      config: {
        policies: [],
        middlewares: [],
      },
     } ,
  ],
};
