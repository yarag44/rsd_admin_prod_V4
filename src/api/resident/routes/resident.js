'use strict';

/**
 * resident router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::resident.resident');
