//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const gigasecond = (date) => {//take a date
  return new Date(date.getTime() + 10**12); //return a time plus a gigasecond
};

