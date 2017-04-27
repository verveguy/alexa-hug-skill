Here are the parameters you should set up with your Alexa Skill:

# Intent Schema

```
{
  "intents": [
    {
      "slots": [
        {
          "name": "Huggee",
          "type": "AMAZON.US_FIRST_NAME"
        },
         {
          "name": "Hugger",
          "type": "AMAZON.US_FIRST_NAME"
        }
     ],
      "intent": "GiveHug"
    },
    {
      "intent": "Register",
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
    },
    {
      "intent": "ExitApp"
    }
  ]
}
```

# Slot types
(none)

# Sample Utterances

GiveHug {Hugger} hugs {Huggee}
GiveHug hug {Huggee}
GiveHug {Hugger} squeezes {Huggee}
GiveHug squeeze {Huggee}
GiveHug embrace {Huggee}
GiveHug {Hugger} embraces {Huggee}
GiveHug cuddle {Huggee}
GiveHug {Hugger} cuddles {Huggee}
GiveHug snuggle {Huggee}
GiveHug {Hugger} snuggles {Huggee}
GiveHug give {Huggee} a hug
GiveHug give {Huggee} a hug from {Hugger}
GiveHug to give {Huggee} a hug
GiveHug to give {Huggee} a hug from {Hugger}
GiveHug to give {Huggee} a squeeze
GiveHug to give {Huggee} a squeeze from {Hugger}
GiveHug to give {Huggee} an embrace
GiveHug to give {Huggee} an embrace from {Hugger}
GiveHug to give {Huggee} a cuddle
GiveHug to give {Huggee} a cuddle from {Hugger}
GiveHug to give {Huggee} a snuggle
GiveHug to give {Huggee} a snuggle from {Hugger}
GiveHug to embrace {Huggee}
GiveHug to squeeze {Huggee}
GiveHug give a hug to {Huggee}
GiveHug give a squeeze to {Huggee}
GiveHug give a bear hug to {Huggee}
GiveHug bear hug {Huggee}
GiveHug give a cuddle to {Huggee}
GiveHug to cuddle {Huggee}

Register {Person} ate {Food} with {Animal}
Register {Person} eats {Food} with a {Animal}
Register {Person} eating {Food} with {Animal}
Register {Person} eating {Food} with a {Animal}
Register {Person} and {Animal} ate {Food}
Register {Person} and a {Animal} ate {Food}
Register {Person} and {Animal} are eating {Food}
Register {Person} and a {Animal} are eating {Food}
Register {Person} and {Animal} eats {Food}
Register {Person} and a {Animal} eats {Food}

ExitApp stop
