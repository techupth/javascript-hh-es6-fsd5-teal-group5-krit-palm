let height = undefined;
let result = (height) => {
  return height ?? "Height is not definded";
};

console.log(result(height)); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
