
exports.min = function min (array = 0) {
  return (array != 0) 
    ? array.sort((a,b)=>{return a - b}).shift()
    : 0
}

exports.max = function max (array = 0) {
  return (array != 0) 
    ? array.sort((a,b)=>{return a - b}).pop()
    : 0
}

exports.avg = function avg (array = 0) {
  return (array != 0) 
    ? array.reduce((acc, curr) => acc + curr) / array.length
    : 0
}
