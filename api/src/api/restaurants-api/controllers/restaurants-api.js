'use strict';
const Yup = require ('yup');
const { findone } = require('../../test/controllers/test');

/**
 * A set of functions called "actions" for `restaurants-api`
 */
let restaurantsScheam = Yup.object().shape({
  name : Yup.string()
  .required('please enter your name')
  .trim()
})


module.exports = {
  create : async (ctx , next) => {
    try {
      const x = ctx.request.body
      const {id} = ctx.request.query
      await restaurantsScheam.validate(ctx.request.body)
      await findone({id})
      if(findone){
        const error = new Error('resturants already haved wtf??')
        error.statuseCode = 400
        throw error
      } else {
        console.log(x)
        const data = await strapi.service('api::restaurants-api.restaurants-api').create(x)
        ctx.body = data
      }
    } catch (error) {
      return ctx.badRequest(error.message, error)
    }
  } ,
  delete : async (ctx , next) => {
    const x = ctx.request.query
    console.log(x)
    const data = await strapi.service('api::restaurants-api.restaurants-api').delete(x)
    ctx.body = data
  }
};
