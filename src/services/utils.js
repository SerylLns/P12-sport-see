

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

export const WEEKDAY = ["L", "M", "M", "J", "V", "S", "D"]

export const formatedPerformance = (performances) => {
  return performances.data.map((perf) => {
    return {
      ...perf,
      kindName: kindPerformance(performances.kind[`${perf.kind}`]),
    };
  });
}