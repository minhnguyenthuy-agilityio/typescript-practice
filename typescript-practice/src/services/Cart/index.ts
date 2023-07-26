import { API_PATH_URL } from '@/constants';
import { Cart } from '@/interfaces';
import { axiosInstance } from '@/services';

/**
 * Add new cart for new user
 * @param {object} data - Cart information
 *
 * @return {object} - Data of cart
 */
export const createNewCart = async (data: Cart): Promise<Cart> => {
  const res = await axiosInstance.post<Cart>(API_PATH_URL.CART_URL, data);

  return res.data;
};

/**
 * Get cart by userId
 * @param {number} userId
 *
 * @returns {object} - Data of cart by userId
 */
export const getCartByUserId = async (userId: string): Promise<Cart> => {
  const res = await axiosInstance.get<Cart>(
    `${API_PATH_URL.CART_URL}/${userId}`
  );

  return res.data;
};

/**
 * Update list product in cart of user
 * @param {number} userId - Id of user
 * @param {object} data - List product (productId, quantity)
 *
 * @return {object} data of cart
 */
export const updateCart = async (userId: string, data: Cart): Promise<Cart> => {
  const res = await axiosInstance.put<Cart>(
    `${API_PATH_URL.CART_URL}/${userId}`,
    data
  );

  return res.data;
};
