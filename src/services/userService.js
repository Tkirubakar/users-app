// src/services/userService.js

/**
 * Fetches user data from the public users.json file
 * @returns {Promise<Array>} List of users
 */
export async function fetchUsers() {
  try {
    const response = await fetch('/users.json');

    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    return await response.json();
  } catch (error) {
    console.error('Error in fetchUsers:', error);
    throw error;
  }
}
