const testServer = require('../testServer');
import * as ProductApi from '../../api/product_api';

jest.mock("../../api/product_api");
describe('Product routes', () => {
  describe('route - /api/items?search=iphone', () => {
    beforeEach(() => {
      ProductApi.getListProducts.mockImplementation(() => {});
    });
    const request = testServer();
    describe('GET - Items', (done) => {
      test('Should respond with status 200', () => {
        request.get('/api/items?search=iphone').expect(200, done);
      });
    });
  });
  describe('route - /api/items/MLA929073047', () => {
    beforeEach(() => {
      ProductApi.getProduct.mockImplementation(() => {});
    });
    const request = testServer();
    describe('GET - Items', (done) => {
      test('Should respond with status 200', () => {
        request.get('/api/items/MLA929073047').expect(200, done);
      });
    });
  });
});
