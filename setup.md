Here are the parameters you should set up with your Alexa Skill:

# Intent Schema

```
{
  "intents": [{
    "intent": "GiveHug",
    "slots": [
     {
       "name": "Huggee",
       "type": "Person"
     }]
  }, {
    "intent": "ExitApp"
  }]
}
```

# Slot types

* Type: `NAME`

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

GiveHug hug {Person}
GiveHug squeeze {Person}
GiveHug embrace {Person}
GiveHug give {Person} a hug
ExitApp stop
