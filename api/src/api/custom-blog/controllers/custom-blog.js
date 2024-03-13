'use strict';

/**
 * A set of functions called "actions" for `custom-blog`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const data = await strapi.service('api::custom-blog.custom-blog').exampleAction(); //custom avali esme api ke sakhtim castom dovom esm servicei ke to poshe service
      ctx.body = data
    } catch (err) {
      ctx.body = err;
    }
  }
};
