module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/arena-api',
     handler: 'arena-api.create',
     config: {
       policies: [],
       middlewares: [],
     },
    }, 
       {
      method: 'PUT',
      path: '/arena-api',
      handler: 'arena-api.update',
      config: {
        policies: [],
        middlewares: [],
      },
     } ,
     {
      method: 'DELETE',
      path: '/arena-api',
      handler: 'arena-api.delete',
      config: {
        policies: [],
        middlewares: [],
      },
     } ,
     {
      method: 'GET',
      path: '/arena-api',
      handler: 'arena-api.findone',
      config: {
        policies: [],
        middlewares: [],
      },
     } ,
    //   {
    //   method: 'GET',
    //   path: '/arena-api',
    //   handler: 'arena-api.findone',
    //   config: {
    //     policies: [],
    //     middlewares: [],
    //   },
    //  } 
  ],
};
