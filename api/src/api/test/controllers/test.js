'use strict';

/**
 * A set of functions called "actions" for `test`
 */

module.exports = {
  findone: async (ctx, next) => {
    try {
      const data = await strapi.service('api::test.test').findone(); 
      ctx.body = data
    } catch (err) {
      ctx.body = err;
    }
  },
  create: async (ctx , next) => {
    const x = ctx.request.body;
    console.log(x);
    const result = await strapi.service('api::test.test').create(x)
    ctx.body =result;
  } ,
  delete : async (ctx , next) => {
    const x = ctx.request.query
    console.log(x)
    const result = await strapi.service('api::test.test').delete(x)
    ctx.body = result
  } ,
  update : async (ctx , next) => {
    const x = ctx.request.query
    console.log(x)
    const result = await strapi.service('api::test.test').update(x)
    ctx.body = result
  }
};
