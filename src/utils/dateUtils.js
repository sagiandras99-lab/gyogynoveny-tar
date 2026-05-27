export const monthNames = [
  'január',
  'február',
  'március',
  'április',
  'május',
  'június',
  'július',
  'augusztus',
  'szeptember',
  'október',
  'november',
  'december'
];

export function getCurrentMonthNumber() {
  return new Date().getMonth() + 1;
}

export function isHarvestableNow(plant) {
  const currentMonth = getCurrentMonthNumber();
  return plant.harvestMonths.includes(currentMonth);
}

export function getPlantsByMonth(plants, monthNumber) {
  return plants.filter((plant) => plant.harvestMonths.includes(monthNumber));
}
