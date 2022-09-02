import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data";

import { formatedPerformance, WEEKDAY } from "./utils";
const API_URL = process.env.REACT_APP_API_URL;
const useApi = process.env.REACT_APP_USE_API;

/**
 * @param {number} userId
 * @returns {object}
 * retrieves information from a user
 */
export const getUserById = async (userId) => {
  let user = null;
  if (useApi === "true") {
    await fetch(`${API_URL}user/${userId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        const score = data.todayScore ? data.todayScore : data.score;
        user = { ...data, score: score };
      })
      .catch((err) => {
        return new Error(err);
      });
    return user;
  } else {
    user = USER_MAIN_DATA.find((user) => user.id === parseInt(userId));
    const score = user.todayScore ? user.todayScore : user.score;
    user = {...user, score: score}
  }
  return user;
};

/**
 * @param {number} userId
 * @returns {object}
 * retrieves a user's activity day by day with kilograms and calories
 */
export const getUserActivity = async (userId) => {
  let userActivity = null;
  if (useApi === "true") {
    await fetch(`${API_URL}user/${userId}/activity`)
      .then((res) => res.json())
      .then((res) => {
        userActivity = res.data;
      })
      .catch((err) => {
        return new Error(err);
      });
  } else {
    userActivity = USER_ACTIVITY.find((user) => user.userId === userId);
  }
  const formatedData = userActivity.sessions.map((session) => {
    return { ...session, day: parseInt(session.day.split("-")[2]) };
  });
  return formatedData;
};

/**
 * @param {number} userId
 * @returns {object}
 *  retrieves the average sessions of a user per day. The week starts on Monday.
 */
export const getUserAverageSessions = async (userId) => {
  let userAverage = null;
  if (useApi === "true") {
    await fetch(`${API_URL}user/${userId}/average-sessions`)
      .then((res) => res.json())
      .then((res) => {
        userAverage = res.data.sessions;
      })
      .catch((err) => {
        return new Error(err);
      });
  } else {
    userAverage = USER_AVERAGE_SESSIONS.find(
      (user) => user.userId === parseInt(userId)
    ).sessions;
  }
  return userAverage.map((avg) => {
    return { ...avg, day: WEEKDAY[avg.day - 1] };
  });
};

/**
 * @param {number} userId
 * @returns {object}
 * retrieves a user's performance
 */
export const getUserPerformances = async (userId) => {
  let userPerformances = null;
  if (useApi === "true") {
    await fetch(`${API_URL}user/${userId}/performance`)
      .then((res) => res.json())
      .then((res) => {
        userPerformances = res.data
      });
  } else {
    userPerformances = USER_PERFORMANCE.find((user) => user.userId === parseInt(userId));
  }
  return formatedPerformance(userPerformances);
};
