# edit frame video test

Here is a rough outline of what I did:

1. Create editframe account
1. Create a basic express typescript application
1. Set up a ngrok tunnel to receive webhook events
1. Attempt to create a video with Editframe (Here I kept recieving a 500 internal server error so I stopped)

## Thoughts

Overall the API is clean, types seem pretty well done, some inline documentation would be nice though. I would also recommend creating a github repo with a basic "hello world" type of example so I wouldn't have to do all this work just to get a basic feel for the api.

Using webhooks to notify the user of when the video is done seems very strange, I don't know why you would want to do that, unless your rendering is slow. I can imagine that causing a ton of pain and slowdown for any application where the user is live-editing a video with the app using your API and they need instant feedback. Probably fine for one-off video generation but still pretty clunky. 

Potentially return two promises from `composition.encode()` - one that resolves quickly to the metadata containing the object, and another one that resolves after a while when the video is ready. Or add another method. But honestly the first thing I would try and do if I were seriously using your product is try and write an async wrapper of some sort around .encode(). 

Another option would be have the download, stream, thumbnail routes not respond until the video is ready or an error state is reached. This way you could just await a response client-side rather than trying to have the server trigger re-renders on the client when the video is ready, which isn't really part of the modern web stack happy path.

Also suggest incorporating some sort of downloader method into your API so that one wouldn't have to mess with node file/binary functions if they just want to serve a static file.

Overall, cool product doing something new. Props!