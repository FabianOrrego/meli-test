import * as ProductTransformer from '../../transformers/product_transformer';
import { productDetailResponse, itemsResponse, categoriesResponse, productDescriptionResponse } from '../mock/api_mercado_libre';
import { expectedDetailResult, expectedItemsResponse } from '../mock/expected_response';

describe('ProductTransformer', () => {
    describe('When setFormatProductsList function is called', () => {
        test('The response must correct', () => {
            const response = ProductTransformer.setFormatProductsList(itemsResponse);
            expect(response).toEqual(expectedItemsResponse);
          });
    });
    describe('When setFormatProductDetail function is called', () => {
        test('The response must correct', () => {
            const response = ProductTransformer.setFormatProductDetail([{data: productDetailResponse}, {data: productDescriptionResponse}], categoriesResponse.path_from_root);
            expect(response).toEqual(expectedDetailResult);
          });
    });
});