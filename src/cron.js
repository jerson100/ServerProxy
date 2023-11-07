const { CronJob } = require("cron");
const https = require("https");

const job = new CronJob(
  "*/14 * * * *", // cronTime
  function () {
    https
      .get("https://serverproxy.onrender.com/https://www.google.com", (res) => {
        if (res.statusCode === 200) {
          console.log("Servidor reiniciado");
        } else {
          console.error("Error al reiniciar el servidor:", res.statusCode);
        }
      })
      .on("error", (err) => {
        console.error("Error durante el reinicio del servidor:", err.message);
      });
  }
);

module.exports = job;
