import { Cart } from '@/interfaces';
import { cart, addItem, getItemById, updateItem } from '@/mock';

/**
 * Add new cart for new user
 * @param {object} data - Cart information
 *
 * @return {object} - Data of cart
 */
export const createCart = (data: Cart): Cart => {
  return addItem(cart, data);
};

/**
 * Get cart by userId
 * @param {number} userId
 *
 * @returns {object} - Data of cart by userId
 */

export const getCartByUserId = (userId: string): Cart | undefined => {
  return getItemById(cart, userId);
};

/**
 * Update list product in cart of user
 * @param {number} userId - Id of user
 * @param {object} data - List product (productId, quantity)
 *
 * @return {object} data of cart
 */
export const updateCart = (data: Cart): Cart | undefined => {
  return updateItem(cart, data);
};
