'use strict';

/**
 * create-user controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::create-user.create-user');
