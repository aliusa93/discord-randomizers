[![npm version](https://badge.fury.io/js/discord-randomizers.svg)](https://badge.fury.io/js/discord-randomizers)

# discord-randomizers

## Introduction

> Random strings and number functions for your discord bot. Do you not want to type out the code you need you need for random responses? Make things easier by installing this very light and compact package!

## Update
> As my package is getting noticed, I have added some new functions! If this package gets more popular, I will be making a discord server for it.

## Random Num Function.
> You can pass in a limit for random numbers. It is required for a more user friendly experience.

```js
const Discord = require('discord.js')
const client = new Discord.Client()
const random = require('discord-randomizers')

client.on('message', message => {
    if(message.content === '!simprate') {
        const rate = random.randomNum(100)
        const target = message.mentions.members.first() || message.author

        message.channel.send(`${target} is ${rate} percent simp.`)
    }
})
```

## Two Random Strings
>Pass in two random strings, and it will randomize between those two strings.

```js
const Discord = require('discord.js')
const client = new Discord.Client()
const random = require('discord-randomizers')

client.on('message', message => {
    if(message.content === '!simprate') {
        const strings = random.twoRandomStr('epic', 'not epic')
        const target = message.mentions.members.first() || message.author

        message.channel.send(`${target} is ${strings}.`)
    }
})
```

## Random String
>This generates an absolutely random string, you can also pass in a character limit for the random strings, but it is not required.

```js
const Discord = require('discord.js')
const client = new Discord.Client()
const random = require('discord-randomizers')

client.on('message', message => {
    if(message.content === '!random') {
        const string = random.randomString(20) //Passing in 20 will get a limit of 20 characters in the string.

        message.channel.send(string)
    }
})
```

## Three Lucky Numbers
>This generates three "lucky" numbers, you can also pass in a limit.

```js
const Discord = require('discord.js')
const client = new Discord.Client()
const random = require('discord-randomizers')

client.on('message', message => {
    if(message.content === '!lucky') {
        const luckyNums = random.threeLuckyNumbers(20) //Passing in 20 will make the lucky numbers range from 0-20.

        message.channel.send(luckyNums)
    }
})
```

## Installation

> Install this package with npm i discord-randomizers