const { name, version } = require("./package");
const path = require("path");

const watch = process.argv.includes("--watch");

module.exports = {
  watch,
  app: {
    name,
    version,
    fingerprint: `${name} v${version}`,
    icon: path.join(__dirname, "static/icon.ico")
  },
  server: {
    port: 4242,
    host: "localhost",
    path: path.join(__dirname, "public")
  }
};
