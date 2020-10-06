var array = [1,2,3,[4,5,[6,7]]];
function flat1(array) {
  return array.reduce((previous, current) => {
    return previous.concat(Array.isArray(current) ? flat1(current) : item);
  }, []);
}

console.log(flat1(array))