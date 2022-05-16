const API_URL = "http://localhost:3000/";

/**
 * @param {number} userId
 * @returns {object}
 */
export const getUserById = async (userId) => {
  let user = null
  await fetch(`${API_URL}user/${userId}`)
    .then((res) => res.json())
    .then((res) => {
      user =  res.data;
    })
    .catch((err) => {
      return new Error(err);
    });
  return user
};


/**
 * @param {number} userId 
 * @returns {object}
 */
export const getUserActivity = async (userId) => {
  let userActivity = null;
  await fetch(`${API_URL}user/${userId}/activity`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      userActivity = res.data;
    })
    .catch((err) => {
      return new Error(err);
    });
  return userActivity;
};