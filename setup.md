Here are the parameters you should set up with your Alexa Skill:

# Intent Schema

```
{
  "intents": [
    {
      "intent": "ConfigureIntent"
    },
    {
      "intent": "GiveHugIntent",
      "slots": [
        {
          "name": "Huggee",
          "type": "AMAZON.US_FIRST_NAME"
        },
          {
          "name": "Hugger",
          "type": "AMAZON.US_FIRST_NAME"
        }
      ]
    },
    {
      "intent": "RetrieveHugsIntent",
      "slots": [
        {
          "name": "Huggee",
          "type": "AMAZON.US_FIRST_NAME"
        }
     ]
    },
    {
      "intent": "CheckHugsIntent",
      "slots": [
        {
          "name": "Huggee",
          "type": "AMAZON.US_FIRST_NAME"
        }
     ]
    },
    {
      "intent": "CountHugsIntent",
      "slots": [
        {
          "name": "Huggee",
          "type": "AMAZON.US_FIRST_NAME"
        }
     ]
    },
    {
      "intent": "RegisterIntent",
      "slots": [
        {
          "name": "Food",
          "type": "AMAZON.Food"
        },
        {
          "name": "Person",
          "type": "AMAZON.Person"
        },
        {
          "name": "Animal",
          "type": "AMAZON.Animal"
        }
      ]
    }
  ]
}
```

# Slot types
(none)

# Sample Utterances

GiveHugIntent {Hugger} hugs {Huggee}
GiveHugIntent hug {Huggee}
GiveHugIntent {Hugger} squeezes {Huggee}
GiveHugIntent squeeze {Huggee}
GiveHugIntent embrace {Huggee}
GiveHugIntent {Hugger} embraces {Huggee}
GiveHugIntent cuddle {Huggee}
GiveHugIntent {Hugger} cuddles {Huggee}
GiveHugIntent snuggle {Huggee}
GiveHugIntent {Hugger} snuggles {Huggee}
GiveHugIntent give {Huggee} a hug
GiveHugIntent give {Huggee} a hug from {Hugger}
GiveHugIntent to give {Huggee} a hug
GiveHugIntent to give {Huggee} a hug from {Hugger}
GiveHugIntent to give {Huggee} a squeeze
GiveHugIntent to give {Huggee} a squeeze from {Hugger}
GiveHugIntent to give {Huggee} an embrace
GiveHugIntent to give {Huggee} an embrace from {Hugger}
GiveHugIntent to give {Huggee} a cuddle
GiveHugIntent to give {Huggee} a cuddle from {Hugger}
GiveHugIntent to give {Huggee} a snuggle
GiveHugIntent to give {Huggee} a snuggle from {Hugger}
GiveHugIntent to embrace {Huggee}
GiveHugIntent to squeeze {Huggee}
GiveHugIntent give a hug to {Huggee}
GiveHugIntent give a squeeze to {Huggee}
GiveHugIntent give a bear hug to {Huggee}
GiveHugIntent bear hug {Huggee}
GiveHugIntent give a cuddle to {Huggee}
GiveHugIntent to cuddle {Huggee}

CheckHugsIntent Are there any hugs for {Huggee} ?
CountHugsIntent How many hugs are there for {Huggee} ?

RetrieveHugsIntent Retrieve hugs for {Huggee}
RetrieveHugsIntent Get hugs for {Huggee}
RetrieveHugsIntent Get my hugs

ConfigureIntent configure

RegisterIntent {Person} ate {Food} with {Animal}
RegisterIntent {Person} eats {Food} with a {Animal}
RegisterIntent {Person} eating {Food} with {Animal}
RegisterIntent {Person} eating {Food} with a {Animal}
RegisterIntent {Person} and {Animal} ate {Food}
RegisterIntent {Person} and a {Animal} ate {Food}
RegisterIntent {Person} and {Animal} are eating {Food}
RegisterIntent {Person} and a {Animal} are eating {Food}
RegisterIntent {Person} and {Animal} eats {Food}
RegisterIntent {Person} and a {Animal} eats {Food}

