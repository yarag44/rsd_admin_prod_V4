'use strict';

/**
 * residential-pay service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::residential-pay.residential-pay');
