'use strict';

/**
 * reservation-pay service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reservation-pay.reservation-pay');
