import { API_PATH_URL } from '@/constants';
import { Product } from '@/interfaces';
import { axiosInstance } from '@/services';

/**
 * Fetch api products
 * @param pageNumber - Page number of list products
 * @param keyword - Key search product
 * @param sortBy - Sort list products by field
 * @param order - Sort list ascending or descending
 * @param limit - Limit how many items 1 page
 *
 * @returns {Promise<Product[]>} - List products
 */
export const getListProducts = async (
  pageNumber: number,
  limit: number,
  keyword?: string,
  sortBy?: string,
  order?: 'asc' | 'desc'
): Promise<Product[]> => {
  const res = await axiosInstance.get<Product[]>(API_PATH_URL.PRODUCTS_URL, {
    params: {
      _page: pageNumber,
      _limit: limit,
      name_like: keyword,
      _sort: sortBy,
      _order: order,
    },
  });

  return res.data;
};

/**
 * Get data product by productId
 * @param {number} productId - Id of product
 *
 * @returns {object} - Product
 */
export const getProductById = async (productId: number): Promise<Product> => {
  const res = await axiosInstance.get<Product>(
    `${API_PATH_URL.PRODUCTS_URL}/${productId}`
  );

  return res.data;
};
