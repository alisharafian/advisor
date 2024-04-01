'use strict';

/**
 * create-user router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::create-user.create-user');
