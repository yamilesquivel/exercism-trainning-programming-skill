//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//Github user: @yamilesquivel , Web : yamilesquivel.github.io


export const decodedValue = (color) => {
 return COLORS.indexOf(color[0])*10+COLORS.indexOf(color[1]);


};


export const COLORS = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];