# Amazon Alexa Skill

This is a simple Alexa skill called Hugger

It is akin to the Score Keeper example, but it allows you to give hugs to friends and tracks how many hugs have been given
It will also deliver hugs when asked.

## Setup
Hugger uses a serverless architecture via an AWS Lambda function. To deploy on your own Lambda for testing, follow these steps:

1. Clone and download this repository.
2. Install dependencies using `yarn`.
3. Run `npm run setup` to generate the Lambda deployment files.
4. Fill out the necessary fields in `.env`.
5. Add your Alexa Skill app id to `deploy.env` as `APP_ID=<appId>`.
6. Run `npm run deploy` to deploy skill to your Lambda function.
7. Add the contents of `intent-schema.json` and `sample-utterances.txt` to your Alexa skill.
8. Install and test.

## Testing

You can test locally by editing `event.json` with a specific Lambda Request. You may find it useful to copy and paste from the Testing page of the Alexa skill.

## Acknowledgements

Blackjack Trainer makes use of the following projects:

## Privacy

This bot keeps no user information.
