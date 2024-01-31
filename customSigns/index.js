function buildSign(occasion, name) {
  switch (occasion.toLowerCase()) {
    case "birthday":
      return `Happy Birthday, ${name}!`;
    default:
      return `Sorry, not sure what to do with this, ${name}`;
  }
}

function buildBirthdaySign(age) {
  if (isNaN(parseInt(age)) || age < 0) {
    return "No birthday message for you...";
  }
  return `Happy Birthday! What a ${
    age >= 50 ? "mature" : "young"
  } fellow you are.`;
}

module.exports = { buildSign, buildBirthdaySign };
