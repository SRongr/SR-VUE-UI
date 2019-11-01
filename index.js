if (process.env.NODE_ENV === "production") {
  const install = require("./src/components/index.js");
  module.exports = install;
} else {
  module.exports = require("./src/main.js");
}
