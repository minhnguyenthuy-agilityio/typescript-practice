import { Product, FieldOrder, DirectionOrder } from '@/interfaces';
import { products, getItemById } from '@/mock';

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
  sortBy?: FieldOrder,
  order?: DirectionOrder
): Promise<Product[]> => {
  let filteredProducts = [...products];

  if (keyword) {
    filteredProducts = filteredProducts.filter((product) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
  }

  if (sortBy) {
    filteredProducts.sort((a, b) =>
      order === 'asc'
        ? a[sortBy].toString().localeCompare(b[sortBy].toString())
        : b[sortBy].toString().localeCompare(a[sortBy].toString())
    );
  }

  const startIndex = (pageNumber - 1) * limit;
  const endIndex = startIndex + limit;
  const pagedProducts = filteredProducts.slice(startIndex, endIndex);

  await new Promise((resolve) => setTimeout(resolve, 500));

  return pagedProducts;
};

/**
 * Get data product by productId
 * @param {number} productId - Id of product
 *
 * @returns {object} - Product
 */
export const getProductById = (productId: number) => {
  return getItemById(products, productId);
};
