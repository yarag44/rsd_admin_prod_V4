'use strict';

/**
 * cat-currency service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cat-currency.cat-currency');
