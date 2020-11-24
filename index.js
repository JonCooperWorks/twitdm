// require imports libraries and allows us to assign it to a constant or variable.
// This imports a Twitter class that we'll use to pull DMs from Twitter and send DMs using the Twitter API.
// It is best to use const with imports, since an import has no good reason to change.
// In general, use const unless you will need to change a value, like a counter.
const Twitter = require("twit");

// These are your Twitter API credentials.
// Twitter uses these to authenticate you, that is: ensure you are who you say you are.
// Without authentication, anyone would be able to read your DMs.
// This program loads them from the Operating System's environment variables,
// so we can share this source code without giving people access to our Twitter accounts.
// You can get these credentials for yourself by creating an account at https://developer.twitter.com
const TWITTER_API_KEY = process.env.TWITTER_API_KEY
const TWITTER_API_SECRET = process.env.TWITTER_API_SECRET
const TWITTER_ACCESS_TOKEN = process.env.TWITTER_ACCESS_TOKEN
const TWITTER_ACCESS_TOKEN_SECRET = process.env.TWITTER_ACCESS_TOKEN_SECRET

// This creates a client object that is an instance of the Twitter class we imported above.
// A class is a collection of data and behaviour that programmers use to model real-world concepts.
// In JavaScript, you create an object that is an instance of a class with the 'new' keyword.
// This client object manages all communication with Twitter.
const client = new Twitter({
    consumer_key: TWITTER_API_KEY,
    consumer_secret: TWITTER_API_SECRET,
    access_token: TWITTER_ACCESS_TOKEN,
    access_token_secret: TWITTER_ACCESS_TOKEN_SECRET
  });


// This uses the client object we created above to list all DMs in our account.
// It makes a HTTP request to Twitter's API.
client.get("direct_messages/events/list")
  .then(response => {
	  // If the HTTP request succeeds, log it to the console.
	  // TODO: group the messages in the response into conversations.
	  console.log(JSON.stringify(response))
  })
  .catch(console.error)
