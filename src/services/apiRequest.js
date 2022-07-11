import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data";

import { kindPerformance, WEEKDAY } from "./utils";
const API_URL = process.env.REACT_APP_API_URL;
const useApi = process.env.REACT_APP_USE_API;

/**
 * @param {number} userId
 * @returns {object}
 */
export const getUserById = async (userId) => {
  let user = null;
  if (useApi === "true") {
    await fetch(`${API_URL}user/${userId}`)
      .then((res) => res.json())
      .then((res) => {
        user = res.data;
      })
      .catch((err) => {
        return new Error(err);
      });
    return user;
  } else {
    user = USER_MAIN_DATA.find((user) => user.id == userId);
    return user;
  }
};

/**
 * @param {number} userId
 * @returns {object}
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
    userActivity = USER_ACTIVITY.find((user) => (user.userId == userId));
  }
  const formatedData = userActivity.sessions.map((session) => {
    return { ...session, day: parseInt(session.day.split("-")[2]) };
  });
  return formatedData;
};

/**
 * @param {number} userId
 * @returns {object}
 */
export const getUserAverageSessions = async (userId) => {
  let userAverage = null;
  userAverage = USER_AVERAGE_SESSIONS.find((user) => (user.userId == userId)).sessions;
  return userAverage.map((avg) => { return { ...avg, day: WEEKDAY[avg.day - 1] }} );
};

/**
 * @param {number} userId
 * @returns {object}
 */
export const getUserPerformances = async (userId) => {
  let userPerformances = null;
  userPerformances = USER_PERFORMANCE.find((user) => (user.userId == userId));
  const formatedPerformances = userPerformances.data.map((perf) => {
    return {
      ...perf,
      kindName: kindPerformance(userPerformances.kind[`${perf.kind}`]),
    };
  });
  return formatedPerformances;
};
