import PropTypes from "prop-types";

/**
 * @param {string} kind 
 * @returns {string}
 */
export const kindPerformance = (kind) => {
  switch (kind) {
    case "energy":
      return "Energie";
    case "cardio":
      return "Cardio";
    case "intensity":
      return "Intensité";
    case "endurance":
      return "Endurance";
    case "strength":
      return "Force";
    case "speed":
      return "Vitesse";
    default:
      break;
  }
}

kindPerformance.PropTypes = {
  kind: PropTypes.string
}

export const WEEKDAY = ["L", "M", "M", "J", "V", "S", "D"]

/** 
 * @param {object} performances 
 * @returns {object}
 */
export const formatedPerformance = (performances) => {
  return performances.data.map((perf) => {
    return {
      ...perf,
      kindName: kindPerformance(performances.kind[`${perf.kind}`]),
    };
  });
}

formatedPerformance.PropTypes = {
  performances: PropTypes.object
};