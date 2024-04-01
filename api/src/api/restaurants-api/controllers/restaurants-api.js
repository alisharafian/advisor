'use strict';



/**
 * A set of functions called "actions" for `restaurants-api`
 */

module.exports = {
  findone: async (ctx, next) => {
    try {
      const data = await strapi.service('api::restaurants-api.restaurants-api').findone(); 
      ctx.body = data
    } catch (err) {
      ctx.body = err;
    } 
  } ,
  create : async (ctx , next) => {
    const x = ctx.request.body
    console.log(x)
    const data = await strapi.service('api::restaurants-api.restaurants-api').create(x)
    ctx.body = data
  } ,
  delete : async (ctx , next) => {
    const x = ctx.request.query
    console.log(x)
    const data = await strapi.service('api::restaurants-api.restaurants-api').delete(x)
    ctx.body = data
  }
};
