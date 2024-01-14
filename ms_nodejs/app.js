const express = require("express");
const http = require("http");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("OK");
});

app.get("/wait/:wait_time", (req, res) => {
  const waitTime = parseInt(req.params.wait_time, 10);
  setTimeout(() => {
    res.send(`Waited for ${waitTime} seconds.`);
  }, waitTime * 1000);
});

app.get("/call_and_wait/:namespace/:wait_time", (req, res) => {
  const namespace = req.params.namespace;
  const waitTime = parseInt(req.params.wait_time, 10);
  let externalServiceUrl;

  if (namespace.includes("_")) {
    const parts = namespace.split("_");
    const maybePort = parts.pop();
    const hostname = parts.join("_");

    if (!isNaN(parseInt(maybePort, 10))) {
      externalServiceUrl = `http://${hostname}:${maybePort}`;
    } else {
      externalServiceUrl = `http://${namespace}`;
    }
  } else {
    externalServiceUrl = `http://${namespace}`;
  }

  http
    .get(externalServiceUrl, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        setTimeout(() => {
          res.send(
            `Response from external service: ${data}, followed by a wait of ${waitTime} seconds.`
          );
        }, waitTime * 1000);
      });
    })
    .on("error", (error) => {
      console.error("Error during HTTP call:", error.message);
      res
        .status(500)
        .send(`Error calling the external service at ${namespace}`);
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
