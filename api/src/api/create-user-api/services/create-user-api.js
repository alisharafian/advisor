'use strict';


/**
 * create-user-api service
 */

module.exports = () => ({
    create : async (add) => {
        const entry = await strapi.db.query('api::create-user.create-user').create({
            data : {
                EmailAddres:add.EmailAddres , UserPassword:add.UserPassword , Name : add.Name ,
                Family : add.Family
            }
        }) 
        return entry
    } ,
    delete : async (data) => {
        const entry = await strapi.db.query('api::create-user.create-user').delete({
            where : {id : data.id}
        });
        return entry
      } ,
      findone : async (data) => {
        const entry = await strapi.db.query('api::create-user.create-user').findOne({
            data : {EmailAddres : data.EmailAddres}
        })
        return entry
      }
});
