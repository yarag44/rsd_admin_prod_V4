'use strict';

/**
 * resident-debt service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resident-debt.resident-debt');
