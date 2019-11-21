import { ContextMessageUpdate } from 'telegraf'

const privateMessageHandler = (ctx: ContextMessageUpdate) => {
    ctx.reply('I can\'t help you right now')
}


export default privateMessageHandler