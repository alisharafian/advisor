module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/custom-blog',
     handler: 'custom-blog.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
