'use strict';

/**
 * resident service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resident.resident');
