Here are the parameters you should set up with your Alexa Skill:

# Intent Schema

```
{
  "intents": [
    {
      "name": "AMAZON.CancelIntent",
      "samples": []
    },
    {
      "name": "AMAZON.HelpIntent",
      "samples": []
    },
    {
      "name": "AMAZON.StopIntent",
      "samples": []
    },
    {
      "name": "CheckHugsIntent",
      "samples": [
        "Are there any hugs for {Huggee}"
      ],
      "slots": [
        {
          "name": "Huggee",
          "type": "AMAZON.US_FIRST_NAME",
          "samples": []
        }
      ]
    },
    {
      "name": "ConfigureIntent",
      "samples": [
        "configure"
      ],
      "slots": []
    },
    {
      "name": "CountHugsIntent",
      "samples": [
        "How many hugs are there for {Huggee}"
      ],
      "slots": [
        {
          "name": "Huggee",
          "type": "AMAZON.US_FIRST_NAME",
          "samples": []
        }
      ]
    },
    {
      "name": "GiveHugIntent",
      "samples": [
        "{Hugger} hugs {Huggee}",
        "hug {Huggee}",
        "{Hugger} squeezes {Huggee}",
        "squeeze {Huggee}",
        "embrace {Huggee}",
        "{Hugger} embraces {Huggee}",
        "cuddle {Huggee}",
        "{Hugger} cuddles {Huggee}",
        "snuggle {Huggee}",
        "{Hugger} snuggles {Huggee}",
        "give {Huggee} a hug",
        "give {Huggee} a hug from {Hugger}",
        "to give {Huggee} a hug",
        "to give {Huggee} a hug from {Hugger}",
        "to give {Huggee} a squeeze",
        "to give {Huggee} a squeeze from {Hugger}",
        "to give {Huggee} an embrace",
        "to give {Huggee} an embrace from {Hugger}",
        "to give {Huggee} a cuddle",
        "to give {Huggee} a cuddle from {Hugger}",
        "to give {Huggee} a snuggle",
        "to give {Huggee} a snuggle from {Hugger}",
        "to embrace {Huggee}",
        "to squeeze {Huggee}",
        "give a hug to {Huggee}",
        "give a squeeze to {Huggee}",
        "give a bear hug to {Huggee}",
        "bear hug {Huggee}",
        "give a cuddle to {Huggee}",
        "to cuddle {Huggee}"
      ],
      "slots": [
        {
          "name": "Huggee",
          "type": "AMAZON.US_FIRST_NAME",
          "samples": [
            "{Huggee}"
          ]
        },
        {
          "name": "Hugger",
          "type": "AMAZON.US_FIRST_NAME",
          "samples": [
            "{Hugger}"
          ]
        }
      ]
    },
    {
      "name": "RegisterIntent",
      "samples": [
        "{Person} ate {Food} with {Animal}",
        "{Person} eats {Food} with a {Animal}",
        "{Person} eating {Food} with {Animal}",
        "{Person} eating {Food} with a {Animal}",
        "{Person} and {Animal} ate {Food}",
        "{Person} and a {Animal} ate {Food}",
        "{Person} and {Animal} are eating {Food}",
        "{Person} and a {Animal} are eating {Food}",
        "{Person} and {Animal} eats {Food}",
        "{Person} and a {Animal} eats {Food}"
      ],
      "slots": [
        {
          "name": "Food",
          "type": "AMAZON.Food",
          "samples": []
        },
        {
          "name": "Person",
          "type": "AMAZON.Person",
          "samples": []
        },
        {
          "name": "Animal",
          "type": "AMAZON.Animal",
          "samples": []
        }
      ]
    },
    {
      "name": "RetrieveHugsIntent",
      "samples": [
        "Retrieve hugs for {Huggee}",
        "Get hugs for {Huggee}",
        "Get my hugs"
      ],
      "slots": [
        {
          "name": "Huggee",
          "type": "AMAZON.US_FIRST_NAME",
          "samples": [
            "{Huggee}"
          ]
        }
      ]
    }
  ],
  "prompts": [
    {
      "id": "Elicit.Intent-GiveHugIntent.IntentSlot-Huggee",
      "promptVersion": "1.0",
      "definitionVersion": "1.0",
      "variations": [
        {
          "type": "PlainText",
          "value": "Who would you like to hug?"
        }
      ]
    },
    {
      "id": "Elicit.Intent-GiveHugIntent.IntentSlot-Hugger",
      "promptVersion": "1.0",
      "definitionVersion": "1.0",
      "variations": [
        {
          "type": "PlainText",
          "value": "Who is hugging {Huggee}?"
        }
      ]
    },
    {
      "id": "Elicit.Intent-RetrieveHugsIntent.IntentSlot-Huggee",
      "promptVersion": "1.0",
      "definitionVersion": "1.0",
      "variations": [
        {
          "type": "PlainText",
          "value": "For whom do you want to retrieve hugs"
        }
      ]
    }
  ],
  "dialog": {
    "version": "1.0",
    "intents": [
      {
        "name": "CheckHugsIntent",
        "confirmationRequired": false,
        "prompts": {},
        "slots": [
          {
            "name": "Huggee",
            "type": "AMAZON.US_FIRST_NAME",
            "elicitationRequired": false,
            "confirmationRequired": false,
            "prompts": {}
          }
        ]
      },
      {
        "name": "ConfigureIntent",
        "confirmationRequired": false,
        "prompts": {},
        "slots": []
      },
      {
        "name": "CountHugsIntent",
        "confirmationRequired": false,
        "prompts": {},
        "slots": [
          {
            "name": "Huggee",
            "type": "AMAZON.US_FIRST_NAME",
            "elicitationRequired": false,
            "confirmationRequired": false,
            "prompts": {}
          }
        ]
      },
      {
        "name": "GiveHugIntent",
        "confirmationRequired": false,
        "prompts": {},
        "slots": [
          {
            "name": "Huggee",
            "type": "AMAZON.US_FIRST_NAME",
            "elicitationRequired": true,
            "confirmationRequired": false,
            "prompts": {
              "elicit": "Elicit.Intent-GiveHugIntent.IntentSlot-Huggee"
            }
          },
          {
            "name": "Hugger",
            "type": "AMAZON.US_FIRST_NAME",
            "elicitationRequired": true,
            "confirmationRequired": false,
            "prompts": {
              "elicit": "Elicit.Intent-GiveHugIntent.IntentSlot-Hugger"
            }
          }
        ]
      },
      {
        "name": "RegisterIntent",
        "confirmationRequired": false,
        "prompts": {},
        "slots": [
          {
            "name": "Food",
            "type": "AMAZON.Food",
            "elicitationRequired": false,
            "confirmationRequired": false,
            "prompts": {}
          },
          {
            "name": "Person",
            "type": "AMAZON.Person",
            "elicitationRequired": false,
            "confirmationRequired": false,
            "prompts": {}
          },
          {
            "name": "Animal",
            "type": "AMAZON.Animal",
            "elicitationRequired": false,
            "confirmationRequired": false,
            "prompts": {}
          }
        ]
      },
      {
        "name": "RetrieveHugsIntent",
        "confirmationRequired": false,
        "prompts": {},
        "slots": [
          {
            "name": "Huggee",
            "type": "AMAZON.US_FIRST_NAME",
            "elicitationRequired": true,
            "confirmationRequired": false,
            "prompts": {
              "elicit": "Elicit.Intent-RetrieveHugsIntent.IntentSlot-Huggee"
            }
          }
        ]
      }
    ]
  }
}

```