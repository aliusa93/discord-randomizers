# discord-randomizers

## Introduction

> Random strings and number functions for your discord bot. Do you not want to type out the code you need you need for random responses? Make things easier by installing this very light and compact package!

## Code

```
const Discord = require('discord.js')
const client = new Discord.Client()
const random = require('discord-randomizers')

client.on('message', message => {
    if(message.content === '!simprate') {
        const rate = random.randomNum(100)
        const target = message.mentions.members.first() || message.author

        message.channel.send(`${target.user.tag} is ${rate} percent simp.`)
    }
})
```



## Installation

> Install this package with npm i discord-randomizers