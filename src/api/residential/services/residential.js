'use strict';

/**
 * residential service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::residential.residential');
