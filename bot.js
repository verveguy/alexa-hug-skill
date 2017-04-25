/*global require, module, console */
const botBuilder = require('claudia-bot-builder'),
	getIntentName = function (alexaPayload) {
		'use strict';
		return alexaPayload &&
			alexaPayload.request &&
			alexaPayload.request.type === 'IntentRequest' &&
			alexaPayload.request.intent &&
			alexaPayload.request.intent.name;
	},
	getRequestType = function (alexaPayload) {
		'use strict';
		return alexaPayload &&
			alexaPayload.request &&
			alexaPayload.request.type;
	};


const api = botBuilder(
	function (message, originalRequest) {
		'use strict';
		console.log(originalRequest.body);
		console.log('Message:', message)
		let result = {};

		if (getIntentName(originalRequest.body) === 'GiveHug') {
			// just return a text message to have it automatically packaged
			// as a PlainText Alexa response, continuing the session
			result = {
				response: {
					outputSpeech: {
						type: 'PlainText',
						text: message.text + ' has been hugged.' // TODO: count of times
					},
					shouldEndSession: false
				}
			};
		} 
		// you can use all the Alexa request properties from originalRequest.body
		else if (getRequestType(originalRequest.body) === 'LaunchRequest'){
			// return a JavaScript object to set advanced response params
			// this prevents any packaging from bot builder and is just
			// returned to Alexa as you specify
			result = {
				response: {
					outputSpeech: {
						type: 'PlainText',
						text: 'Tell me who you\'d like to hug.'
					},
					shouldEndSession: false
				}
			};
		} 
		else if (getIntentName(originalRequest.body) === 'ExitApp'){
			// return a JavaScript object to set advanced response params
			// this prevents any packaging from bot builder and is just
			// returned to Alexa as you specify
			result = {
				response: {
					outputSpeech: {
						type: 'PlainText',
						text: 'Hugs have been stored for future delivery.'
					},
					shouldEndSession: true
				}
			};
		}
		else {
			result = {};
		}
		console.log(result);
		return result;
	},
	{ platforms: ['alexa'] }
);

module.exports = api;
