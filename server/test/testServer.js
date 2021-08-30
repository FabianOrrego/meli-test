const express = require('express');
const supertest = require('supertest');

function testServer() {
  const app = express();
  return supertest(app);
}

module.exports = testServer;