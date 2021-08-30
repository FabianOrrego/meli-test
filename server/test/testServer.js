const express = require('express');
const supertest = require('supertest');

/**
 * 
 * @returns Test Server
 */
function testServer() {
  const app = express();
  return supertest(app);
}

module.exports = testServer;