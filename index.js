import express from "express";
import dotenv from 'dotenv'
import { Client, GatewayIntentBits } from "discord.js"

dotenv.config()

const app = express()

const PORT = 3000

let client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.MessageContent
    ],
    partials:["CHANNEL"]
})  
 
client.login(process.env.BOT_TOKEN)

client.on("messageCreate", async (message) => {
    if(message.content == "study"){
        message.reply("Stop being lazy and study")
    }
})



app.listen(PORT, () => {
    console.log("App listening on port 3000")
})

