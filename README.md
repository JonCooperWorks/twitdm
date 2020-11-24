# twitdm
`twitdm` is a Twitter DM client that we're building to learn NodeJS and React and avoid wasting time on the TL.
It will consist of an API written in NodeJS and a web application written in React.
Since Twitter doesn't allow third party apps to read user DMs, this will have to run on your Heroku account and will only pull your DMs.
It will require you to log in with your Twitter username and password to access your DMs.

## Features

### API
- [x] Pull DMs from Twitter's API
- [ ] Group DMs into conversation objects based on sender and recipient
- [ ] Protect API with authentication using Twitter's API
- [ ] Expose DMs via authenticated API Endpoint

### Web app frontend
- [ ] Allow a user to log in with Twitter
- [ ] Show a user their conversations
- [ ] Chat view that lets a user send messages
- [ ] Render images and links in the chat

## Setup Instructions
1. Install [NodeJS](https://nodejs.org/en/) and [npm](http://npmjs.com/) on your computer
1. Get your Twitter API credentials from [Twitter's developer site](https://developer.twitter.com/en).
Be sure to give the your credentials permissions to [Read, Write and Direct Message](https://developer.twitter.com/en/docs/apps/app-permissions).
1. Set your Twitter API credentials as the `TWITTER_API_KEY`, `TWITTER_API_SECRET`, `TWITTER_ACCESS_TOKEN` and `TWITTER_ACCESS_TOKEN_SECRET` environment variables.
You can do this on Windows with [this guide](https://www.computerhope.com/issues/ch000549.htm).
On Linux and Mac OS X, set them with the export command.

```
export TWITTER_API_KEY=(your key here)
export TWITTER_API_SECRET=(your api secret here)
export TWITTER_ACCESS_TOKEN=(your access token here)
export TWITTER_ACCESS_TOKEN_SECRET=(your access token secret here)
```

1. Install the dependencies by running `npm install` in a command line in the same directory as [index.js].
1. Run the program with `node index.js`.

## Contributors
[doomvslight](https://github.com/doomvslight)
  
