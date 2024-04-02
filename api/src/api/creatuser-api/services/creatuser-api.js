'use strict';

/**
 * creatuser-api service
 */

module.exports = () => ({
    create: async (data) =>{
        const entry = await strapi.db.query('api::create-user.create-user').create({
            data : {
                username : data.username , email: data.email , password : data.password ,
                 confrimed:data.confrimed
            }
        })
        return entry
    } ,
    delete : async (data) => {
        const entry = await strapi.db.query('api::create-user.create-user').delete({
            where : {
                id : data.id
            }
        })
        return entry
    } ,
    update : async (data) => {
        const entry = await strapi.db.query('api::create-user.create-user').update({
            where : {
                id:data.id
            }
        })
        return entry
    } ,
    findone : async (data) => {
        const entry = await strapi.db.query('api::create-user.create-user').findOne({
            where : {username : data.username} , 
            populate : true
        })
        return entry
    }
});
