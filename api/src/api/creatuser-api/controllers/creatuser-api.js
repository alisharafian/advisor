'use strict';
const   Yup = require ('yup')
/**
 * A set of functions called "actions" for `creatuser-api`
 */
let schema = Yup.object().shape({
  username : Yup.string()
  .required('please enter your name')
  .min(6 , 'minimum is 6 charecter')
  .max(50 , 'maximum is 50 charecter') ,
  email : Yup.string().email('your email is worrng') ,
  password : Yup.string().required('enter your password')
  .min(6 ,'minimum is 5 charecter')
  .max(255 , 'maximum is 255 charecter')
})



module.exports = {
  create : async (ctx , next) => {
    try {
      await schema.validate(ctx.request.body)
      const {username , password , email} = ctx.request.body
      const user = await strapi.service('api::creatuser-api.creatuser-api').findone({username})
      if (user) {
        return ctx.badRequest('username are used')
      } else {
        const result = strapi.service('api::creatuser-api.creatuser-api').create({username , password , email})
        ctx.body = result
      }
    } catch (err) {
      ctx.body = err
    }
  } ,
  // create: async (ctx, next) => {
  //   try {
  //     const x = ctx.request.body
  //     console.log(x)
  //     await schema.validate(ctx.request.body)
  //     const result = await strapi.service('api::creatuser-api.creatuser-api').create(x)
  //     ctx.body = result
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // } ,
  delete : async (ctx , next)=> {
    try {
      const x = ctx.request.query
      console.log(x)
      const result = await strapi.service('api::creatuser-api.creatuser-api').delete(x)
      ctx.body = result
    } catch (err) {
      console.log(err)
    } 
  } ,
  update : async (ctx , next) => {
    try {
      const x = ctx.request.query
      console.log(x)
      const result = await strapi.service('api::creatuser-api.creatuser-api').update(x)
      ctx.body = result
    } catch (err) {
      console.log(err)
    }
  } ,
  findone : async (ctx , next) => {
    try {
      const x = ctx.request.query
      console.log(x)
      const result = await strapi.service('api::creatuser-api.creatuser-api').findone(x)
      ctx.body = result
    } catch (err) {
      ctx.body = err
    }
  }
};
