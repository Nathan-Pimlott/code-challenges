const moment = require("moment/moment");

function customMessage(occasion, name) {
  switch (occasion.toLowerCase()) {
    case "birthday":
      return `Happy Birthday, ${name}!`;
    default:
      return `Congratulations ${name}! Class of ${moment().format("YYYY")}`;
  }
}

module.exports = customMessage;
