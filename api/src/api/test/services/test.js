'use strict';

/**
 * test service
 */

module.exports = () => ({
    findone: async () => {
        const post = await strapi.db.query('api::category.category').findOne({
            // select: ['title', 'description'],
            where: { name: 'American' },
            //populate: { restaurants: true },
          });

          return post;
      },

    create : async (data) => {
        const entry = await strapi.db.query('api::article.article').create({
            data: {
              title: data.title,
            },
          });

          return entry
      } ,
    delete : async (data) => {
        const entry = await strapi.db.query('api::article.article').delete({
            where : {id : data.id}
        });
        return entry
      } ,
    update : async (data) => {
        const entry = await strapi.db.query('api::article.article').update({
            where: { id: data.id },
            data: {
              title: data.title,
            } ,
          });
          return entry
      } ,

});
