# discord.js Boilerplate
Simple boiler plate you can use to start your [discord.js](https://discord.js.org/#/) project fast.

## Usage
Starting this bot is easy, two npm scripts are specified. 
```
npm run debug | The bot will start, registering commands for a testing guild. Note the bot will still run in other guilds.
npm run start | The bot will register commands everywhere.
```

## Installation 
With [git](https://git-scm.com/) and [node.js](https://nodejs.org/) installed:
```
git clone https://github.com/kingpepsalt/discordjs-boilerplate
```
You will likely want to remove the `.git` folder in the directory and initialise your own repo with:
```
git init .
```
**IMPORTANT:** In `.gitignore`, `#config.json` should become `config.json`
### `config.json` entries
Key|Description
---|---
token|The discord token of your bot
testGuildId|The guild that you test your bot in
clientId|The application/client ID of your bot

In the `package.json` file, you may want to change the project title and descriptions.

Add me on discord if you need help `pepsalt#1662`