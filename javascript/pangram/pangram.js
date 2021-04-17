
export const isPangram = (sentence) => {
  let unique = new Set(sentence.toLowerCase().split("").filter(char => char.match(/[a-z]/)))
  return unique.size === 26
};