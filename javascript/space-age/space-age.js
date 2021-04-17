//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//Github user: @yamilesquivel , Web : yamilesquivel.github.io



const planetFactor = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132
}

export const age = (planet, seconds) => {
  return +((seconds) / (planetFactor[planet] * (365.25 * 24 * 60 * 60))).toFixed(2)
};