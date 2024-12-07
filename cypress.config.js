const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com', // Swag Labs base URL
    supportFile: 'cypress/support/index.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
