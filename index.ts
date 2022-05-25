import express from "express"
import { Editframe } from "@editframe/editframe-js";



const app = express();
const editframe = new Editframe({
  // Replace with your application's Client ID:
  clientId: "nCp4RnJ1iTE6jlNqV5QgWk",

  // Replace with your application's API Token:
  token: "yQF5oIrV71ESjlNqV5QgWk",
});

const composition = await editframe.videos.new(
  // options
  {
    // Hexadecimal color
    backgroundColor: "#c400ac",

    dimensions: {
      // Height in pixels
      height: 1080,

      // Width in pixels
      width: 1920,
    },

    // Duration in seconds
    duration: 60,

    // Arbitrary metadata for your convenience
    metadata: {
      myId: "1",
    },
  },
  // videoFile
  "https://example.com/video.mp4"
);

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