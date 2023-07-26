import { API_PATH_URL } from '@/constants';
import { User, UserWithPassword } from '@/interfaces';
import { axiosInstance } from '@/services';

/**
 * Get data of user by userId
 * @param {string} id - I of the user
 *
 * @returns {Promise<User>} - User object
 */
export const getUserById = async (id: string): Promise<User> => {
  const res = await axiosInstance.get<User>(`${API_PATH_URL.USERS_URL}/${id}`);

  return res.data;
};

/**
 * Get data of user by email
 * Each email can only be registered for 1 user, so when the request returns an array, we only need to get the first object
 * @param {string} email - Email address of the user
 *
 * @returns {Promise<User>} - User object
 */
export const getUserByEmail = async (email: string): Promise<UserWithPassword> => {
  const res = await axiosInstance.get<UserWithPassword[]>(
    `${API_PATH_URL.USERS_URL}?email=${email}`
  );

  return res.data[0];
};

/**
 * Add new user
 * @param {User} data - User's information (name, email, password)
 *
 * @returns {Promise<User>} - User object
 */
export const createUser = async (data: User): Promise<User> => {
  const res = await axiosInstance.post<User>(API_PATH_URL.USERS_URL, data);

  return res.data;
};
