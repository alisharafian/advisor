module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/creatuser-api',
     handler: 'creatuser-api.create',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'DELETE',
      path: '/creatuser-api',
      handler: 'creatuser-api.delete',
      config: {
        policies: [],
        middlewares: [],
      },
     } ,
     {
      method: 'PUT',
      path: '/creatuser-api',
      handler: 'creatuser-api.update',
      config: {
        policies: [],
        middlewares: [],
      },
     } , 
     {
      method: 'GET',
      path: '/creatuser-api',
      handler: 'creatuser-api.findone',
      config: {
        policies: [],
        middlewares: [],
      },
     } 
  ],
};
