'use strict';

/**
 * restaurants-api service
 */

module.exports = () => ({
    findone : async (data) => {
        const entry = await strapi.db.query('api::restaurant.restaurant').findOne({
            data : {id : data.id}
        })
        return entry
      } ,
    create : async (add) => {
        const entry = await strapi.db.query('api::restaurant.restaurant').create({
            data : {
                name:add.name ,
                // images:add.images ,
                // price:add.price
            }
        }) 
        return entry
    } ,
    delete : async (data) => {
        const entry = await strapi.db.query('api::restaurant.restaurant').delete({
            where : {id : data.id}
        });
        return entry
      } ,
    update : async (upd) => {
        const entry = await strapi.db.query('api::restaurant.restaurant').update({
            where : {
                id : upd.id
            }
        })
        return entry
    }
});