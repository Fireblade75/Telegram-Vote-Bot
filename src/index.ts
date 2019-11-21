import Telegraf from 'telegraf'
import dotenv from 'dotenv'
import privateMessageHandler from './message-handlers/private_message_handler'
import groupMessageHandler from './message-handlers/group_message_handler'
dotenv.config()

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.on('message', (ctx) => {
    const chat = ctx.chat
    if (chat.type === 'private') {
        privateMessageHandler(ctx)
    } else if(chat.type === 'supergroup' || chat.type === 'group') {
        groupMessageHandler(ctx)
    }
})

bot.launch()
