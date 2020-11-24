const Twitter = require("twit");

const client = new Twitter({
    consumer_key: process.env.TWITTER_API_KEY,
    consumer_secret: process.env.TWITTER_API_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });

client.get("direct_messages/events/list")
  .then(response => {
	  console.log(JSON.stringify(response))
  })
  .catch(console.error)
