import express from "express"
import { Editframe } from "@editframe/editframe-js";
require("dotenv").config()
import path from "path"


const app = express();
const editframe = new Editframe({
  // Replace with your application's Client ID:
  clientId: process.env.EF_CLIENT_ID!,

  // Replace with your application's API Token:
  token: process.env.EF_API_TOKEN!,
});

(async () => {
  const composition = await editframe.videos.new(
    // options
    {
      // Hexadecimal color
      backgroundColor: "#FFFFFF",
  
      dimensions: {
        // Height in pixels
        height: 400,
  
        // Width in pixels
        width: 400,
      },
  
      // Duration in seconds
      duration: 60,
  
      // Arbitrary metadata for your convenience
      metadata: {
        myId: "1",
      },
    }
    // path.join(__dirname, "static/default.mp4")
    )
    await composition.addHtml({
      url: "https://docs.editframe.com",
      withTransparentBackground: false,
    })
    await composition.encode()
})()
  
app.use('/status', async (req, res) => {
  return res.send("up")
});

app.use('/webhook', async (req, res) => {
  console.log(req.body)
  return res.send()
})

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