'use strict';

/**
 * page-api service
 */

module.exports = () => ({
    create : async (add) => {
        const entry = await strapi.db.query('api::page.page').create({
            data: {
              title: add.title
            },
          });
          return entry
    } ,
    delete : async (del) => {
        const entry = await strapi.db.query('api::page.page').delete({
            data : {
                
            }
        })
    }
});
