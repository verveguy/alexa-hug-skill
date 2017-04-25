# Amazon Alexa Skill with Claudia Bot Builder

This is a simple Alexa skill using [Claudia Bot Builder](https://github.com/claudiajs/claudia-bot-builder). 

It is akin to the Score Keeper example, but it allows you to give hugs to friends and tracks how many hugs have been given
It will also deliver hugs when asked.


## Installing from source code

To try it out, follow these steps:

1. Create a new Alexa Skills app at from the [Amazon Developer Console](https://developer.amazon.com/edw/home.html)
2. On the **Interaction Model** screen of the app setup, create the [intents and utterances](setup.md) 
3. On the **Configuration** screen of the app setup, select HTTPS integration
4. run `npm run create` in this project to deploy the chat bot, and copy the endpoint URL it prints out, then paste to the HTTPS endpoint input box in the app setup screen in the Amazon Developer Console
5. add a name to your chatbot when NPM deployment asks, then complete the deployment process
6. Complete the app setup in the Amazon Developer Console
7. You can enable the skill for your Amazon account in the **Test** tab, and try it out. For example, say 'Alexa, ask hug Dorothy'

## Privacy

This bot keeps no user information.

## License

The MIT License (MIT)

Copyright (c) 2017 Brett Adam

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
