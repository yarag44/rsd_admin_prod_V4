'use strict';

/**
 * resident-pay service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::resident-pay.resident-pay');
