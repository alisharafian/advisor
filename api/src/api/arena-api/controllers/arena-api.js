'use strict';
const Yup = require('yup')
/**
 * A set of functions called "actions" for `arena-api`
 */

let schema = Yup.object().shape({
  name : Yup.string().required('please enter arena name')
})

module.exports = {
  // create: async (ctx, next) => {
  //   try {
  //     await schema.validate(ctx.request.body)
  //     const {name , pic}=ctx.request.body
  //     console.log(ctx.request.body);
  //     const find = strapi.service('api::arena-api.arena-api').findone({name})
  //       if(find){
  //           // return ctx.badRequest('arena already have')
  //          ctx.body = err
  //       } else {
  //         console.log("moti2");
  //         const result = strapi.service('api::arena-api.arena-api').create({name , pic})
  //         ctx.body = result
  //       }
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // } ,
  create : async (ctx ,next) => {
    try {
      await schema.validate(ctx.request.body)
      const x = ctx.request.body
      const result = await strapi.service('api::arena-api.arena-api').create(x)
      ctx.body = result
    } catch (err) {
      ctx.body = err
    }
  } ,
  update :async (ctx , next) =>{
    try {
      const x = ctx.request.body
      console.log(x)
      const result = strapi.service('api::arena-api.arena-api').update(x)
      ctx.body = result
    } catch (err) {
      ctx.body = err;
    }
  } ,
  delete : async (ctx , next) => {
    try {
      const x = ctx.request.query
      console.log(x)
      const result = strapi.service('api::arena-api.arena-api').delete(x)
      ctx.body = result
    } catch (err) {
      console.log(err);
    }
  } ,
  findone : async (ctx , next) => {
    try {
      const user = ctx.request.query
      console.log(user)
      const result = await strapi.service('api::arena-api.arena-api').findone(user)
      ctx.body = result
    } catch (err) {
      ctx.body = err
    }
  }
};
