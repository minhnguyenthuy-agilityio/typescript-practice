import { User } from '@/interfaces';
import { users, addItem, getItemById } from '@/mock';

interface Users extends User {
  password: string;
}

/**
 * Get data of user by userId
 * @param {string} id - I of the user
 *
 * @returns {Promise<User>} - User object
 */
export const getUserById = (id: string) => {
  return getItemById(users, id);
};

/**
 * Get data of user by email
 * Each email can only be registered for 1 user, so when the request returns an array, we only need to get the first object
 * @param {string} email - Email address of the user
 *
 * @returns {Promise<User>} - User object
 */
export const findUserByEmail = (email: string): Users | undefined => {
  return users.find((user) => user.email === email);
};

/**
 * Add new user
 * @param {User} data - User's information (name, email, password)
 *
 * @returns {Promise<User>} - User object
 */
export const addUser = (data: User): User => {
  return addItem(users, data);
};
