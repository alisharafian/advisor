'use strict';
const Yup = require('yup')

let userSchema = Yup.object({
  content : Yup.string()
    .required('plase add a content')  ,
    rate : Yup.mixed().oneOf(
      ['1','2','3','4','5'] , 'please selece one of numbers')
});
/**
 * A set of functions called "actions" for `review-api`
 */

module.exports = {
  create: async (ctx, next) => {
    try {
      const x = ctx.request.body
      await userSchema.validate(ctx.request.body)
      console.log(x);
      const result = await strapi.service('api::review-api.review-api').create(x)
      ctx.body = result
    } catch (err) {
      // return ctx.badRequest(error.message, error)
        ctx.body= err
    }
  } ,
  delete : async(ctx , next) => {
    try {
      const x = ctx.request.query
      console.log(x);
      const result = await strapi.service('api::review-api.review-api').delete(x)
      ctx.body = result
    } catch (err) {
      ctx.body = err
    }
  } ,
  findMany : async(ctx , next) => {
    try {
      const x = ctx.request.query
      console.log(x)
      const result = await strapi.service('api::review-api.review-api').findMany(x)
      ctx.body = result
    } catch (err) {
      ctx.body = err
    }
  }
};
