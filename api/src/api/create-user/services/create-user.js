'use strict';

/**
 * create-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::create-user.create-user');
