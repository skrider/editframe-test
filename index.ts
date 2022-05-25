import express from "express"

const app = express();

app.use('/status', async (req, res) => {
  return res.send("up")
});

/*
 **
 ** Add new resources here
 **
 */

// console.info('...loaded resources.');

app.listen("3000", () => {
  console.info(
    'server/build/app.js: express.js server app is now running locally on port: ' +
      3000
  );
});