function patient() {
  let PII = {
    name: "Bryan",
    ssn: "123-45-6789"
  };

  return {
    getName: function () {
      return PII.name;
    }
  };
}

const patient2 = patient();

console.log(patient2.name);
console.log(patient2.ssn);
console.log(patient2.getName());