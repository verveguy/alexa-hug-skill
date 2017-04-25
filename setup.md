Here are the parameters you should set up with your Alexa Skill:

# Intent Schema

```
{
  "intents": [{
    "intent": "GiveHug",
    "slots": [
     {
       "name": "Huggee",
       "type": "HUGGEE"
     }]
  }, {
    "intent": "ExitApp"
  }]
}
```

# Slot types

* Type: `HUGGEE`

Examples: 

```
Dorothy
Patches
Luna
Minnie
Kara
Brett
```

# Sample Utterances

GiveHug hug {Huggee}
GiveHug squeeze {Huggee}
GiveHug embrace {Huggee}
GiveHug give {Huggee} a hug
GiveHug {Huggee}
GiveHug to give {Huggee} a hug
ExitApp stop
