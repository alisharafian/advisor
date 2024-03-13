module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/test',
     handler: 'test.findone',
     config: {
       policies: [],
       middlewares: [],
     },
    },
    {
      method: 'POST',
      path: '/test',
      handler: 'test.create',
      config: {
        policies: [],
        middlewares: [],
      },
     },
     {
      method: 'PUT',
      path: '/test',
      handler: 'test.update',
      config: {
        policies: [],
        middlewares: [],
      },
     } ,
          {
      method: 'DELETE',
      path: '/test',
      handler: 'test.delete',
      config: {
        policies: [],
        middlewares: [],
      },
     } 
  ],
};