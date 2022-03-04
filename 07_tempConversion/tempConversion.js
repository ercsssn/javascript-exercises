const ftoc = function(ftemp) {
  return parseFloat(((ftemp - 32)/1.8).toFixed(1));
};

const ctof = function(ctemp) {
  return parseFloat((ctemp * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
