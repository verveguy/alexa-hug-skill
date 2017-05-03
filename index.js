
const Alexa = require('alexa-sdk')

const appId = 'amzn1.ask.skill.b78bb10b-aed5-4144-8483-6fa8b6c61f73'

exports.handler = function (event, context, callback) {
  let alexa = Alexa.handler(event, context)
  alexa.appId = appId
  alexa.dynamoDBTableName = 'hugger'
  alexa.registerHandlers(newSessionHandlers, hugHandlers, configureHandlers)
  alexa.execute()
}

const states = {
  HUGMODE: '_HUGMODE',
  CONFIGUREMODE: '_CONFIGUREMODE'  // Configuration setup mode
}

// some helper functions for slot access

const getSlots = function (event)
{
  'use strict'
  return event &&
    event.request &&
    event.request.type === 'IntentRequest' &&
    event.request.intent &&
    event.request.intent.slots
}

const getSlot = function (event, slotname)
{
  'use strict'
  const slots = getSlots(event)
  return slots[slotname] && slots[slotname].value
}

const getHugsForHuggee = function (hugs, huggee)
{
  // extract all the hugs for this huggee
  let hugsForHuggee = hugs.filter((hug) =>
  {
    return hug['huggee'] === huggee
  })
  return hugsForHuggee
}

const removeHugsForHuggee = function (hugs, huggee) {
  // remove all the hugs for this huggee
  let hugsNotForHuggee = hugs.filter((hug) =>
  {
    return hug['huggee'] !== huggee
  })
  return hugsNotForHuggee
}

var newSessionHandlers = {
  'NewSession': function () {
    console.log('new session for event:', this.event)
    if (Object.keys(this.attributes).length === 0)
    {
      this.attributes['endedSessionCount'] = 0
      this.attributes['hugsGiven'] = 0
      this.attributes['hugs'] = []
    }
    this.handler.state = states.HUGMODE
    this.emit(':ask', 'Welcome to Hugger. You have given ' +
      this.attributes['hugsGiven'].toString() + ' hugs. Would you like to hug someone?',
      'Say yes or no to quit.')
  },

  'AMAZON.YesIntent': function () {
    console.log('YES in empty state')
    this.handler.state = states.HUGMODE
    this.emit(':ask', 'Great! Who would you like to hug?', 'Who would you like to hug?')
  },

  'AMAZON.NoIntent': function () {
    console.log('NO in empty state')
    this.handler.state = ''
    this.emit(':tell', 'Goodbye!')
  },

  'Unhandled': function () {
    console.log('Unhandled during initial state', this.event)
    var message = 'Unhandled intent during initial state.'
    this.emit(':tell', message)
  }

}

var hugHandlers = Alexa.CreateStateHandler(states.HUGMODE, {
  'GiveHugIntent': function () {
    console.log('GiveHugIntent', this.event)
    const huggee = getSlot(this.event, 'Huggee')
    const hugger = getSlot(this.event, 'Hugger')
    if (typeof hugger === 'undefined')
    {
      let message = 'Who is hugging ' + huggee + '?'
      this.emit(':elicitSlot', 'Hugger', message, message)
    }
    else
    {
      this.attributes['hugsGiven'] = this.attributes['hugsGiven'] + 1
      var hugs = this.attributes['hugs']
      hugs.append({'huggee': huggee, 'hugger': hugger})
      this.emit(':tell', huggee + ' has been hugged by ' + hugger + '.')
    }
  },

  'CheckHugsIntent': function () {
    console.log('CheckHugsIntent', this.event)
    let huggee = getSlot(this.event, 'Huggee')
    if (typeof huggee === 'undefined')
    {
      let message = 'Who do you want to check the hugs for?'
      this.emit(':elicitSlot', 'Huggee', message, message)
    }
    else
    {
      let hugsForHuggee = getHugsForHuggee(this.attributes['hugs'], huggee)
      let message = huggee + (hugsForHuggee.length > 0 ? ' has been hugged.' : 'has not been hugged.')
      this.emit(':tell', message)
    }
  },

  'CountHugsIntent': function () {
    console.log('CountHugsIntent', this.event)
    let huggee = getSlot(this.event, 'Huggee')
    if (typeof huggee === 'undefined')
    {
      let message = 'Who do you want to count the hugs for?'
      this.emit(':elicitSlot', 'Huggee', message, message)
    }
    else
    {
      let hugsForHuggee = getHugsForHuggee(this.attributes['hugs'], huggee)
      let message = huggee + ' has been hugged ' + hugsForHuggee.length + ' times.'
      this.emit(':tell', message)
    }
  },

  'RetrieveHugsIntent': function () {
    console.log('RetrieveHugsIntent', this.event)
    let huggee = getSlot(this.event, 'Huggee')
    if (typeof huggee === 'undefined')
    {
      let message = 'Who do you want to retrieve the hugs for?'
      this.emit(':elicitSlot', 'Huggee', message, message)
    }
    else
    {
      let hugsForHuggee = getHugsForHuggee(this.attributes['hugs'], huggee)

      // TODO: best way to say who hugged them?
      let message = hugsForHuggee.reduce(function (acc, val)
      {
        return acc + ', ' + val['hugger']
      }, huggee + ' has been hugged by ')

      if (hugsForHuggee.length === 0)
      {
        message = message + ' no one'
      }
      this.attributes['hugs'] = removeHugsForHuggee(this.attributes['hugs'], huggee)
      this.emit(':tell', message + '.')
    }
  },

  'ConfigureIntent': function () {
    console.log('ConfigureIntent', this.event)
    this.handler.state = states.CONFIGUREMODE
    let message = 'Configure your hugger by saying "Register Person eating Food with Animal".'
    this.emit(':ask', message, message)
  },

  'AMAZON.StopIntent': function ()
  {
    console.log('StopIntent', this.event)
    this.emit(':tell', 'Goodbye!')
  },

  'AMAZON.CancelIntent': function () {
    console.log('CancelIntent', this.event)
    this.emit(':tell', 'Goodbye!')
  },

  'SessionEndedRequest': function () {
    console.log('SessionEndedRequest', this.event)
    // this.attributes['endedSessionCount'] += 1
    this.handler.state = ''
    this.emit(':saveState', true)
    this.emit(':tell', 'Goodbye!')
  },

  'Unhandled': function () {
    console.log('Unhandled during HUGMODE', this.event)
    var message = 'Unhandled intent during HUGMODE state.'
    this.emit(':tell', message)
  }

})

var configureHandlers = Alexa.CreateStateHandler(states.CONFIGUREMODE, {
  'NewSession': function () { 
    console.log('NewSession during CONFIGUREMODE', this.event)
    this.emit('NewSession') // Uses the handler in newSessionHandlers
  },

  'RegisterIntent': function () {
    console.log('RegisterIntent during CONFIGUREMODE', this.event)
    const food = getSlot(this.event, 'Food')
    const animal = getSlot(this.event, 'Animal')
    const person = getSlot(this.event, 'Person')
    this.attributes['pendingRegistration'] = { 'person': person, 'food': food, 'animal': animal }
    this.emit(':ask', 'Registering your hugger as ' + person + ' eating ' + food + ' with ' + animal + '. Is that correct?',
      'Say yes to confirm or no to cancel.')
  },

  'GiveHugIntent': function () {
    console.log('GiveHugIntent during CONFIGUREMODE', this.event)
    this.handler.state = ''
    this.emit('GiveHugIntent')
  },

  'AMAZON.HelpIntent': function () {
    console.log('HelpIntent during CONFIGUREMODE', this.event)
    var message = 'You can configure your hugger by saying "Register Person eating Food with Animal".'
    this.emit(':ask', message, message)
  },

  'AMAZON.YesIntent': function () {
    console.log('YesIntent during CONFIGUREMODE', this.event)
    this.attributes['registration'] = this.attributes['pendingRegistration']
    this.handler.state = ''
    this.emit(':ask', 'Great! ' + 'Try hugging someone now.', 'Try hugging someone.')
  },

  'AMAZON.NoIntent': function () {
    console.log('NoIntent during CONFIGUREMODE', this.event)
    this.handler.state = ''
    this.emit(':tell', 'Ok, registration unchanged.')
  },

  'AMAZON.StopIntent': function () {
    console.log('StopIntent during CONFIGUREMODE', this.event)
    this.handler.state = ''
    this.emit(':tell', 'Goodbye!')
  },

  'AMAZON.CancelIntent': function () {
    console.log('CancelIntent during CONFIGUREMODE', this.event)
    this.handler.state = ''
    this.emit(':tell', 'Goodbye!')
  },

  'SessionEndedRequest': function () {
    console.log('SessionEndedRequest during CONFIGUREMODE', this.event)
    // this.attributes['endedSessionCount'] += 1
    this.handler.state = ''
    this.emit(':saveState', true)
    this.emit(':tell', 'Goodbye!')
  },

  'Unhandled': function () {
    console.log('Unhandled during CONFIGUREMODE', this.event)
    var message = 'Say yes to continue, or no to cancel registration.'
    this.emit(':ask', message, message)
  }
})
