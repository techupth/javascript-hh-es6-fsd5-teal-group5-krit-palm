let height = undefined;
let result;
function newValue(height){
    return height ?? "Height is not defined";
}

result = newValue(height);

console.log(result); //  Result ควรจะได้ออกมาเป็น “Height is not defined”
