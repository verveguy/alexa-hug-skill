/*global require, module, console */
const alexa = require('alexa-response');

const botBuilder = require('claudia-bot-builder'),
	getIntentName = function (alexaPayload) {
		'use strict';
		return alexaPayload &&
			alexaPayload.request &&
			alexaPayload.request.type === 'IntentRequest' &&
			alexaPayload.request.intent &&
			alexaPayload.request.intent.name;
	},
	getSlots = function (alexaPayload) {
		'use strict';
		return alexaPayload &&
			alexaPayload.request &&
			alexaPayload.request.type === 'IntentRequest' &&
			alexaPayload.request.intent &&
			alexaPayload.request.intent.slots;
	},
	getSlot = function (alexaPayload, slotname) {
		'use strict';
		const slots = getSlots(alexaPayload);
		return slots[slotname] && slots[slotname].value;
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
		console.log('Slots:', getSlots(originalRequest.body))
		let result = null;

		if (getIntentName(originalRequest.body) === 'GiveHug') {
			const huggee = getSlot(originalRequest.body, 'Huggee');
			const hugger = getSlot(originalRequest.body, 'Hugger');
			if ("undefined" === typeof hugger)
			{
				result = alexa.Response.ask('Tell me who is hugging ' + huggee).reprompt('Tell me who is hugging ' + huggee);
				// so this asks, but how to handle the response?
			}
			else
			{
				result = alexa.Response.say(huggee + ' has been hugged by '+ hugger + '.'); // TODO: count of times
			}
		} 
		else if (getIntentName(originalRequest.body) === 'Register') {
			const food = getSlot(originalRequest.body, 'Food');
			const animal = getSlot(originalRequest.body, 'Animal');
			const person = getSlot(originalRequest.body, 'Person');
			result = alexa.Response.say("Registering your hugger as " + person + " eating " + food + " with " + animal);
		} 
		else if (getRequestType(originalRequest.body) === 'LaunchRequest'){
			result = alexa.Response.ask('Tell me who you\'d like to hug.').reprompt('Tell me who you\'d like to hug.');
		} 
		else if (getIntentName(originalRequest.body) === 'ExitApp'){
			result = alexa.Response.speech('Hugs have been stored for future delivery.');
		}
		
		if (result !== null)
		{
			result = result.build();
			console.log(result);
		}
		else 
		{
			console.log("empty result");
			result = {};
		}

		return result;
	},
	{ platforms: ['alexa'] }
);

module.exports = api;
