'use strict';



/**
 * review-api service
 */

module.exports = () => ({
    create : async (add) => {
        const entry = await strapi.db.query('api::user-review.user-review').create({
            data : {
                content : add.content , rate : add.rate
            }         
        })
        return entry
    } ,
    delete : async (data) => {
        const entry = await strapi.db.query('api::user-review.user-review').delete({
            where : {
                id:data.id
            }
        })
        return entry
    } ,
    findMany : async (data) => {
        const entry = await strapi.db.query('api::user-review.user-review').findMany({
            populate : {confirm : true}
        })
        return entry
    } ,

});
