'use strict';


/**
 * arena-api service
 */

module.exports = () => ({
    create : async (add) => {
        const entry = strapi.db.query('api::arena.arena').create({
            data:{
                name:add.name , date:add.data , pic:add.pic
            }
        })
        return entry
    } ,
    update : async (up) => {
        const entry = strapi.db.query('api::arena.arena').update({
            where : {id : up.id}
        })
        return entry
    } ,
    delete : async (del) => {
        const entry = strapi.db.query ('api::arena.arena').delete({
            where : {id : del.id}
        })
        return entry
    } ,
    findone : async (data) => {
        const entry = strapi.db.query('api::arena.arena').findOne({
            where : {
                id:data.id
            }
        })
        return entry
    } ,
    // findone : async (data) => {
    //     const entry = strapi.db.query('api::arena.arena').findOne({
    //         where : {
    //             name:data.name
    //         }
    //     })
    //     return entry
    // }
});
