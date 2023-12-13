const employee1 = {
  name: "John",
  age: 20,
};

console.log(employee1);

const result1 = employee1.scores?.english;

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores?.english || "English score is not defined";

console.log(result2);
