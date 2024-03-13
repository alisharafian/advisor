'use strict';

/**
 * custom-blog service
 */

module.exports = () => ({
    exampleAction: async () => {
        const post = await strapi.db.query('api::place.place').findOne({
            // select: ['title', 'description'],
            where: { name: 'Guatemala' },
            populate: { restaurants: true },
          });

          return post;
      }
});
