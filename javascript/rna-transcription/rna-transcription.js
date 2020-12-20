//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//Github user: @yamilesquivel , Web : yamilesquivel.github.io


export const toRna = (dna) => {
  let rna = '';
  var nucleotides ={G:'C',C:'G',T:'A',A: 'U'}; //properties and values of dna to rna
  var reg =/\w/g;
  rna = dna.replace(reg, function(b){return nucleotides[b]}); //change each element from the "dna" calling the function(been)
  return rna;  //devuelvo rna reemplazado
};