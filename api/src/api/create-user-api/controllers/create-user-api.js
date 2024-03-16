'use strict';
const Yup = require ('yup');
const userCreatService = require('../../create-user-api/services/create-user-api');

/**
 * A set of functions called "actions" for `create-user-api`
 */

let userSchema = Yup.object({
  EmailAddres : Yup.string()
    .required('please enter your email address')
    .min(5 , 'min type are 5')
    .max(25 , 'max type are 25') ,
    UserPassword : Yup.string()
    .required('please enter your password')
    .min(5 , 'min type are 5')
    .max(255 , 'max type are 255') ,
    Name : Yup.string()
    .required('please add your name')
    .trim() ,
    Family : Yup.string() 
    .required('please add your family')
    .trim()
});

module.exports = {
  create : async (ctx , next) => {
    try {
      const x = ctx.request.body
      const {EmailAddres} = ctx.request.body
      await userSchema.validate(ctx.request.body);
      await userCreatService.findOne({EmailAddres})
      if(userCreatService) {
        // const error = new Error ('user allready in data base')
        // error.statuseCode = 404
        // throw error
      } else {
        console.log(x)
        const data = await strapi.service('api::create-user-api.create-user-api').create(x)
        ctx.body = data
      }
    } catch (error) {
        return ctx.badRequest(error.message, error)
    }
  } ,
  delete : async (ctx , next) => {
    const x = ctx.request.query
    console.log(x)
    const data = await strapi.service('api::create-user-api.create-user-api').delete(x)
    ctx.body = data
  }
};
